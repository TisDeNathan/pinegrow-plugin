<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://pinegrow.com
 * @since      1.0.0
 *
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/admin
 * @author     Pinegrow <info@pinegrow.com>
 */
class Pinegrow_Plugin_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

    private $settings;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

        require_once dirname(__FILE__)."/settings.php";
        $this->settings = new Pinegrow_Settings();
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles($hook) {
        if($hook === 'toplevel_page_pinegrow-projects') {
            wp_enqueue_style($this->plugin_name.'-admin-css', plugin_dir_url(__FILE__) . 'css/pinegrow-plugin-admin.css', array(), $this->version, 'all');
        }
        wp_enqueue_style($this->plugin_name.'-staging-css', plugin_dir_url(__FILE__) . 'css/staging.css', array(), $this->version);
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts($hook) {
        if($hook === 'toplevel_page_pinegrow-projects') {
            wp_enqueue_script($this->plugin_name.'-admin-js', plugin_dir_url(__FILE__) . 'js/pinegrow-plugin-admin.js', array('jquery'), $this->version, false);
        }

        wp_enqueue_script($this->plugin_name.'-staging-js', plugin_dir_url(__FILE__) . 'js/staging.js', array(), $this->version, false);
	}

    public function admin_init() {
        if ( get_option('pinegrow_settings_have_changed') == true ) {
            flush_rewrite_rules();
            update_option('pinegrow_settings_have_changed', false);
        }

        if ( get_option('pinegrow_db_version') !== PG_DB_VERSION) {
            require_once plugin_dir_path( dirname(__FILE__) ) . 'includes/db.php';
            Pinegrow_DB::createOrUpdate();
            flush_rewrite_rules();

            require_once plugin_dir_path( dirname(__FILE__) ) . 'includes/updates.php';
            Pinegrow_Version_Updater::update();
        }

        /*
        if ( get_option('pinegrow_global_projects') !== PG_GLOBAL_PROJECTS ) {
            flush_rewrite_rules();
            update_option('pinegrow_global_projects', PG_GLOBAL_PROJECTS);
        }
        */

        add_action('load-pinegrow_page_pinegrow-projects-editor', function() {
            global $pg_plugin_public;
            if($pg_plugin_public->canUserUsePinegrow()) {
                include dirname(__DIR__) . "/pgedit.php";
                die();
            }
        });

        add_filter( 'submenu_file', function($submenu_file) {
            remove_submenu_page( 'pinegrow-projects', 'pinegrow-projects-editor' );
            remove_submenu_page( 'pinegrow-projects', 'pinegrow-login-done' );
            return $submenu_file;
        } );
    }

    public function admin_menu() {

        global $pg_plugin_public;
        if($pg_plugin_public->canUserUsePinegrow()) {
            add_menu_page('Pinegrow', 'Pinegrow', 'edit_posts', 'pinegrow-projects', array($this, 'showProjects'), 'data:image/svg+xml;base64,' . base64_encode($pg_plugin_public->pg_icon_svg), 25);

            add_submenu_page('pinegrow-projects', 'Projects', 'Projects', 'edit_posts', 'pinegrow-projects');

            if($pg_plugin_public->canUserAdminPinegrow()) {
                add_submenu_page(
                    'pinegrow-projects',
                    'Pinegrow settings and license',
                    'Settings &amp; License',
                    'edit_posts',
                    'pinegrow-projects-settings',
                    function () {
                        global $pg_license_info;
                        $this->settings->settings_create_admin_page();
                        $pg_license_info->menu_output();
                    }
                //array($this->settings, 'settings_create_admin_page')
                );
            }

            add_submenu_page(
                'pinegrow-projects',
                'Pinegrow editor',
                'Editor',
                'edit_posts',
                'pinegrow-projects-editor',
                function () {
                    echo '<div class="pinegrow-loading">Sorry, you are not allowed to use the Pinegrow editor.</div>';
                }
            );

            add_submenu_page(
                'pinegrow-projects',
                'Pinegrow editor',
                'Editor',
                'edit_posts',
                'pinegrow-login-done',
                function () {
                    global $pg_plugin_public;
                    $user = $pg_plugin_public->getCurrentUser(true);
                    $profile_page_url = $pg_plugin_public->getCurrentUserBaseUrl();

                    echo '<div class="pinegrow-loading">Login done, please close the login window.</div>';
                    ?>
                    <script>
                        if(window.parent && window !== window.parent) {
                            window.parent.postMessage({
                                action: 'pgUserLoggedIn',
                                security: '<?php echo wp_create_nonce( 'pinegrow_api_validation' ) ?>',
                                preview_url: '<?php echo $profile_page_url; ?>',
                                public_url: '<?php echo str_replace(home_url(), $pg_plugin_public->public_site_url, $profile_page_url) ?>',
                                can_share: <?php echo ($pg_plugin_public->canPublishPublicProjects($user) ? 'true' : 'false'); ?>,
                                user_settings: <?php echo json_encode($pg_plugin_public->getUserSettings()); ?>,
                                pine_cone_tasks_url: '<?php echo $pg_plugin_public->getPineConeTasksUrl($user, ''); ?>'
                            }, '*');
                        }
                    </script>
<?php
                }
            );
        }
    }

    public function show_admin_bar($show) {
        if ( get_query_var( 'pgedit', false) !== false || get_query_var( 'pgnoadminbar', false)) {
            return false;
        }
        return $show;
    }

    public function showProjects() {

        /*
        global $pg_license_info;
        if (!$pg_license_info->is_valid()) {
            echo '<h1 style="font-size:200px;">Bad license</h1>';
        }
        */
        global $pg_plugin_public;

        if($pg_plugin_public->canUserUsePinegrow()) {
            $url = PG_EDIT_URL;
            if(strpos($url, '?') !== false) {
                $url = $url.'&pgversion='.$pg_plugin_public->version;
            } else {
                $url = $url.'?pgversion='.$pg_plugin_public->version;
            }
            echo '<div class="pinegrow-loading">Loading Pinegrow editor...</div><div class="pinegrow-editor-wrapper"><iframe id="pinegrow-editor-iframe" src="'.$url.'#wp-frame"></iframe></div>';
        } else {
            echo '<div class="pinegrow-loading">Sorry, you are not allowed to use the Pinegrow editor.</div>';
        }

    }

}
