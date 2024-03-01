<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://pinegrow.com
 * @since      1.0.0
 *
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/includes
 * @author     Pinegrow <info@pinegrow.com>
 */
class Pinegrow_Plugin {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Pinegrow_Plugin_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'PINEGROW_PLUGIN_VERSION' ) ) {
			$this->version = PINEGROW_PLUGIN_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = PG_PLUGIN_FOLDER;

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Pinegrow_Plugin_Loader. Orchestrates the hooks of the plugin.
	 * - Pinegrow_Plugin_i18n. Defines internationalization functionality.
	 * - Pinegrow_Plugin_Admin. Defines all hooks for the admin area.
	 * - Pinegrow_Plugin_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-pinegrow-plugin-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-pinegrow-plugin-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-pinegrow-plugin-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-pinegrow-plugin-public.php';

		$this->loader = new Pinegrow_Plugin_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Pinegrow_Plugin_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Pinegrow_Plugin_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Pinegrow_Plugin_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

        $this->loader->add_action('admin_init', $plugin_admin, 'admin_init');

        $this->loader->add_action('admin_menu', $plugin_admin, 'admin_menu');

        $this->loader->add_action('show_admin_bar', $plugin_admin, 'show_admin_bar');


        //Register API calls
        //$this->loader->add_action( 'wp_ajax_apiSaveProject', $plugin_admin, 'apiSaveProject' );
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {
        global $pg_plugin_public;

		$plugin_public = new Pinegrow_Plugin_Public( $this->get_plugin_name(), $this->get_version() );

		$pg_plugin_public = $plugin_public;

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

        //used to disable theme loading on API calls in order to prevent broken theme obstructing the API calls
        $this->loader->add_filter('template_directory', $plugin_public, 'onTemplateDirectory', 10, 3);
        $this->loader->add_filter('stylesheet_directory', $plugin_public, 'onTemplateDirectory', 10, 3);

        $this->loader->add_action( 'wp_ajax_apiGetProjects', $plugin_public, 'apiGetProjects' );
        $this->loader->add_action( 'wp_ajax_apiGetPublicProjects', $plugin_public, 'apiGetPublicProjects' );
        $this->loader->add_action( 'wp_ajax_apiCreateProject', $plugin_public, 'apiCreateProject' );
        $this->loader->add_action( 'wp_ajax_apiSaveProject', $plugin_public, 'apiSaveProject' );
        $this->loader->add_action( 'wp_ajax_apiLoadProject', $plugin_public, 'apiLoadProject' );
        $this->loader->add_action( 'wp_ajax_apiRenameProject', $plugin_public, 'apiRenameProject' );
        $this->loader->add_action( 'wp_ajax_apiDeleteProject', $plugin_public, 'apiDeleteProject' );
        $this->loader->add_action( 'wp_ajax_apiDeleteProjects', $plugin_public, 'apiDeleteProjects' );
        $this->loader->add_action( 'wp_ajax_apiSetLessonStatus', $plugin_public, 'apiSetLessonStatus' );
        $this->loader->add_action( 'wp_ajax_apiSetLessonStatusMultiple', $plugin_public, 'apiSetLessonStatusMultiple' );
        $this->loader->add_action( 'wp_ajax_apiGetImages', $plugin_public, 'apiGetImages' );
        $this->loader->add_action( 'wp_ajax_apiUploadFile', $plugin_public, 'apiUploadFile' );
        $this->loader->add_action( 'wp_ajax_apiDeleteFile', $plugin_public, 'apiDeleteFile' );

        $this->loader->add_action( 'wp_ajax_apiDeleteProjectRevision', $plugin_public, 'apiDeleteProjectRevision' );

        $this->loader->add_action( 'wp_ajax_apiDeleteAllProjectRevisions', $plugin_public, 'apiDeleteAllProjectRevisions' );

        if(PG_FEATURES_WORDPRESS) {
            $this->loader->add_action( 'wp_ajax_apiExportProject', $plugin_public, 'apiExportProject' );
            $this->loader->add_action( 'wp_ajax_apiGetExportedProjectLog', $plugin_public, 'apiGetExportedProjectLog' );
            $this->loader->add_action( 'wp_ajax_apiGetExportLog', $plugin_public, 'apiGetExportLog' );
        }

        $this->loader->add_action( 'wp_ajax_apiSetProjectFeaturedImage', $plugin_public, 'apiSetProjectFeaturedImage' );
        $this->loader->add_action('wp_ajax_apiSaveProjectLib', $plugin_public, 'apiSaveProjectLib');
        $this->loader->add_action('wp_ajax_apiSaveRemoteImage', $plugin_public, 'apiSaveRemoteImage');
        $this->loader->add_action('wp_ajax_apiSavePineConeTasks', $plugin_public, 'apiSavePineConeTasks');

        $this->loader->add_action('wp_ajax_apiSaveLocalUserData', $plugin_public, 'apiSaveLocalUserData');

        if(PG_USE_WITHOUT_USER) {
            $this->loader->add_action('wp_ajax_nopriv_apiLoadProject', $plugin_public, 'apiLoadProject');

            $this->loader->add_action('wp_ajax_nopriv_apiGetPublicProjects', $plugin_public, 'apiGetPublicProjects');
        }

        $this->loader->add_action('wp_ajax_apiSaveUserSettings', $plugin_public, 'apiSaveUserSettings');

        $this->loader->add_action( 'init', $plugin_public, 'init' );
        $this->loader->add_filter( 'template', $plugin_public, 'onFilterTemplate' );
        $this->loader->add_filter( 'stylesheet', $plugin_public, 'onFilterTemplate' );

        if(PG_REGISTER_ACF_FIELDS) {
            $this->loader->add_action('acf/init', $plugin_public, 'onACFInit');
        }

        $this->loader->add_filter('show_admin_bar', $plugin_public, 'show_admin_bar');
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @return    Pinegrow_Plugin_Loader    Orchestrates the hooks of the plugin.
	 *@since     1.0.0
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
