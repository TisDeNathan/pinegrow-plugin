<?php
define('PG_DB_VERSION', 9);

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-pinegrow-plugin-activator.php
 */
function activate_pinegrow_plugin() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-pinegrow-plugin-activator.php';
    Pinegrow_Plugin_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-pinegrow-plugin-deactivator.php
 */
function deactivate_pinegrow_plugin() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-pinegrow-plugin-deactivator.php';
    Pinegrow_Plugin_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_pinegrow_plugin' );
register_deactivation_hook( __FILE__, 'deactivate_pinegrow_plugin' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-pinegrow-plugin.php';

class Pinegrow_License {
    private $is_pro = null;

    public function __construct()
    {
    }

    public function is_valid() {
        if($this->is_pro === null) {
            $this->is_pro = false;
            $license = get_option('pinegrow-license');
            if(!empty($license) && $license['status'] === 'OK') {
                $this->is_pro = true;
            }
        }
        return $this->is_pro;
    }

    public function menu_output() {
        return '';
    }

    public function activate($email, $serial) {
        $this->is_pro = null;

        $url = 'https://pinegrow.com/shop/activateProduct/2';
        $response = wp_remote_post( $url, array(
                'method'      => 'POST',
                'timeout'     => 30,
                'redirection' => 5,
                'httpversion' => '1.0',
                'blocking'    => true,
                'headers'     => array(
                    'Accept' => 'application/json'
                ),
                'body'        => array(
                    'email' => $email,
                    'serial' => $serial,
                    'url' => esc_url( home_url() ),
                )
            )
        );
        if(is_wp_error($response)) {
            delete_option('pinegrow-license');
            return 'Unable to communicate with the license server: ' . $response->get_error_message();
        } else {
            $data = json_decode($response['body'], true);
            if($data['status'] === 'OK' && !empty($data['product'])) {
                if(empty($data['activation_id'])) {
                    $data['activation_id'] = 0;
                }
                update_option('pinegrow-license', $data, true);
                return true;
            } else {
                delete_option('pinegrow-license');
                return empty($data['status_msg']) ? 'The license is not found. Please check if email and serial code are correct.' : $data['status_msg'];
            }
        }
    }

    public function deactivate($email, $serial, $activation_id) {
        $this->is_pro = null;

        $url = 'https://pinegrow.com/shop/deactivateProduct';
        $response = wp_remote_post( $url, array(
                'method'      => 'POST',
                'timeout'     => 30,
                'redirection' => 5,
                'httpversion' => '1.0',
                'blocking'    => true,
                'headers'     => array(
                    'Accept' => 'application/json'
                ),
                'body'        => array(
                    'email' => $email,
                    'serial' => $serial,
                    'url' => esc_url( home_url() ),
                    'activation_id' => $activation_id,
                )
            )
        );
        if(is_wp_error($response)) {
            return 'Unable to communicate with the license server: ' . $response->get_error_message();
        } else {
            $data = json_decode($response['body'], true);
            if($data['status'] === 'OK') {
                delete_option('pinegrow-license');
                return true;
            } else {
                return 'Unable to deactivate the license.';
            }
        }
    }
}

function init_pinegrow_license() {

    global $pg_license_info, $pg_updater;
    $pg_license_info = new Pinegrow_License();

    require_once "updater.php";
    $pg_updater = new Pinegrow_Plugin_Updater( __FILE__ );
}

init_pinegrow_license();

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_pinegrow_plugin() {

    $plugin = new Pinegrow_Plugin();
    $plugin->run();

}
run_pinegrow_plugin();
