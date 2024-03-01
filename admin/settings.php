<?php

class Pinegrow_Settings {
	private $settings_options;
    private $settings_option_name = 'pinegrow_settings';

	public function __construct() {
		//add_action( 'admin_menu', array( $this, 'settings_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'settings_page_init' ) );
        add_action( 'update_option_' . $this->settings_option_name, array($this, 'updated'));
	}

    public function updated() {
        update_option('pinegrow_settings_have_changed', true);
    }

    private function notice($msg, $type = 'success') {
        return "<div class=\"notice notice-$type\"><p>$msg</p></div>";
    }

    private function showLicenseDetails($license) {
        $html = '';

        $pmap = array(
                'WP_PLUGIN_SINGLE' => 'Pinegrow WP Plugin PRO - Single site',
            'WP_PLUGIN_MULTIPLE' => 'Pinegrow WP Plugin PRO - Unlimited sites',
        );

        if($license['status'] === 'OK') {
            $html .= '<tr><td class="label">Status:</td><td style="color:#00a32a;font-size: 16px;"><b>Pinegrow PRO is ' . $license['sub_status'] . '</b></td></tr>';
            $html .= '<tr><td class="label">Product:</td><td>' . $pmap[$license['product']] . '</td></tr>';
            //$html .= '<tr><td class="label">Valid until:</td><td>' . date_i18n('Y-m-d', $license['valid_date']) . '</td></tr>';
        } else {
            $html .= '<tr><td colspan="2">Pinegrow PRO is not activated. You are using the Free version. <br><a href="https://pinegrow.com/wordpress#buy" target="_blank">Upgrade to PRO.</a></td></tr>';
        }

        return $html;
    }

    private function maskSerial($serial) {
        if(empty($serial)) return '';
        return substr_replace($serial, "***", -3);
    }

	public function settings_create_admin_page() {
        global $pg_license_info, $pg_plugin_public;

        $license_notice = '';

        ?>
            <style>
                .pinegrow-license {
                    display: grid;
                    grid-template-columns: 70px 1fr;
                    grid-template-rows: auto;
                    max-width: 540px;
                    background: white;
                    border-radius: 4px;
                    padding: 20px 10px;
                    border: 1px solid #c0c0c0;
                    margin-bottom: 40px;
                }
                .pinegrow-license svg {
                    width: 50px;
                    height: 50px;
                    align-self: center;
                    justify-self: center;
                    color: #0e98cc;
                }
                .pinegrow-license table {

                }
                .pinegrow-license table td {

                }
                .pinegrow-license table td.label {
                    font-weight: bold;
                }
            </style>
            <?php

        if(!empty($_POST)) {
            if(!wp_verify_nonce($_POST['_nonce'], 'pinegrow-license')) {
                $license_notice = $this->notice('The form is no longer valid. Please reload the page and repeat the operation.', 'error');
            } else {
                if ($_POST['_action'] === 'activate') {
                    $email = pg_sanitize_text_field($_POST['email']);
                    $serial = pg_sanitize_text_field($_POST['serial']);

                    if (empty($email) || empty($serial)) {
                        $license_notice = $this->notice('Please enter the email and the serial code.', 'error');
                    } else {
                        $r = $pg_license_info->activate($email, $serial);
                        if ($r === true) {
                            $license_notice = $this->notice('Successfully activated the license. Thank you for your support!', 'success');
                        } else {
                            $license_notice = $this->notice('Error activating the license: ' . $r, 'error');
                        }
                    }
                } else if ($_POST['_action'] === 'deactivate') {
                    $license = get_option('pinegrow-license');
                    $email = $license['email'];
                    $email_input = pg_sanitize_text_field($_POST['email']);
                    $email = $email_input; //allow deactivating after changing email address

                    $serial_lic = $license['serial'];

                    if (empty($email) || empty($serial_lic)) {
                        $license_notice = $this->notice('Please enter the email and the serial code.', 'error');
                    } else {
                        $r = $pg_license_info->deactivate($email, $serial_lic, empty($license['activation_id']) ? 0 : $license['activation_id']);
                        if ($r === true) {
                            $license_notice = $this->notice('Successfully deactivated the license.', 'success');
                        } else {
                            $license_notice = $this->notice('Error deactivating the license: ' . $r, 'error');
                        }
                    }
                }
            }
        }

		$this->settings_options = get_option( $this->settings_option_name );
        $license = get_option('pinegrow-license');

        if(empty($license)) {
            $license = array(
                    'email' => '',
                'serial' => '',
                'status' => 'NONE'
            );
        }

        $license_valid = $license['status'] === 'OK';
        $license_url = add_query_arg($_GET, admin_url(basename($_SERVER['SCRIPT_NAME'])));


        ?>

		<div class="wrap">
			<h2>Pinegrow settings and license</h2>
			<p>Activate and deactivate your Pro license. Select which user roles can use Pinegrow. </p>

            <h3>License</h3>
            <?php echo $license_notice; ?>

            <form method="post" action="<?php echo $license_url ?>" novalidate="novalidate" spellcheck="false">

                <div class="pinegrow-license">
                    <?php
                        echo str_replace('fill:black', 'fill:currentColor',$pg_plugin_public->pg_icon_svg);
                    ?>
                    <table>

            <?php echo $this->showLicenseDetails($license); ?>

                <tr><td colspace="2">&nbsp;</td></tr>
                <input type="hidden" name="_action" value="<?php echo ($license_valid ? 'deactivate' : 'activate'); ?>">
                <input type="hidden" name="_nonce" value="<?php echo wp_create_nonce( 'pinegrow-license' ); ?>">

                <tr>
                    <td class="label">Email</td>
                    <td><input type="text" value="<?php echo empty($email) ? $license['email'] : $email; ?>" placeholder="info@example.com" name="email" style="width:280px;" /></td>
                </tr>

                <tr>
                    <td class="label">Serial code</td>
                    <td><input type="text" value="<?php echo empty($serial) ? $this->maskSerial($license['serial']) : $serial; ?>"
                               placeholder="ABCDE" name="serial" <?php echo ($license_valid ? 'readonly="readonly"' : ''); ?> style="width:280px;"/></td>
                </tr>

                <tr>
                    <td colspan="2">
                        <button type="submit" name="submit" class="button <?php echo ($license_valid ? 'button-link-delete' : 'button-primary'); ?>" style="margin-top: 20px;">
                            <?php echo ($license_valid ? 'Deactivate license' : 'Activate license'); ?>
                        </button>
                    </td>
                </tr>
            </table></div>
        </form>

			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
					settings_fields( 'pinegrow_settings_option_group' );
					do_settings_sections( 'pinegrow-settings-admin' );
					submit_button();
				?>
			</form>


		</div>
	<?php }

	public function settings_page_init() {
		register_setting(
			'pinegrow_settings_option_group', // option_group
            $this->settings_option_name, // option_name
			array( $this, 'settings_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'pinegrow_settings_setting_section', // id
			'Settings', // title
			array( $this, 'settings_section_info' ), // callback
			'pinegrow-settings-admin' // page
		);

        add_settings_field(
            'user_roles', // id
            'User roles that can edit Pinegrow projects', // title
            array( $this, 'user_roles_callback' ), // callback
            'pinegrow-settings-admin', // page
            'pinegrow_settings_setting_section' // section
        );

        /*
		add_settings_field(
			'compatibility_mode', // id
			'Compatibility mode', // title
			array( $this, 'compatibility_mode_callback' ), // callback
			'pinegrow-settings-admin', // page
			'pinegrow_settings_setting_section' // section
		);
        */
/*
        add_settings_field(
            'disable_check', // id
            'Overwriting non-Pinegrow projects', // title
            array( $this, 'disable_check_callback' ), // callback
            'pinegrow-settings-admin', // page
            'pinegrow_settings_setting_section' // section
        );
*/

        add_settings_field(
            'ignore_disallow_file_edits', // id
            'Danger zone', // title
            array( $this, 'ignore_disallow_file_edits_callback' ), // callback
            'pinegrow-settings-admin', // page
            'pinegrow_settings_setting_section' // section
        );
	}

	public function settings_sanitize($input) {
		$sanitary_values = array();
        /*
		if ( isset( $input['compatibility_mode'] ) ) {
			$sanitary_values['compatibility_mode'] = $input['compatibility_mode'];
		}
        */

        if ( isset( $input['disable_check'] ) ) {
            $sanitary_values['disable_check'] = $input['disable_check'];
        }

        if ( isset( $input['ignore_disallow_file_edits'] ) ) {
            $sanitary_values['ignore_disallow_file_edits'] = $input['ignore_disallow_file_edits'];
        }

		if ( isset( $input['user_roles'] ) ) {
			$sanitary_values['user_roles'] = $input['user_roles'];
		}

		return $sanitary_values;
	}

	public function settings_section_info() {

	}

    public function compatibility_mode_callback() {
        $force = empty(get_option( 'permalink_structure' ));
        printf(
            '<input type="checkbox" name="'.$this->settings_option_name.'[compatibility_mode]" id="compatibility_mode" value="compatibility_mode" %s %s> <label for="compatibility_mode">Load Pinegrow in compatibility mode</label><p class="description">Load Pinegrow in compatibility mode to avoid certain page builders interfering with the editor. On some managed hosting providers this requires enabling direct PHP mode.</p>',
            ( $force || isset( $this->settings_options['compatibility_mode'] ) && $this->settings_options['compatibility_mode'] === 'compatibility_mode' ) ? 'checked' : '',
            $force ? ' disabled="disabled"' : ''
        );

        if($force) {
            echo '<p><b>NOTE: Compatibility mode is enabled by default</b> because the site is not using pretty permalinks.</p>';
        }
    }

    public function disable_check_callback() {
        printf(
            '<input type="checkbox" name="'.$this->settings_option_name.'[disable_check]" id="disable_check" value="true" %s> <label for="disable_check">Do not check if the project was exported by Pinegrow</label><p class="description" style="max-width:600px;">Turn this on if you are sure that you want to allow overwriting plugins and themes that were not exported by the Pinegrow plugin (or were exported by the beta version). Doing this is not recommended.</p>',
            ( isset( $this->settings_options['disable_check'] ) && $this->settings_options['disable_check'] === 'true' ) ? 'checked' : ''
        );
    }

    public function ignore_disallow_file_edits_callback() {
        printf(
            '<input type="checkbox" name="'.$this->settings_option_name.'[ignore_disallow_file_edits]" id="ignore_disallow_file_edits" value="true" %s> <label for="ignore_disallow_file_edits">Allow exporting projects even if <code>DISALLOW_FILE_EDIT</code> is set.<p class="description" style="max-width:600px;"><b>Checking this option is not recommended.</b> Use only if you have a very good reason for it, are fully aware of security implications and unconditionally trust all users who have access to Pinegrow. This also disables checking for fatal PHP errors after the proejct is exported.</p>',
            ( isset( $this->settings_options['ignore_disallow_file_edits'] ) && $this->settings_options['ignore_disallow_file_edits'] === 'true' ) ? 'checked' : ''
        );
    }


    public function user_roles_callback() {
        global $wp_roles;
        $roles = $wp_roles->roles;

		?>
        <p class="description" style="max-width:600px; margin-bottom:10px;"><b>IMPORTANT: Only users that you trust with full access to the site should use Pinegrow.</b><br>To learn more read our guide on <a href="https://pinegrow.com/docs/wordpress/pinegrow-wordpress-plugin/how-to-safely-use-the-plugin/" target="_blank">how to safely use the plugin</a>.</p>

        <p class="description" style="max-width:640px; margin-bottom:10px;">Select one or more user roles that can edit Pinegrow projects:</p>

        <select name="<?php echo $this->settings_option_name; ?>[user_roles][]" id="user_roles" multiple="multiple" style="height:100px;width:240px;">
            <?php
            foreach($roles as $role => $info) {
                $selected = (isset( $this->settings_options['user_roles'] ) && in_array($role, $this->settings_options['user_roles'])) ? 'selected' : '' ;
                ?>
                <option value="<?php echo $role; ?>" <?php echo $selected; ?>><?php echo $info['name']?></option>
                <?php
            }
            ?>
		</select>
        <p class="description" style="max-width:600px;margin-top:10px;">Note, the <code>administrator</code> role is always included, even if not selected here.<br>Only users with <code>install_themes</code> and <code>install_plugins</code> capabilities can export WordPress themes and plugins.</p>
        <?php
	}

}


/*
 * Retrieve this value with:
 * $settings_options = get_option( 'settings_option_name' ); // Array of All Options
 * $compatibility_mode = $settings_options['compatibility_mode']; // Loading
 * $user_roles = $settings_options['user_roles']; // User roles
 */
