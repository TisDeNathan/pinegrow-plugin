<?php

/**
 * Fired during plugin activation
 *
 * @link       https://pinegrow.com
 * @since      1.0.0
 *
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/includes
 * @author     Pinegrow <info@pinegrow.com>
 */
class Pinegrow_Plugin_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {

        self::createTables();

        update_option('pinegrow_settings_have_changed', true);

        if(PG_UPDATE_V1_CPT) {
            $options = array(
                'post_type' => 'project',
                'nopaging' => true,
                'post_status' => array('private', 'publish')
            );

            $pages = get_posts( $options );

            foreach($pages as $post) {
                wp_update_post(array(
                    'ID' => $post->ID,
                    'post_type' => 'pg_project'
                ));
            }

            $options = array(
                'post_type' => 'profile',
                'nopaging' => true,
                'post_status' => array('private', 'publish')
            );

            $pages = get_posts( $options );

            foreach($pages as $post) {
                wp_update_post(array(
                    'ID' => $post->ID,
                    'post_type' => 'pg_profile'
                ));
            }
        }
	}

	private static function createTables() {
        require_once dirname(__FILE__)."/db.php";
        Pinegrow_DB::createOrUpdate();
    }

}
