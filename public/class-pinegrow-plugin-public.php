<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://pinegrow.com
 * @since      1.0.0
 *
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/public
 */



global $pgBaseUrl;
$pgBaseUrl = '';

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Pinegrow_Plugin
 * @subpackage Pinegrow_Plugin/public
 * @author     Pinegrow <info@pinegrow.com>
 */
class Pinegrow_Plugin_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	public $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	public $version;

	private $current_project;

    private $base = '';
    public $post_type = 'pg_project';
    private $global_project_slug = 'pinegrow---global---project';

    public $pg_icon_svg = '<svg width="16px" height="16px" viewBox="0 0 1227 1265" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-451.312,-394.938)">
        <g transform="matrix(35.0279,0,0,35.0279,451.315,394.938)">
            <g opacity="0.9">
                <g>
                    <path d="M32.959,23.102L30.93,25.546C30.612,25.935 29.857,26.089 29.409,25.859L23.321,22.729C23.306,22.719 23.293,22.712 23.28,22.706C23.293,22.696 23.306,22.69 23.321,22.684L28.489,19.91C29.027,19.623 30.112,19.623 30.652,19.907L31.216,20.207C31.923,20.582 32.857,21.331 33.218,21.812C33.371,22.017 33.347,22.634 32.959,23.102M24.427,33.394C24.112,33.778 23.384,33.915 22.948,33.678L22.684,33.533L21.692,32.982C21.618,32.945 21.571,32.906 21.542,32.881C21.571,32.85 21.617,32.814 21.684,32.77L28.375,28.642L24.427,33.394ZM12.687,34.387C12.018,34.387 11.014,33.913 10.584,33.394L8.759,31.195C8.643,31.049 8.592,30.895 8.62,30.756C8.646,30.617 8.751,30.492 8.915,30.407L10.129,29.754C10.393,29.615 10.776,29.531 11.187,29.531C11.601,29.531 12.009,29.621 12.275,29.767L20.663,34.387L12.687,34.387ZM3.784,25.19L9.314,28.158C9.342,28.174 9.365,28.187 9.384,28.197C9.365,28.21 9.342,28.224 9.314,28.236L8.102,28.887C7.953,28.965 7.771,29.008 7.573,29.008C7.194,29.008 6.813,28.848 6.604,28.597L3.784,25.19ZM2.017,21.516L5.668,16.648C5.959,16.258 6.663,16.093 7.099,16.321L10.146,17.888C10.164,17.897 10.179,17.904 10.191,17.912C10.179,17.921 10.164,17.931 10.146,17.937L3.127,21.723C2.722,21.941 2.209,22.08 1.816,22.08C1.785,22.08 1.76,22.08 1.734,22.075C1.765,21.946 1.845,21.743 2.017,21.516M7.691,13.947L10.479,10.234C10.674,9.976 11.037,9.808 11.406,9.808C11.583,9.808 11.751,9.845 11.891,9.92L14.404,11.259L14.405,11.259L18.445,13.41C18.45,13.41 18.453,13.413 18.457,13.416C18.479,13.425 18.498,13.44 18.512,13.449C18.496,13.459 18.475,13.473 18.451,13.484L13.126,16.338C12.85,16.483 12.432,16.571 12.006,16.571C11.589,16.571 11.2,16.493 10.934,16.358L7.887,14.788C7.716,14.703 7.604,14.57 7.568,14.418C7.534,14.267 7.578,14.102 7.691,13.947M12.525,7.576C14.402,5.205 16.721,2.498 17.557,1.811C18.061,2.166 19.133,3.261 20.053,4.384C20.172,4.528 20.221,4.684 20.191,4.825C20.165,4.964 20.058,5.084 19.896,5.176L14.016,8.301C13.483,8.459 12.777,8.442 12.465,8.278C12.394,8.238 12.356,8.191 12.341,8.116C12.315,8.001 12.352,7.796 12.525,7.576M24.112,9.676C24.228,9.831 24.272,10.002 24.238,10.158C24.203,10.318 24.092,10.454 23.921,10.547L21.421,11.886C20.886,12.176 19.803,12.176 19.263,11.892L19.261,11.889L15.212,9.735C15.188,9.725 15.167,9.713 15.148,9.7C15.167,9.69 15.19,9.676 15.212,9.663L20.71,6.701C21.135,6.471 21.824,6.626 22.114,7.012L24.112,9.676ZM30.105,17.663L28.492,16.803C28.487,16.803 28.487,16.803 28.486,16.799L22.241,13.478C22.24,13.476 22.237,13.476 22.232,13.476C22.21,13.462 22.19,13.453 22.175,13.44C22.19,13.43 22.212,13.416 22.237,13.403L24.734,12.063C25.16,11.837 25.851,11.992 26.141,12.373L30.105,17.663ZM21.388,21.4C20.975,21.4 20.585,21.322 20.318,21.182L13.939,17.902C13.924,17.894 13.91,17.888 13.896,17.878C13.91,17.874 13.924,17.864 13.939,17.855L19.263,15.002C19.801,14.716 20.885,14.712 21.426,14.996L21.43,14.996L27.69,18.331C27.71,18.337 27.724,18.346 27.74,18.356C27.72,18.369 27.698,18.38 27.676,18.393L22.507,21.165C22.232,21.312 21.813,21.4 21.388,21.4M27.653,26.891C27.703,26.921 27.746,26.947 27.775,26.968C27.747,26.993 27.71,27.024 27.657,27.056L20.781,31.304C20.283,31.613 19.246,31.637 18.732,31.352L13.105,28.256C13.073,28.239 13.045,28.224 13.024,28.207C13.047,28.193 13.073,28.178 13.105,28.158L20.344,24.279C20.885,23.989 21.988,23.982 22.533,24.26L24.795,25.423L27.653,26.891ZM3.938,23.315C3.914,23.307 3.889,23.293 3.872,23.28C3.893,23.267 3.916,23.253 3.942,23.237L10.963,19.455C11.501,19.164 12.607,19.154 13.149,19.435L19.529,22.716C19.545,22.722 19.558,22.729 19.572,22.739C19.558,22.742 19.545,22.751 19.529,22.762L12.293,26.64C11.753,26.932 10.668,26.932 10.129,26.64L3.938,23.315ZM34.597,20.777C34.306,20.391 33.81,19.929 33.271,19.508C33.271,19.013 32.938,18.568 32.791,18.369L27.518,11.341C27.135,10.834 26.574,10.477 25.942,10.323C26.014,9.739 25.86,9.136 25.49,8.641L23.49,5.976C23.105,5.46 22.537,5.105 21.897,4.949C21.952,4.37 21.782,3.776 21.383,3.291C18.684,-0 17.796,-0 17.507,-0C17.091,-0 16.321,-0 11.175,6.507C10.775,7.015 10.591,7.616 10.631,8.189C10.019,8.354 9.474,8.703 9.1,9.202L6.315,12.914C5.945,13.41 5.794,14.006 5.864,14.587C5.231,14.748 4.672,15.104 4.289,15.616L0.638,20.483C0.118,21.176 -0.099,21.945 0.042,22.584C0.074,22.727 0.127,22.854 0.19,22.973C0.156,23.501 0.542,23.977 0.728,24.2L5.279,29.694C5.683,30.179 6.265,30.518 6.909,30.66C6.864,31.234 7.04,31.817 7.437,32.293L9.26,34.493C10.022,35.414 11.495,36.105 12.687,36.105L22.322,36.105C23.206,36.105 23.614,35.811 23.802,35.489C24.57,35.41 25.282,35.06 25.754,34.497L30.115,29.242C30.441,28.849 30.93,28.154 30.998,27.495C31.49,27.319 31.936,27.036 32.258,26.647L34.282,24.2C35.132,23.177 35.268,21.674 34.597,20.777" style="fill:black;fill-rule:nonzero;"/>
                </g>
            </g>
        </g>
    </g>
</svg>';

    public $thumb_secret = PG_THUMB_SECRET;

    public $public_site_url = PG_PUBLIC_SITE_URL;
    public $public_site_host;
    public $editor_site_host;

    public $manage_users = null;

    private $revisions_deleted = false;
    private $user_roles = array('administrator');
    private $current_user_can_use = null;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {
        global $pgBaseUrl;

		$this->plugin_name = $plugin_name;
		$this->version = $version;

        $this->in_dev = true;

		$test_production = false;

		if(isset($_SERVER['SERVER_NAME']) && ($_SERVER['SERVER_NAME'] === PG_LOCAL_HOST || $_SERVER['SERVER_NAME'] === 'pinegrow-docs-test.local') && !$test_production) {
            $this->base = dirname(plugin_dir_url(__FILE__)) . PG_DEV_CODE_FOLDER;
            //$this->base = dirname(plugin_dir_url(__FILE__)) . '/pinegrow/';
        } else {
            $this->base = dirname(plugin_dir_url(__FILE__)) . '/pinegrow/';
            $this->public_site_url = PG_PUBLIC_SITE_URL;
            $this->in_dev = false;
        }
        $pgBaseUrl = $this->base;

        $this->public_site_host = wp_parse_url( $this->public_site_url )['host'];
        $this->editor_site_host = wp_parse_url( PG_EDITOR_SITE_URL )['host'];

        $settings_options = get_option( 'pinegrow_settings' );

        if(!empty($settings_options['user_roles'])) {
            $this->user_roles = array_merge($settings_options['user_roles'], $this->user_roles);
        }
    }

    public function canUserUsePinegrow($user = null) {
        if($this->current_user_can_use === null) {
            $this->current_user_can_use = false;
            $user = $user ?: $this->getCurrentUser(false, true);
            if (!empty($user)) {
                foreach ($this->user_roles as $role) {
                    if (in_array($role, $user->roles)) {
                        $this->current_user_can_use = true;
                        break;
                    }
                }
            }
        }
        return $this->current_user_can_use;
    }

    public function canUserAdminPinegrow() {
        if(current_user_can( 'manage_options')) return true;
        return false;
    }

	public function init() {

        register_taxonomy( 'pinegrow_flags', array( $this->post_type), array(
            'labels'                     => array(
                'name'                       => _x( 'Pinegrow flags', 'Taxonomy General Name', 'pinegrow' ),
                'singular_name'              => _x( 'Pinegrow flag', 'Taxonomy Singular Name', 'pinegrow' ),
            ),
            'hierarchical'               => false,
            'public'                     => false,
            'show_ui'                    => false,
            'show_admin_column'          => false,
            'show_in_nav_menus'          => false,
            'show_tagcloud'              => false,
            'rewrite'                    => false,
            'show_in_rest'               => false,
        ) );


        //CPT Project
        $labels = array(
            'name'                  => 'Pinegrow Projects',
            'singular_name'         => 'Pinegrow Project',
            'menu_name'             => 'Pinegrow',
            'name_admin_bar'        => 'Pinegrow Project',
            'all_items'             => 'All Projects'
        );
        $rewrite = array(
            'slug'                  => 'pg_users',
            'with_front'            => true,
            'pages'                 => false,
            'feeds'                 => false,
        );
        $args = array(
            'label'                 => 'Pinegrow Project',
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes', 'excerpt','author', 'revisions' ),
            'taxonomies'            => PG_PROJECT_TAGS ? array( 'pinegrow_flags','category', 'post_tag' ) : array('pinegrow_flags'),
            'hierarchical'          => true,
            'public'                => false,
            'show_ui'               => true,
            'show_in_menu'          => PG_USER_MANAGEMENT,
            //'menu_icon'             => 'data:image/svg+xml;base64,' . base64_encode($pg_icon_svg),
            'menu_position'         => 25,
            'show_in_admin_bar'     => false,
            'show_in_nav_menus'     => false,
            'can_export'            => false,
            'has_archive'           => false,
            'exclude_from_search'   => true,
            'publicly_queryable'    => PG_USER_MANAGEMENT,
            'rewrite'               => $rewrite,
            'capability_type'       => 'page',
            'capabilities' => array(
                'create_posts' => 'do_not_allow'
            )
        );

        if(PG_USER_MANAGEMENT) {
            unset($args['capabilities']);
        }
        register_post_type( $this->post_type, $args );


        add_filter( 'page_row_actions', function($actions, $post) {
            if($post->post_type === $this->post_type) {
                if( current_user_can( 'install_themes' ) ) {
                    $actions['pinegrow-edit'] = sprintf( '<a href="%1$s">%2$s</a>',
                        esc_url( $this->getEditUrl($post, get_user_by('ID', $post->post_author) ) ),
                        'Edit in Pinegrow'
                    );
                }
            }
            return $actions;
        }, 10, 2 );

        /* Handle project revisions */
        if(defined('PG_SET_MAX_REVISIONS')) {
            add_filter('wp_revisions_to_keep', function ($num, $post) {
                return PG_SET_MAX_REVISIONS;
            }, 10, 2);
        }

        //force revisions on every pg_project update
        add_filter( 'wp_save_post_revision_post_has_changed', function($post_has_changed, $last_revision, $post ) {
            if($post->post_type === $this->post_type) {
                return true;
            }
            return $post_has_changed;
        }, 10, 3);

        add_action( '_wp_put_post_revision', function($revision_id) {
            $post = get_post($revision_id);
            if($post) {
                $main_post = get_post($post->post_parent);
                if($main_post && $main_post->post_type === $this->post_type) {
                    //this is the project we updated
                    global $pg_project_post_revision;
                    $pg_project_post_revision = $revision_id;
                }
            }
        } );

        add_action( 'wp_restore_post_revision', function($post_id, $revision_id) {
            $post = get_post($post_id);
            if($post && $post->post_type === $this->post_type) {
                //project was restored
                //we need to process data files
                $this->restoreDataFiles($post, $revision_id);
            }
        }, 10, 2);

        add_action( 'wp_delete_post_revision', function($revision_id, $revision_post) {
            $post = get_post($revision_post->post_parent);
            if($post && $post->post_type === $this->post_type) {
                //project revision was deleted
                //we need to process data files
                $this->deleteDataFilesForProjectRevision($post, $revision_id);
            }
        }, 10, 2);

        add_rewrite_rule('^@([^/]+)[/]?$', 'index.php?pgprofile=$matches[1]', 'top');

        //@user/project/
        add_rewrite_rule('^@([^/]+/[^/]+)[/]?$', 'index.php?pgloadcss=$matches[1]/index.html', 'top');
        //@user/project/file
        add_rewrite_rule('^@(.+\.(html|css|js|json|svg))[/]?$', 'index.php?pgloadcss=$matches[1]', 'top');


        if(PG_NICE_URLS) {
            add_rewrite_rule('^' . preg_quote(PG_EDIT_SLUG) . '[/]?(.*)$', 'index.php?pgeditproject=$matches[1]', 'top');
        }


        add_filter( 'query_vars', function( $query_vars ) {
            $query_vars[] = 'pgloadcss';
            $query_vars[] = 'pgeditproject';
            if(PG_USER_PROFILES) {
                $query_vars[] = 'pgprofile';
                $query_vars[] = 'pglogindone';
            }
            return $query_vars;
        } );

        add_filter( 'template_include', function( $template ) {
            global $post;

            $file_url = get_query_var('pgloadcss', false);
            if ($file_url !== false) {
                $data = $this->getProjectUserAndFileForDataUrl($file_url);

                if (empty($data)) {
                    status_header(404);
                    die();
                }
                //$data['set_base'] = '/@'.$file_url;
                if(!empty($_GET['mode'])) {
                    $data['mode'] = $_GET['mode'];
                }
                $this->outputDataFile($data);
            }

            if(PG_NICE_URLS) {
                if (get_query_var('pgeditproject', false) !== false) {
                    //return get_template_directory() . '/edit.php';
                    return plugin_dir_path(__DIR__) . 'pgedit.php';
                }
            }

            if(PG_CUSTOMIZE_WP) {
                if (!empty($post)) {
                    $file_url = pinegrow_get_field('pg_file_url', $post->ID);
                    if ($file_url) {
                        $data = $this->getProjectUserAndFileForDataUrl($file_url);
                        if (!empty($data)) {
                            $data['mode'] = 'normal';
                            $data['set_base'] = '/'.$file_url;
                            $data['mapped_to_post'] = $post;
                            $this->outputDataFile($data);
                        }
                    }
                }
            }

            return $template;
        }, 1000 );

        add_filter( 'post_type_link', function( $post_link, $post, $leavename, $sample  ){
            if($post->post_type === $this->post_type) {
                $authordata = get_userdata( $post->post_author );
                $author     = $authordata->user_login;
                $project_id = $this->getProjectIdFromSlug($post->post_name, $authordata);
                $url = home_url( "@{$author}/{$project_id}/" );
                $url = str_replace(PG_EDITOR_SITE_URL, PG_PUBLIC_SITE_URL, $url);
                return $url;
                //return home_url( "@{$author}/{$post->post_name}/index.html" );
            } else if(PG_USER_PROFILES && $post->post_type === 'pg_profile') {
                //to keep things simple we host all profiles and sites on public
                if(false && $this->isPrivilegedProfile($post)) {
                    return PG_EDITOR_SITE_URL . "/@{$post->post_name}/";
                    //return home_url("@{$post->post_name}/");
                } else {
                    return PG_PUBLIC_SITE_URL . "/@{$post->post_name}/";
                }
            }
            return $post_link;
        }, 10, 4 );


        add_filter( 'redirect_canonical', function( $redirect_url, $requested_url ){
            if (preg_match("/\.(html|css|js|json|svg)($|\?)/i", $requested_url)) {
                return false;
            }

            return $redirect_url;
        }, 10, 2 );

        add_action( 'deleted_post', function($postid, $post) {
            if($post->post_type === $this->post_type) {
                $user = $this->getCurrentUser(false);
                if($user) {
                    $this->deleteDataFilesForProject($user, $post);
                }
                $attachments = get_attached_media( '', $postid );
                foreach ($attachments as $attachment) {
                    wp_delete_attachment( $attachment->ID, 'true' );
                }
            }
        }, 10, 2);

        /*
         * Remove font uploads for now
        add_filter('upload_mimes', function($types, $user) {
            if(current_user_can('install_themes')) {
                foreach($this->font_types as $ext => $mime) {
                    if(!isset($types[$ext])) {
                        $types[$ext] = $mime;
                    }
                }
            }
            return $types;
        }, 10, 2);

        add_filter('wp_check_filetype_and_ext', function($data, $file, $filename, $mimes, $real_mime) {
            if(current_user_can('install_themes')) {
                if($real_mime === 'font/sfnt') {
                    $wp_filetype = wp_check_filetype( $filename, $mimes );
                    $ext         = $wp_filetype['ext'];
                    $type        = $wp_filetype['type'];

                    //ttf files are sometimes misdiagnosed
                    $data['proper_filename'] = $filename;
                    $data['ext'] = $ext;
                    $data['type'] = $type;
                }
            }
            return $data;
        }, 10, 5);
        */

        add_action( 'admin_bar_menu', function($wp_admin_bar) {
            if($this->canUserUsePinegrow()) {
                $in_staging = isset($_COOKIE['pinegrow_staging']);
                $args = array(
                    'id' => 'pinegrow-editor',
                    'title' => '<span class="ab-icon" style="opacity:0.8;top:0px;color:rgba(240,246,252,.9);height: 100%;box-sizing: border-box;display: inline-flex;width: 16px;">'.str_replace('fill:black;','fill:currentColor;',$this->pg_icon_svg).'</span><span class="ab-label">'.($in_staging ? 'Staging' : 'Production').'</span>',
                    'href' => '#',
                    'meta' => array(
                        'target' => '_blank',
                        'class' => 'pg-admin-bar-menu' . ($in_staging ? ' pg-staging-mode' : ''),
                        'title' => 'You are viewing Pinegrow projects in the '.($in_staging ? 'staging' : 'production').' mode.',
                        'onclick' => 'return false;'
                    )
                );
                $wp_admin_bar->add_node($args);

                $args = array(
                    'parent' => 'pinegrow-editor',
                    'id' => 'pinegrow-editor-staging',
                    'title' => '<span class="ab-icon" style="opacity:0.8;top:-1px;"></span><span class="ab-label">Staging</span>',
                    'href' => '#',
                    'meta' => array(
                        'target' => '_blank',
                        'class' => 'pg-open-pinegrow',
                        'title' => 'View Pinegrow projects in the staging mode.',
                        'onclick' => 'pinegrowSetStagingMode(true);return false;'
                    )
                );
                $wp_admin_bar->add_node($args);

                $args = array(
                    'parent' => 'pinegrow-editor',
                    'id' => 'pinegrow-editor-production',
                    'title' => '<span class="ab-icon" style="opacity:0.8;top:-1px;"></span><span class="ab-label">Production</span>',
                    'href' => '#',
                    'meta' => array(
                        'target' => '_blank',
                        'class' => 'pg-open-pinegrow',
                        'title' => 'View Pinegrow projects in the production mode.',
                        'onclick' => 'pinegrowSetStagingMode(false);return false;'
                    )
                );

                $wp_admin_bar->add_node($args);

                $args = array(
                    'parent' => 'pinegrow-editor',
                    'id' => 'pinegrow-editor-open',
                    'title' => '<span class="ab-icon" style="opacity:0.8;top:-1px;"></span><span class="ab-label">Dashboard</span>',
                    'href' => '/wp-admin/admin.php?page=pinegrow-projects',
                    'meta' => array(
                        'class' => 'pg-open-pinegrow',
                        'title' => 'Open Pinegrow dashboard.',
                    )
                );

                $wp_admin_bar->add_node($args);
            }
        }, 999);

        add_filter( 'appsero_is_local', function($is_local) {
            return false;
            return $this->in_dev;
        });
    }

    public function show_admin_bar($show) {
        if ( isset($_COOKIE['pinegrow-no-admin-bar'])) {
            return false;
        }
        return $show;
    }

    public function onFilterTemplate($template) {
        if(isset($_COOKIE['pinegrow_staging'])) {
            if(substr( $template, -8 ) === '-staging') {
                //already staging
            } else {
                $theme_root = get_theme_root();
                if(is_dir($theme_root.'/'.$template.'-staging')) {
                    return $template.'-staging';
                }
            }
        }
        return $template;
    }

    public function enqueue_styles($hook) {
        if(is_user_logged_in() && current_user_can('install_themes')) {
            wp_enqueue_style($this->plugin_name.'-staging-css', plugin_dir_url(dirname(__FILE__)) . 'admin/css/staging.css', array(), $this->version);
        }
    }

    public function enqueue_scripts($hook) {
        if(is_user_logged_in() && current_user_can('install_themes')) {
            wp_enqueue_script($this->plugin_name.'-staging-js', plugin_dir_url(dirname(__FILE__)) . 'admin/js/staging.js', array(), $this->version, false);
        }
    }

    public function setCurrentProject($p) {
	    $this->current_project = $p;
    }

    public function getCurrentProject() {
	    return $this->current_project;
    }

    public function outputDataFile($data) {
       require_once dirname(__FILE__)."/class-page-output.php";
       $po = new Pinegrow_Page_Output();
       $po->outputDataFile($data);
    }


	public function get_editor_styles() {

        //if(!is_front_page()) return;
        //if(basename($template) !== 'edit.php') return;

        $styles = array(
            "lib/jqueryui/css/ui-lightness/jquery-ui-1.10.3.custom.min.css",
            "bootstrap/less/bootstrap.css",
            "lib/spectrum-pg-version/spectrum.css",
            "lib/crsa/crsa.browser.css",
            "lib/grapick/grapick.min.css",
            "lib/GoldenLayout/css/goldenlayout-base.css",
            "lib/GoldenLayout/css/goldenlayout-dark-theme.css",
            'pg-new-icons/style.css',
            "lib/ui.anglepicker/ui.anglepicker.css",
            "lib/cubicBezierEditor/cubicBezierEditor.css",
           // "lib/crsa/edit.theme.gray.css",

        );

        if(PG_FEATURES_EDITOR === 'codemirror') {

            $styles[] = "lib/codemirror/lib/codemirror.css";
            $styles[] = "lib/codemirror/addon/fold/foldgutter.css";
            $styles[] = "lib/codemirror/addon/hint/show-hint.css";
            $styles[] = "lib/codemirror/theme/ambiance.css";
            $styles[] = "lib/codemirror/theme/blackboard.css";
            $styles[] = "lib/codemirror/theme/eclipse.css";
            $styles[] = "lib/codemirror/theme/elegant.css";
            $styles[] = "lib/codemirror/theme/mbo.css";
            $styles[] = "lib/codemirror/theme/midnight.css";
            $styles[] = "lib/codemirror/theme/monokai.css";
            $styles[] = "lib/codemirror/theme/neat.css";
            $styles[] = "lib/codemirror/addon/dialog/dialog.css";
            $styles[] = "lib/codemirror/addon/lint/lint.css";
        } else {
            $styles[] = "lib/monaco/monaco.css";

        }

        $styles = apply_filters('pinegrow_editor_styles', $styles);

        $html = '';

        foreach($styles as $url) {
            if(strpos($url, 'http') !== 0) {
                $url = $this->base . $url;
            }
            $html .= "<link rel='stylesheet' href='{$url}?version={$this->version}' />\n";
        }

        return $html;
	}

    private function getLoginRedirectUrl()
    {
        return PG_USER_PROFILES ? get_site_url(null, PG_LOGIN_DONE_URL) : get_admin_url(null, PG_LOGIN_DONE_URL);
    }

	public function get_editor_scripts() {
        //if(!is_front_page()) return;
        //if(basename($template) !== 'pgedit.php') return;

        $scripts = array(
            "lib/crsa/tools/pg.translator.js",
            "frameworks/pgtutorial/translations.online.js",
            "lib/mediumeditor-pg/js/medium-editor-mt.js",
            "lib/mediumeditor-pg/phrase.js",
            "lib/jqueryui/js/jquery-ui-1.10.3.custom-pg.js",
            "lib/fastdom/fastdom.js",
            "bootstrap/js/bootstrap.min.js",
            "lib/ui.anglepicker/ui.anglepicker.js",
            "lib/autoComplete/autocomplete.js",
            "lib/simple-auto-complete/simple.autocomplete.js",
            "lib/crsa/crsa.js",
            "lib/GoldenLayout/js/goldenlayout.js",
            "lib/cubicBezierEditor/cubicBezierEditor.js",
            "lib/specificity/specificity.js",
            "lib/chroma/chroma.js",
            "node_scripts/index.js",
            "node_scripts/postcss/index.js",
            "lib/crsa/css.helpers.js",
            "lib/crsa/crsa.select.js",
            "lib/crsa/crsa.undo.js",
            "lib/crsa/crsa.selectbox.js",
            "lib/crsa/pg.insert.borders.js",
            "lib/crsa/pgeditor/pg.stylesheet.formatting.js",
            "lib/crsa/pgeditor/pg.css.rule.controls.js",
            "lib/crsa/pgeditor/pg.stylesheet.helpers.js",
            "lib/crsa/pgeditor/pg.style.pane.helpers.js",
            "lib/crsa/pgeditor/pg.spectrum.helper.js",
            "lib/crsa/pgeditor/pg.fast.editor.js",
            "lib/crsa/pgeditor/pg.all.stylesheets.js",
            "lib/crsa/pgeditor/pg.style.pane.js",
            "lib/crsa/pgeditor/pg.stylesheet.js",
            "lib/crsa/pgeditor/pg.css.stylesheet.js",
            //"lib/crsa/pgeditor/pg.compilable.stylesheet.js",
            //"lib/crsa/pgeditor/pg.scss.stylesheet.js",
            //"lib/crsa/pgeditor/pg.less.stylesheet.js",
            "lib/crsa/pgeditor/pg.active.rules.js",
            //"lib/crsa/pgeditor/pg.stylesheet.vars.js",
            "lib/crsa/pgeditor/pg.panel.input.control.js",
            "lib/crsa/pgeditor/pg.css.editor.js",
            "lib/crsa/pgeditor/pg.css.active.rules.editor.old.js",
            "lib/crsa/pgeditor/views/pg.stylesheets.view.js",
            //"lib/crsa/pgeditor/views/pg.stylesheet.vars.view.js",
            //"lib/crsa/pgeditor/views/pg.vars.view.js",
            "lib/crsa/pgeditor/views/pg.css.rules.view.js",
            "lib/crsa/pgeditor/views/pg.css.gui.view.js",
            "lib/crsa/pgeditor/views/pg.css.active.rules.view.js",
            "lib/crsa/pgeditor/views/pg.css.active.rules.combined.view.js",
            "lib/crsa/pgeditor/views/pg.media.query.helper.view.js",
            "lib/crsa/pgeditor/pg.stylesheets.manager.js",
            //"lib/crsa/pgeditor/pg.smart.stylesheet.js",
            "lib/crsa/crsa.class.manager.js",
            "lib/crsa/crsa.page.styles.js",
            "lib/crsa/crsa.css.js",
            "lib/crsa/crsa.pages.js",
            "lib/crsa/crsa.storage.js",
            "lib/crsa/crsa.store.js",
            "lib/crsa/tools/pg.project.js",
            //"lib/crsa/tools/pg.project.db.js",
            //"lib/crsa/views/pg.project.db.view.js",
            "lib/crsa/crsa.project.js",
            "lib/crsa/pg.ui.js",
            "lib/crsa/tools/pg.combined.panel.js",
            "lib/crsa/tools/pg.filewriter.js",
            "lib/crsa/tools/pg.panel.js",
            "lib/spectrum-pg-version/spectrum.js",
            "lib/crsa/pinegrow.js",
            "lib/crsa/pg-parser.js",
            "lib/crsa/pg-query.js",
            "lib/crsa/crsa.edit.js",
            "lib/crsa/plugins/pg.inline.editor.js",
            "lib/crsa/plugins/pg.asset.manager.js",
            "lib/crsa/plugins/project-items.js",
            //"lib/crsa/plugins/code-validator.js",
            //"lib/crsa/plugins/pg.php.js",
            //"lib/crsa/plugins/pg.components/resource-editor.js",
            "lib/crsa/plugins/pg.insight.js",
            "lib/crsa/plugins/pg.power-bar.js",
            "lib/crsa/views/pg.smart.input.js",
            "lib/crsa/tools/pg.api.js",
            "lib/crsa/tools/pg.css.api.js",
            "lib/crsa/views/pg.status.bar.js",
            "lib/crsa/views/pg.attributes-editor.js",
            "lib/crsa/views/pg.element.code.js",
            "lib/crsa/views/pg.css.rule.code.js",
            "lib/crsa/pgeditor/views/pg.css.selector.maker.js",
            "lib/crsa/views/pg.page.code.js",
            "lib/crsa/plugins/pg.selected.elements.js",
            "lib/crsa/views/pg.page.view.js",
            "lib/crsa/views/pg.tree.grid.js",
            "lib/crsa/views/pg.tree.js",
            "lib/crsa/views/pg.css.tree.js",
            "lib/crsa/views/pg.lib.view.js",
            "lib/crsa/views/pg.undo.view.js",
            "lib/crsa/views/pg.assign.class.js",
            "lib/crsa/views/pg.actions.js",
            "lib/crsa/pg.page-view-player.js",
            "lib/crsa/tools/pg.sections.js",
            "lib/crsa/tools/pg.show.properties.js",
            "lib/crsa/tools/pg.outline.helper.js",
            "lib/crsa/views/pg.online.start.screen.js",
            "lib/crsa/views/pg.info.panel.js",
            "lib/crsa/tools/pg.chrome.dev.tools.js",
            "lib/crsa/tools/pg.dialog.js",
            "lib/crsa/tools/pg.thumbnails.js",
            "lib/grapick/grapick-pg.min.js",
            "lib/crsa/plugins/pg.css.grid.js",
            "lib/crsa/plugins/pg.responsive-images.js",
            "lib/crsa/tools/pg.dialog.js",
            "lib/crsa/tools/pg.react.js",
            //"lib/crsa/tools/pg.project.db.js",
            //"lib/crsa/plugins/pg.class.styles.js",
            "frameworks/cssrules.js",
            "lib/crsa/views/pg.control.margin.padding.js",
            "lib/crsa/tools/pg.unsplash.js",
            "lib/crsa/tools/pg.gradients.lib.js",
            "lib/crsa/views/pg.class.tree.js",
            "frameworks/html/html.js",
            "frameworks/pg.animations/resources/pgia/lib/pgia.js",
            "frameworks/pgtutorial/pg.tutorials.manager.js",
            "frameworks/pgtutorial/pg.tutorial.js",
            "frameworks/pgtutorial/pg.video.player.js",
            "frameworks/pgtutorial/start.projects.js",
            "frameworks/pgtutorial/pg.wp.subtitles.js",
            "lib/crsa/tools/pg.svg.icons.js",
            "lib/crsa/plugins/pg.simple.pug.js",
            "lib/jszip/jszip.js",
        );

        if(strpos(PG_INCLUDE_TUTORIALS, 'ai') !== false) {
            //$scripts[] = "frameworks/pgtutorial/tutorials/pine.cone/tutorial.pine.cone.js";
        }

        if(strpos(PG_INCLUDE_TUTORIALS, 'whatsnew') !== false) {
            $scripts[] = "frameworks/pgtutorial/tutorials/whatsnew/whats.new.pg.7.7.js";
            $scripts[] = "frameworks/pgtutorial/tutorials/whatsnew/whats.new.pg.7.6.js";
            $scripts[] = "frameworks/pgtutorial/tutorials/whatsnew/whats.new.pg.7.5.js";
        }

        if(strpos(PG_INCLUDE_TUTORIALS, 'wp') !== false) {
            $scripts[] = "frameworks/pgtutorial/tutorials/first_block/tutorial.first-block.js";
        }

        if(PG_LOAD_LOCAL_PINECONE) {
            $scripts[] = "lib/crsa/plugins/pine.cone/pg.pine.cone.js";
            $scripts[] = "lib/crsa/plugins/pine.cone/pine.cone.learn.js";
            $scripts[] = "lib/crsa/plugins/pine.cone/pg.pine.cone.lib.js";
            $scripts[] = "lib/crsa/plugins/pine.cone/pine.cone.commands.js";
            $scripts[] = "lib/crsa/plugins/pine.cone/pg.generate.image.js";
            $scripts[] = "lib/crsa/plugins/pine.cone/presets.js";
        } else {
            $scripts[] = "https://pinegrow.com/pine.cone.2/pine.cone.combined.min.js";
        }

        if(PG_FEATURES_INFO_EDITOR) {
            $scripts[] = "frameworks/pg.info.editor/pg.info.editor.js";
        }

        if(PG_FEATURES_ONLINE) {
            $scripts[] = "frameworks/pgtutorial/pg.online.js";
        }

        if(PG_FEATURES_EDITOR === 'codemirror') {

            $scripts[] = "lib/codemirror_pg/lib/codemirror.js";
            $scripts[] = "lib/codemirror/addon/fold/foldcode.js";
            $scripts[] = "lib/codemirror/addon/fold/foldgutter.js";
            $scripts[] = "lib/codemirror/addon/fold/brace-fold.js";
            $scripts[] = "lib/codemirror/addon/fold/xml-fold.js";
            $scripts[] = "lib/codemirror/addon/fold/markdown-fold.js";
            $scripts[] = "lib/codemirror/addon/fold/comment-fold.js";
            $scripts[] = "lib/codemirror/mode/xml/xml.js";
            $scripts[] = "lib/codemirror/mode/javascript/javascript.js";
            $scripts[] = "lib/codemirror/mode/css/css.js";
            $scripts[] = "lib/codemirror/mode/htmlmixed/htmlmixed.js";
            $scripts[] = "lib/codemirror/mode/clike/clike.js";
            $scripts[] = "lib/codemirror/mode/pug/pug.js";
            $scripts[] = "lib/crsa/pgphp/php.js";
            $scripts[] = "lib/codemirror/addon/search/match-highlighter.js";
            $scripts[] = "lib/codemirror_pg/addon/search/search.js";
            $scripts[] = "lib/codemirror/addon/search/searchcursor.js";
            $scripts[] = "lib/codemirror/addon/dialog/dialog.js";
            $scripts[] = "lib/codemirror_pg/addon/lint/lint.js";
            $scripts[] = "lib/htmlhint-pg/htmlhint.js";
            $scripts[] = "lib/codemirror/addon/lint/html-lint.js";

        } else {

            $scripts[] = "lib/monaco/mods/intellisense/pg.monaco.intellisense.js";
            $scripts[] = "lib/monaco/dist/pg.monaco.js";
            $scripts[] = "lib/monaco/pg.monaco.editor.js";
            $scripts[] = "lib/monaco/mods/themes/clouds.js";
            $scripts[] = "lib/monaco/mods/themes/cobalt.js";
            $scripts[] = "lib/monaco/mods/themes/dark.js";
            $scripts[] = "lib/monaco/mods/themes/light.js";
            $scripts[] = "lib/monaco/mods/themes/monokai.js";
            $scripts[] = "lib/monaco/mods/themes/nightOwl.js";
            $scripts[] = "lib/monaco/mods/themes/tomorrow.js";
        }

        if(PG_FEATURES_FRAMEWORKS) {
            $scripts[] = "frameworks/helpers/frameworks.helpers.js";
            $scripts[] = "frameworks/helpers/frameworks.points.js";
            $scripts[] = "lib/crsa/plugins/pg.plugin.builder.js";
        }

        if(PG_FEATURES_DESIGN) {
            $scripts[] = "frameworks/pg.dm/pg.dm.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.props.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.properties.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.design.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.fonts.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.engines.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.core.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.design.skills.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.core.skills.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.style.list.js";
            $scripts[] = "frameworks/pg.dm/pg.dm.lib.components.js";
            $scripts[] = "frameworks/pg.dm/vibrant.min.js";
            $scripts[] = "frameworks/pg.dm/image.colors.js";
            $scripts[] = "lib/crsa/tools/pg.floating.tools.js";
            $scripts[] = "lib/crsa/tools/pg.window.menu.js";
            $scripts[] = "frameworks/html/html.design.js";
        }

        if(PG_FEATURES_TW) {

            $scripts[] = "lib/crsa/plugins/pg.class.styles.js";
            $scripts[] = "frameworks/tailwindcss.helpers/tailwindcss.helpers.js";
            $scripts[] = "frameworks/tailwindcss.helpers/tailwindcss.points.js";

            if(PG_FEATURES_DESIGN) {
                $scripts[] = "frameworks/tailwindcss/tailwind.design.js";
            }
            $scripts[] = "frameworks/tailwindcss/tailwindcss.js";

            //$scripts[] = "https://pgtwlib:8890/library/plugin/pg.tw.blocks.js";

            $scripts[] = "https://library.pinegrow.com/bootstrap5/library/plugin/pg.bs5.lib.js";
            $scripts[] = "https://library.pinegrow.com/tailwind/library/plugin/pg.tw.blocks.js";
            $scripts[] = "https://library.pinegrow.com/svg/pg.svg.library.js";

            $scripts[] = "lib/crsa/sass.dart.js";

            $scripts[] = "lib/crsa/pgeditor/pg.compilable.stylesheet.js";
            $scripts[] = "lib/crsa/pgeditor/pg.scss.stylesheet.js";

            $scripts[] = "frameworks/bootstrap.helpers/bootstrap.helpers.js";
            $scripts[] = "frameworks/bootstrap.helpers/bootstrap.points.js";
            $scripts[] = "frameworks/bootstrap.helpers/bootstrap4.design.js";
            $scripts[] = "frameworks/bootstrap5/bootstrap5.js";
        }

        if(PG_FEATURES_DB) {
            $scripts[] = "lib/crsa/tools/pg.project.db.js";
            $scripts[] = "lib/crsa/views/pg.project.db.view.js";
        }

        if(PG_FEATURES_ANIMATIONS) {
            $scripts[] = "frameworks/pg.animations/pg.animations.js";
            $scripts[] = "frameworks/pg.animations/pg.animation.editor.js";
            $scripts[] = "frameworks/pg.animations/pg.animation.timeline.js";
            $scripts[] = "https://library.pinegrow.com/interactions/plugin/pg.ia.lib.js";
        }
        
        if(PG_FEATURES_WORDPRESS) {
            if($this->in_dev) {
                $scripts[] = "../PinegrowWordPress/pg-wordpress-utils.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-smart.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-acf.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-author.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-bookmarks.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-category.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-code.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-comments.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-conditions.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-links.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-loop.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-nav.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-parts.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-post.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-quicky.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-site.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-user.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-components.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress-customize.js";
                $scripts[] = "../PinegrowWordPress/pg-woo-smart.js";
                $scripts[] = "../PinegrowWordPress/pg-woo/pg-woo-misc.js";
                $scripts[] = "../PinegrowWordPress/pg-woo/pg-woo-product.js";
                $scripts[] = "../PinegrowWordPress/pg-woo/pg-woo-loop.js";
                $scripts[] = "../PinegrowWordPress/pg-woo/pg-woo-add-to-cart.js";
                $scripts[] = "../PinegrowWordPress/pg-woo/pg-woo-tabs.js";
                $scripts[] = "../PinegrowWordPress/pg-woo/pg-woo-cats.js";
                $scripts[] = "../PinegrowWordPress/pg-wordpress.js";
            } else {
                $scripts[] = "frameworks/pgwp/pgwp.js";
            }
        }

        if(PG_FEATURES_COMPONENTS) {
            $scripts[] = "lib/crsa/plugins/pg.components.js";
            $scripts[] = "lib/crsa/plugins/pg.components/resource-editor.js";
        }

        $scripts[] = "frameworks/fontawesome5/pg.fontawesome.js";

        if(defined('PG_PUBLISH_INTEGRATIONS') && PG_PUBLISH_INTEGRATIONS) {
            $scripts[] = "lib/crsa/plugins/publish/pg.publish.js";
        }

        $scripts[] = 'https://player.vimeo.com/api/player.js';
        $scripts[] = "lib/crsa/plugins/pg.backend.js";

        $scripts = apply_filters('pinegrow_editor_scripts', $scripts);

        $html = '';

        $profile_page_url = $this->getCurrentUserPreviewBaseUrl();

        $user = $this->getCurrentUser(false);

        global $pg_license_info;

        /*
         * Hi there :) Perhaps you are looking at this code, wondering if it is easy to
         * convert the free version to pro without paying? The good news is: Yes, it is
         * easy to do this, thanks to our code being open. The bad news is: cracking Pinegrow
         * takes the income away from our business and our families, and makes it harder for us
         * to continue improving the tool.
         * So, don't do it :)
         * Instead, if you really can't afford to pay for Pinegrow, get in touch with our team
         * at support@pinegrow.com and we will find a solution!
         */
        $is_pro = $pg_license_info->is_valid();

        $html .= '<script>
                window.pgwpdata = {
                ajaxurl: "'.admin_url( 'admin-ajax.php' ).'",
                version: "'.$this->version.'",
                beta: false,
                ajaxnonce: "'.wp_create_nonce( 'pinegrow_api_validation' ).'",
                preview_url: "'.$profile_page_url.'",
                public_url: "'.str_replace(home_url(), $this->public_site_url, $profile_page_url).'",
                edit_project: "'.esc_js((!empty($_GET['pgeditproject']) ? $_GET['pgeditproject'] : get_query_var('pgeditproject', ''))).'",
                edit_link: "'.PG_EDIT_URL.'",
                media_url: "'.PG_MEDIA_BASE_URL.'",
                user_settings: ' . json_encode($this->getUserSettings()) . ',
                preview_enabled: '.(!empty(get_option( 'permalink_structure' )) ? "true" : "false").',
                admin_url: "'.admin_url().'",
                login_url: "'.wp_login_url($this->getLoginRedirectUrl()).'",
                logout_url: "'.wp_logout_url(PG_LANDING_PAGE_URL).'",
                settings_url: "'.admin_url( 'admin.php?page=pinegrow-projects-settings' ).'",
                is_pro: '.($is_pro ? 'true' : 'false').',
                use_browser_storage: '.(PG_USE_WITHOUT_USER ? 'true' : 'false').',
                mode: "'.(defined('PINEGROW_PLUGIN_MODE') ? PINEGROW_PLUGIN_MODE : 'plugin').'",
                can_share: '.($this->canPublishPublicProjects($user) ? 'true' : 'false').',
                pine_cone_tasks_url: "' . $this->getPineConeTasksUrl($user, '') . '",
        }
        </script>';

        $html .= "<script src='{$this->base}lib/jquery/jquery-3.3.1.js?version={$this->version}'></script>\n";

        foreach($scripts as $url) {
            if(strpos($url, 'http') !== 0) {
                $url = $this->base . $url;
            }

            $html .= "<script src='{$url}?version={$this->version}'></script>\n";

            if(strpos($url, 'jqueryui') > 0) {
                $html .= '<script>$.widget.bridge("uibutton", $.ui.button);$.widget.bridge("uitooltip", $.ui.tooltip);</script>';
            }
        }


        /*
        wp_localize_script(
            'pg-backend',
            'pgwpdata',
            array(
                'ajaxurl'     => admin_url( 'admin-ajax.php' ),
                'ajaxnonce'   => wp_create_nonce( 'api_validation' ),
                'preview_url' => $profile_page_url,
                'public_url'  => str_replace(home_url(), $this->public_site_url, $profile_page_url),
                'edit_project' => get_query_var( 'pgeditproject' )
            )
        );
        */

        $html .= "<script>
 window.crsaStorage = new CrsaLocalStorage();

$(function() {
    $('body').removeClass('page').crsa({
        pages : [],
        templates : []
    });

});                
</script>";

        return $html;
	}

	private function setPostSubtype($post_id, $type) {
	    return;
        update_post_meta($post_id, 'post_subtype', $type);
    }

	//API
    private function apiValidate() {
        if(!wp_verify_nonce( $_REQUEST['security'], 'pinegrow_api_validation' )) {
            wp_send_json_error(array(
                'error' => 'Invalid api call.'
            ), 400);
        }

        if (!$this->in_dev && $_SERVER['REQUEST_METHOD'] !== 'POST') {
            wp_send_json_error(array(
                'error' => 'Invalid api call.'
            ), 400);
        }
    }

    public function getEditUrl($project, $user)
    {
        $edit_url = $user->user_login.'/'.$this->getProjectIdFromSlug($project->post_name, $user);
        return PG_EDIT_URL.'/' . $edit_url;
    }

    public function getPublicFileUrl($project, $user, $file, $use_editor_site = false)
    {
        $site_url = $_SERVER['HTTP_HOST'] !== PG_LOCAL_HOST ? PG_EDITOR_SITE_URL : PG_PUBLIC_SITE_URL;
        if($use_editor_site) {
            $site_url = PG_EDITOR_SITE_URL;
        }
        $edit_url = '/@'.$user->user_login.'/'.$this->getProjectIdFromSlug($project->post_name, $user).'/';
        if($file) {
            $edit_url .= $file->name;
        }
        return $site_url . $edit_url;
    }

    public function getFeaturedImageForUrl($project, $file = null, $size = 'full') {
        return get_the_post_thumbnail_url( $project, $size );
    }

    public function getCurrentUserProfileUrl($id = null)
    {
        $page = $this->getCurrentUserProfilePage($id);
        $url = get_permalink($page);
        return str_replace('/pg_users/', '/@', $url);
    }

    public function getCurrentUserBaseUrl($id = null) {
        if(PG_USER_PROFILES) {
            return $this->getCurrentUserProfileUrl($id);
        } else {
            if(empty($id)) {
                $user = $this->getCurrentUser(false);
            } else {
                $user = get_user_by('ID', $id);
            }
            if (empty($user)) return null;
            return get_site_url(null, '@' . $user->user_login .'/');
        }
    }

    public function getCurrentUserPreviewBaseUrl($id = null) {
        if(!PG_USER_PROFILES) {
            return $this->getCurrentUserBaseUrl($id);
        }
        $url = $this->getCurrentUserProfileUrl($id);
        if(PG_PUBLIC_SITE_URL !== PG_EDITOR_SITE_URL) {
            $url = str_replace(PG_PUBLIC_SITE_URL, PG_EDITOR_SITE_URL, $url);
        }
        return $url;
    }

    public function getUserSettings()
    {
        $user = $this->getCurrentUser(false);
        if($user) {
            $settings = get_user_meta($user->ID, 'pinegrow-settings', true);
        }
        if(empty($settings)) $settings = '{"dummy": ""}';
        $r = json_decode($settings, true);
        if(empty($r)) $r = array('dummy' => '');
        return $r;
    }

    public function apiSaveUserSettings()
    {
        $this->apiValidate();
        $user = $this->getCurrentUser(true);
        $data = $_REQUEST['data'];
        $settings = $data['settings'];

        if(!empty($settings)) {
            $original = $this->getUserSettings();
            $merged = array_merge($original, $settings);

            update_user_meta($user->ID, 'pinegrow-settings', json_encode($merged));
        }

        $response = array();
        wp_send_json_success($response);
    }

    public function getPineConeTasksUrl($user, $empty = null) {
        if(empty($user)) return $empty;
        $lib = pinegrow_get_field('pine_cone_tasks', 'user_' . $user->ID);
        if(empty($lib)) return $empty;
        $b = wp_get_upload_dir();
        return set_url_scheme($b['baseurl'].'/pinegrow/tasks/'.$user->ID.'/'.$lib);
    }

    public function apiSavePineConeTasks()
    {
        $this->apiValidate();
        $user = $this->getCurrentUser(true);
        $data = $_REQUEST['data'];
        $tasks = wp_unslash($data['tasks']);

        if(!empty($tasks)) {
            $has = true;
            $lib = pinegrow_get_field('pine_cone_tasks', 'user_' . $user->ID);
            if(empty($lib)) {
                $lib = $user->ID . "." . wp_generate_password(8, false) . ".pine.cone.tasks.json";
                $has = false;
            }

            $done = false;

            if(!$done) {
                $b = wp_get_upload_dir();
                $file = $b['basedir'].'/pinegrow/tasks/'.$user->ID.'/'.$lib;
                $file_dir = dirname($file);
                if (!wp_mkdir_p($file_dir)) {
                    wp_send_json_error(array(
                        'error' => "Unable to create Project Lib folder $file_dir."
                    ));
                }
                file_put_contents($file, $tasks);
            }

            if(!$has) {
                pinegrow_update_field('pine_cone_tasks', $lib, 'user_' . $user->ID);
            }
        }

        $response = array();
        wp_send_json_success($response);
    }

    public function getCurrentUserProfilePage($id = null) {
        if(!PG_USER_PROFILES) {
            die('Should not use profiles.');
        }
    }

    private function internalSaveImageData($image_data, $user, $project_post, $url, $bail_on_error = false)
    {
        $project_post_id = $project_post->ID;
        $url_path = parse_url($url, PHP_URL_PATH);
        $url_name = basename($url);
        $tmp_file = wp_tempnam('image' . wp_generate_password(5, false));

        file_put_contents($tmp_file, $image_data);

        $file = array(
            'name' => $url_name,
            'type' => wp_get_image_mime($tmp_file),
            'tmp_name' => $tmp_file,
            'error' => 0,
            'size' => wp_filesize($tmp_file)
        );

        $sideload = wp_handle_sideload(
            $file,
            array(
                'test_form' => false
            )
        );

        $image_data = null;

        if (empty($sideload['error'])) {
            $attachment_id = wp_insert_attachment(
                array(
                    'guid' => $sideload['url'],
                    'post_mime_type' => $sideload['type'],
                    'post_title' => basename($sideload['file']),
                    'post_content' => '',
                    'post_status' => 'inherit',
                ),
                $sideload['file'], $project_post_id
            );

            if (is_wp_error($attachment_id) || !$attachment_id) {
                if($bail_on_error) {
                    wp_send_json_error(array(
                        'error' => 'Unable to save the image. ' . $attachment_id->get_error_message()
                    ));
                }
            } else {

                wp_update_attachment_metadata(
                    $attachment_id,
                    wp_generate_attachment_metadata($attachment_id, $sideload['file'])
                );

                $type = pathinfo($sideload['url'], PATHINFO_EXTENSION);

                $image_file = $this->getDataFile($user, $project_post, $url, false);

                $this->saveDataFileForMappedUrl($image_file, $user, $project_post, $url, $type, $sideload['url']);

                $image_data = $this->getImageDataForAttachment(get_post($attachment_id));
            }
        } else {
            if($bail_on_error) {
                wp_send_json_error(array(
                    'error' => 'Unable to save the image. ' . $sideload['error']
                ));
            }
        }
        return $image_data;
    }

    private function getGlobalProject() {
        return $this->getProjectPost($this->global_project_slug, true, 'Global Pinegrow Project');
    }

    private function getProjectPost($project_id, $create = true, $project_name = null, $project_user = null, $revision_id = null) {
        if(!empty($project_user)) {
            //$create = false; //just in case, don't allow create
            //disabled, so that tutorial progress can be saved
        }

        if(!$project_user) {
            $project_user = $this->getCurrentUser(true);
        }

        if(empty($project_id)) return null;

        $projects = get_posts(
            array(
                'name' => $this->getSlugFromProjectId($project_id, $project_user),
                //'post_parent' => $user_profile_page->ID,
                'author' => PG_GLOBAL_PROJECTS ? null : $project_user->ID,
                'post_type' => $this->post_type,
                'post_status' => array('publish', 'private')
            )
        );



        if($projects) {
            return $projects[0];
        } else {
            if($create) {
                if(empty($project_name)) {
                    $project_name = $project_id;
                }

                $post_id = get_post(wp_insert_post(array(
                    'post_title' => $project_name,
                    'post_name' => $this->getSlugFromProjectId($project_id, $project_user),
                    //'post_parent' => $user_profile_page->ID,
                    'post_author' => $project_user->ID,
                    'post_content' => '',
                    'post_type' => $this->post_type,
                    'post_status' => (PG_USE_GROUPS || $project_id === $this->global_project_slug) ? 'publish' : 'private',
                   // 'post_author' => $user->ID

                )));

                //$this->setPostSubtype($post_id, 'project');

                return $post_id;
            } else {
                return null;
            }
        }
    }

    private function processMetaValue($v) {
        //wp_slash
	    return $v;
    }

    public function isAdmin($user) {
        if(empty($user)) return false;
        return in_array('administrator', $user->roles);
        //return in_array($user->ID, array('2', '36'));
    }

    public function isPrivilegedProfile($post)
    {
        $user = get_userdata( $post->post_author );
        $roles = array('administrator', 'editor');
        if (!empty($user)) {
            foreach ($roles as $role) {
                if (in_array($role, $user->roles)) {
                    return true;
                }
            }
        }
        return false;
    }

    public function redirectCurrentRequestToPublicSiteIfNeeded() {
        if($_SERVER['HTTP_HOST'] !== $this->public_site_host) {
            $redirect_url = $this->public_site_url . $_SERVER['REQUEST_URI'];
            //die($_SERVER['HTTP_HOST'] . " - " . $this->public_site_url);
            wp_redirect($redirect_url, 301);
            die();
        }
    }

    private function requireUserFromId($id) {
        $user = get_user_by('ID', $id);
        if(empty($user)) {
            wp_send_json_error(array(
                'error' => 'User not found.'
            ), 400);
        }
        return $user;
    }

    private function requirePost($post) {
	    if(empty($post)) {
            wp_send_json_error(array(
                'error' => 'Post not found.'
            ), 404);
        }
    }

    public function canUserAAccessProjectsOfUserB($user_a_id, $user_b_id, $group_id = null) {
	    $can = false;
	    if($user_a_id == $user_b_id) return true;
	    if(PG_USE_GROUPS) {
            if (empty($group_id)) {
                $group_id = pinegrow_get_field('class_group_id', 'user_' . $user_a_id);
            }
            if (!empty($group_id)) {
                $is_a_member = Groups_User_Group::read($user_b_id, $group_id);
                if ($is_a_member) {
                    $can = true;
                }
            }
        }
        return $can;
    }

    private function requireSameGroup($user_a, $user_b, $group_id = null) {
	    if($this->canUserAAccessProjectsOfUserB($user_a->ID, $user_b->ID, $group_id)) {
	        return true;
        }
        wp_send_json_error(array(
            'error' => 'Users must be in the same group.'
        ), 400);
    }

    public function getProjectAccessView($project_post) {
	    if(PG_USE_GROUPS) {
            return get_post_meta($project_post->ID, 'access_view', true) ?: 'group';
        } else {
            switch($project_post->post_status) {
                case 'publish':
                    return 'public';
                default:
                    return 'private';
            }
	    }
    }

    public function getProjectAccessClone($project_post) {
        return get_post_meta($project_post->ID, 'access_clone', true) ?: '';
    }

    private function canPublishPublicProjects($user, $profile = null)
    {
        if($this->isAdmin($user) || PG_PUBLIC_SHARING === 'all') {
            return true;
        }
        if($user) {
            if(!$profile) {
                $profile = $this->getCurrentUserProfilePage($user->ID);
            }
            if($profile && $profile->post_status === 'publish') {
                return true;
            }
        }
        return false;
    }

    private function setProjectAccessView($project_post, $access, $user) {
	    if($access === 'public' && !$this->canPublishPublicProjects($user)) die('Operation not allowed');
	    if(PG_USE_GROUPS) {
            return update_post_meta($project_post->ID, 'access_view', $access);
        } else {
	        $status = $access === 'public' ? 'publish' : 'private';
	        if($project_post->post_status !== $status) {
                wp_update_post(array(
                    'ID' => $project_post->ID,
                    'post_status' => $status
                ));
            }
        }
    }

    private function setProjectAccessClone($project_post, $access, $user) {
        return update_post_meta($project_post->ID, 'access_clone', $access);
    }

    public function getCurrentUser($abort = true, $skip_can_use = false) {
	    //supports user impersonalization
        if(!is_user_logged_in()) {
            if($abort) {
                wp_send_json_error(array(
                    'error' => 'User is not logged in.'
                ), 400);
            } else {
                return null;
            }
        }

        $user = wp_get_current_user();

        if($user->ID === 0) {
            if($abort) {
                wp_send_json_error(array(
                    'error' => 'User is not logged in.'
                ), 400);
            } else {
                return null;
            }
        }

        if(!$skip_can_use) {
            if (!$this->canUserUsePinegrow($user)) {
                if ($abort) {
                    wp_send_json_error(array(
                        'error' => 'Not allowed to use Pinegrow.'
                    ), 400);
                } else {
                    return null;
                }
            }
        }
        return $user;
    }

    private function createNewProjectPost($name) {
        $project_id = sanitize_title($name);
        $user = $this->getCurrentUser();

        $post = get_post(wp_insert_post(array(
            'post_title' => $name,
            'post_name' => $this->getSlugFromProjectId($project_id, $user),
            //'post_parent' => $user_profile_page->ID,
            'post_author' => $user->ID,
            'post_content' => '',
            'post_type' => $this->post_type,
            'post_status' => PG_USE_GROUPS ? 'publish' : 'private',
        )));

        return $post;
    }

    public function apiCreateProject() {
        $this->apiValidate();

        //sleep(10);

        $user = $this->getCurrentUser();

        $data = $_REQUEST['data'];

        $name = 'Project';

        if(!empty($data['name'])) {
            $name = pg_sanitize_text_field($data['name']);
        }

        $slug = sanitize_title($name);

        $slug = $this->getSlugFromProjectId($slug, $user);

        $project_page = get_post(wp_insert_post(array(
            'post_title' => $name,
            'post_name' => $slug,
            //'post_parent' => $user_profile_page->ID,
            'post_content' => '',
            'post_type' => $this->post_type,
            'post_author' => $user->ID,
            'post_status' => PG_USE_GROUPS ? 'publish' : 'private'
        )));

        //$this->setPostSubtype($project_page->ID, 'project');

        $num = str_replace($slug.'-',  '', $project_page->post_name);
        if($num === $slug) $num = 1;

        $name = $name.' '.$num;

        wp_update_post(array(
            'ID' => $project_page->ID,
            'post_title' => $name
        ));

        $source_project_post_id = pg_sanitize_text_field($data['source_project_id']);
        if(!empty($source_project_post_id)) {
            pinegrow_update_field('source_project_id', $source_project_post_id, $project_page);
        }

       // wp_set_post_tags($project_page->ID, array('project'), false);

        $project_id = $this->getProjectIdFromSlug($project_page->post_name, $user);

        wp_send_json_success(array(
            'project_id' => $project_id,
            'project_name' => $name,
            'export_nonce' => wp_create_nonce( 'export-' . $project_id )
        ));
    }

    private function getUserFilePath($user) {
        return $_SERVER['DOCUMENT_ROOT'].'/wp-content/uploads/'.$user->ID;
    }

    private function getProjectFilePath($user, $project) {
	    $pid = is_numeric($project) ? $project : $project->ID;
	    return $this->getUserFilePath($user).'/'.$pid;
    }

    private function getDataFilePath($user, $project, $name) {
        return $this->getProjectFilePath($user, $project).'/'.$name;
    }

    private function hasDataTypeViewContent($type) {
	    return $type === 'html' || $type === 'css';
    }

    private $allowed = array('html', 'js', 'css', 'scss', 'json', 'jpg', 'jpeg', 'gif', 'png', 'pgml', 'svg', 'less', 'webp');

    private function isFileTypeAllowed($type) {
        if(PG_FEATURES_WORDPRESS && $type === 'php') return true;
        return in_array($type, $this->allowed);
    }

    /* not used
    private function saveImageDataFile($user, $project, $name, $meta) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        $url_path = parse_url($name, PHP_URL_PATH);
        $file_type = pathinfo($url_path, PATHINFO_EXTENSION);

        if($wpdb->insert($table_name,
                array(
                    'project_id' => $project->ID,
                    'changed_time' => current_time( 'mysql' ),
                    'name' => $name,
                    'meta' => json_encode($meta),
                    'file_type' => $file_type,
                    'is_media' => 1
                ),
                array(
                    '%d',
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                    '%d'
                )) === false) {
            return false;
        }
        return $wpdb->insert_id;
    }
    */

    private function saveDataFileForMappedUrl($file, $user, $project, $name, $file_type, $url, $revision_id = null)
    {
        return $this->saveDataFile($file, $user, $project, $name, $file_type, '@mapurl:' . $url);
    }

    private function saveDataFile($file, $user, $project, $name, $file_type, $content, $view_content = '', $version = null, $revision_id = null)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        if(!$this->isFileTypeAllowed($file_type)) return false;

        if($file === null) {

            if($wpdb->insert($table_name,
                array(
                    'project_id' => $project->ID,
                    'changed_time' => current_time( 'mysql' ),
                    'name' => $name,
                    'content' => $content,
                    'view_content' => $view_content,
                    'file_type' => $file_type,
                    'user_id' => $user->ID
                ),
                array(
                        '%d',
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                    '%d'
                )) === false) {
                return false;
            }
            $file_id = $wpdb->insert_id;

        } else {
            $file_id = $file->id;
            if($version === null) {
                $version = $file->version + 1;
            }

            $fields = array(
                'changed_time' => current_time( 'mysql' ),
                'content' => $content,
                'view_content' => $view_content,
                'file_type' => $file_type,
                'cached' => 0,
                'version' => $version
            );

            $types = array(
                '%s',
                '%s',
                '%s',
                '%s',
                '%d',
                '%d'
            );

            if($file->name !== $name) {
                $fields['name'] = $name;
                $types[] = '%s';
            }

            if($wpdb->update($table_name,
                $fields,
                array(
                    'id' => $file_id
                ),
                $types,
                array( '%d' )
            ) === false) {
                return false; //error
            }
        }

        //Save revision
        if($revision_id) {
            $wpdb->insert($table_name,
                array(
                    'project_id' => $project->ID,
                    'changed_time' => current_time( 'mysql' ),
                    'name' => $name,
                    'content' => $content,
                    'view_content' => $view_content,
                    'file_type' => $file_type,
                    'revision_id' => $revision_id,
                    'user_id' => $user->ID
                ),
                array(
                    '%d',
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                    '%d',
                    '%d'
                ));
        }

        return $file_id;
    }

    private function restoreDataFiles($project, $revision_id) {
        //get all files for that revision
        $files = $this->getAllDataFiles(null, $project, true, $revision_id);
        //save them as the current
        foreach($files as $file) {
            $current_file = $this->getDataFile(null, $project, $file->name);
            $this->saveDataFile($current_file, null, $project, $file->name, $file->file_type, $file->content, $file->view_content, $file->version, null);
        }
    }

    private function renameDataFile($user, $project, $name, $new_name)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        if($wpdb->update($table_name,
                array(
                    'changed_time' => current_time( 'mysql' ),
                    'name' => $new_name
                ),
                array(
                    'name' => $name,
                    'project_id' => $project->ID
                ),
                array(
                    '%s', '%s'
                ),
                array( '%s', '%d' )
            ) === false) {
            return false; //error
        }

        return true;
    }

    public function updateDataFileThumb($file, $thumb_url)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        if($wpdb->update($table_name,
                array(
                    'thumb_time' => current_time( 'mysql' ),
                    'thumb_url' => $thumb_url
                ),
                array(
                    'id' => $file->id
                ),
                array(
                    '%s', '%s'
                ),
                array( '%d' )
            ) === false) {
            return false; //error
        }
        return true;
    }

    public function updateDataFileCached($file, $val)
    {
        return; //not used now
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        if($wpdb->update($table_name,
                array(
                    'cached' => $val
                ),
                array(
                    'id' => $file->id
                ),
                array(
                    '%d'
                ),
                array( '%d' )
            ) === false) {
            return false; //error
        }
        return true;
    }

    public function getThumbUrlForDataFileThumbUrl($thumb_url, $project) {
	    if(!empty($thumb_url)) {
	        $b = wp_get_upload_dir();
	        return $b['baseurl'].'/pinegrow/screenshots/'.$project->post_author.'/'.$thumb_url;
        }
	    return null;
    }

    public function getThumbFileForDataFileThumbUrl($thumb_url, $project) {
        if(!empty($thumb_url)) {
            $b = wp_get_upload_dir();
            return $b['basedir'].'/pinegrow/screenshots/'.$project->post_author.'/'.$thumb_url;
        }
        return null;
    }

    private function getDataFile($user, $project, $name, $content = true)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        $file = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table_name WHERE project_id = %d AND name = %s AND revision_id = 0 LIMIT 1", $project->ID, $name ) );

        if(!empty($file) && $content) {
            if(!$this->loadDataFileContent($user, $project, $file)) {
                return false;
            }
        }
        return $file;
    }

    private function loadDataFileContent($user, $project, $file) {
	    if(!empty($file->is_media)) return true;

        if(!PG_SAVE_CONTENT_IN_FILE) return true;
        return true;
    }

    private function getDataFileByIdWithoutContent($id)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table_name WHERE id = %d LIMIT 1", $id ) );
    }

    private function getAllDataFiles($user, $project, $content = true, $revision_id = null) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        if(empty($revision_id)) {
            $files = $wpdb->get_results($wpdb->prepare("SELECT * FROM $table_name WHERE project_id = %d AND is_media = 0 AND revision_id = 0", $project->ID));
        } else {
            $sql = $wpdb->prepare("SELECT {$table_name}.* FROM $table_name, (SELECT name, max(revision_id) as revision_id from $table_name WHERE project_id = %d AND revision_id <> 0 AND revision_id <= %d GROUP BY name) max_revision WHERE {$table_name}.name = max_revision.name AND {$table_name}.revision_id = max_revision.revision_id AND {$table_name}.project_id = %d", $project->ID, $revision_id, $project->ID);
            $files = $wpdb->get_results($sql);
        }

        if($content) {
            foreach($files as $file) {
                $this->loadDataFileContent($user, $project, $file);
            }
        }

        return $files;
    }

    private function deleteDataFile($user, $project, $file) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        $wpdb->delete( $table_name, array( 'id' => $file->id ), array( '%d' ) );

        //delete revisions as well NOT!!!
        //$wpdb->delete( $table_name, array( 'project_id' => $project->ID, 'name' => $file->name ), array( '%d', '%s' ) );
    }

    private function deleteDataFilesForProject($user, $project) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        $wpdb->delete( $table_name, array( 'project_id' => $project->ID ), array( '%d' ) );
    }

    private function deleteDataFilesForProjectRevision($project, $revision_id) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'pg_files';

        $this->revisions_deleted = true;

        $wpdb->delete( $table_name, array( 'project_id' => $project->ID, 'revision_id' => $revision_id ), array( '%d', '%d' ) );
    }

    public function getProjectUserAndFileForDataUrl($url) {
	    $a = explode('/', $url);
	    if(count($a) < 2) die('Invalid url');

	    $user_name = str_replace('@', '', $a[0]);
	    $project_slug = $a[1];

	    if(count($a) > 2) {
	        $file_name = join('/', array_slice($a, 2));
        } else {
	        $file_name = 'index.html';
        }
	    $current_user = $this->getCurrentUser(false);
	    if(!empty($current_user) && $current_user->user_login === $user_name) {
	        $project_user = $current_user;
        } else {
            $project_user = get_user_by('login', $user_name);
        }
	    if(empty($project_user)) die('Invalid url');

        $project_post = $this->getProjectPost($project_slug, false, null, $project_user);
	    $this->requirePost($project_post);

        $project_post_id = $project_post->ID;

        $file = $this->getDataFile($project_user, $project_post, $file_name);
        if(empty($file)) {
            return null;
        }

        return array(
            'user' => $project_user,
            'project' => $project_post,
            'file' => $file
        );
    }

    private function saveProjectData($data, $user) {

        $project_id = pg_sanitize_text_field($data['project_id']);
        $project_type = pg_sanitize_text_field($data['project_type']) ?: null;

        $project_post_user = $user;

        $project_parts = explode('/', $project_id);
        if(count($project_parts) === 2) {
            $project_user_slug = $project_parts[0];
            $project_id = $project_parts[1];
            if(PG_GLOBAL_PROJECTS) {
                $project_user_slug = get_user_by('login', $project_user_slug);
            } else {
                //the project belongs to another user but will be saved under the current user
            }
        } else {

        }

        $project_post = $this->getProjectPost($project_id, true, $data['name'], $project_post_user);

        $project_post_id = $project_post->ID;

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to save the project.'
            ));
        }

        $restore_to_revision_id = null;

        if(!empty($data['restore_to_revision_id'])) {
            $restore_to_revision_id = pg_sanitize_text_field($data['restore_to_revision_id']);
            $restore_post = wp_get_post_revision( $restore_to_revision_id );
            if(!$restore_post || $restore_post->post_parent !== $project_post_id) {
                wp_send_json_error(array(
                    'error' => 'Invalid revision.'
                ));
            }
        }


        $this->setCurrentProject($project_post);

        //check for overwrites
        if(!isset($data['current_version'])) {
            $current_version = 1;
        } else {
            $current_version = intval(pg_sanitize_text_field($data['current_version']));
        }

        $saved_version = get_post_meta($project_post_id, 'pg-saved-version', true);
        if(empty($saved_version)) {
            $saved_version = $current_version;
        } else {
            $saved_version = intval($saved_version);
        }

        if($current_version !== $saved_version) {
            if(empty($data['force_version_overwrite'])) {
                wp_send_json_error(array(
                    'error' => 'OTHER_VERSION_SAVED',
                    'saved_by_user' => '',
                    'saved_time' => strtotime($project_post->post_date_gmt . ' GMT'),
                ));
            } else {
                $current_version = 0; //will become 1
            }
        }
        //

        if($project_type) {
            wp_set_post_terms( $project_post_id, array($project_type), 'pinegrow_flags', false );
        }

        $access_view = pg_sanitize_text_field($data['access_view']);
        if(!empty($access_view)) {
            $this->setProjectAccessView($project_post, $access_view, $user);
        }

        $access_clone = pg_sanitize_text_field($data['access_clone']);
        if(!empty($access_clone)) {
            $this->setProjectAccessClone($project_post, $access_clone, $user);
        }

        $source_project_post_id = pg_sanitize_text_field($data['source_project_id']);
        if(!empty($source_project_post_id)) {
            pinegrow_update_field('source_project_id', $source_project_post_id, $project_post);
        }

        //for now this is set in admin ui
        $non_optional_templates = pg_sanitize_text_field($data['non_optional_templates']);
        if(!empty($non_optional_templates)) {
            pinegrow_update_field('non_optional_templates', $non_optional_templates, $project_post);
        }

        if(isset($data['tags'])) {
            wp_set_post_tags($project_post->ID, $data['tags'], false);
        }

        $update_project_data = array(
                'ID' => $project_post->ID
        );

        $response = array(
                'generating_thumbs' => array(),
            'thumbs' => array()
        );
        $thumbs = array();

        update_post_meta($project_post_id, 'inject_css', $this->processMetaValue($data['inject_css'] ?: ''));

        $saved_page_ids = array();

        $clear_cached = array();

        global $pg_project_post_revision;
        $pg_project_post_revision = null;

        if(empty($restore_to_revision_id)) {
            wp_update_post($update_project_data);

            if (empty($pg_project_post_revision)) {
                //Maybe revisions are disabled
            } else {
                $revision_post = wp_get_post_revision($pg_project_post_revision);

                if (empty($revision_post)) {
                    wp_send_json_error(array(
                        'error' => 'Could not get the revision post.'
                    ));
                }
                if(!$this->revisions_deleted) {
                    $response['revision_info'] = $this->getRevisionInfo($revision_post);
                } else {
                    $response['revisions'] = $this->getProjectRevisions($project_post, $access_view);
                }
            }
        } else {
            //we are restoring revision
            //restoring the project post will also trigger files restore
            //after that we write any changes we had

            $restore_ret = wp_restore_post_revision($restore_to_revision_id);
            if ( ! $restore_ret || is_wp_error( $restore_ret ) ) {
                wp_send_json_error(array(
                    'error' => 'Unable to restore the revision.'
                ));
            }
        }

        foreach($data['urls'] as $url => $info) {
            // if(strpos($url, '.html') !== false) {
            //$type = empty($info['file_type']) ? 'html' : $info['file_type'];

            $url_path = parse_url($url, PHP_URL_PATH);       // get path from url
            $type = pathinfo($url_path, PATHINFO_EXTENSION);

            $file = null;
            if(!empty($info['old_url'])) {
                $file = $this->getDataFile($user, $project_post, $info['old_url'], false);
            }
            if(empty($file)) {
                $file = $this->getDataFile($user, $project_post, $url, false);
            }

            $page_id = $this->saveDataFile($file, $user, $project_post, $url, $type, wp_unslash($info['content']), isset($info['view_content']) ? wp_unslash($info['view_content']) : '', $info['version'] || null, $pg_project_post_revision);

            if($page_id === false) {
                wp_send_json_error(array(
                    'error' => 'Could not save '.$url
                ));
            }
            $saved_page_ids[] = $page_id;

            if($url === '_info.html' && !empty($info['info'])) {
                //Save as project post content
                $update_project_data['post_excerpt'] =  empty($info['info']['excerpt']) ? '' : $info['info']['excerpt'];

                pinegrow_update_field('info_title', $info['info']['title'], $project_post);
                pinegrow_update_field('info_content', $info['info']['content'], $project_post);
            }

            if(PG_GENERATE_THUMBNAILS) {
                if ($type === 'html') {
                    //check if we need to generate thumb
                    $file = $this->getDataFileByIdWithoutContent($page_id);
                    $time = $this->getTimestampFromDBTime($file->thumb_time);

                    //Clear from CF cache
                    $clear_cached[] = $this->getPublicFileUrl($project_post, $user, $file, true);

                    if($url === 'index.html') {
                        //clear project without index.html suffix
                        $clear_cached[] = str_replace('index.html', '', $this->getPublicFileUrl($project_post, $user, $file, true));
                    }

                    if (empty($file->thumb_url) || time() - $time > 60) {
                        require_once dirname(__FILE__).'/class-file-thumb.php';
                        $thumbs = new Pinegrow_File_Thumb();
                        $thumbs->requestThumbnailFromService($user, $project_post, $file);
                        //update time stamp
                        $this->updateDataFileThumb($file, $file->thumb_url);

                        $response['generating_thumbs'][] = $url;
                    }
                }
            }
        }

        if(!empty($data['images'])) {
            require_once(ABSPATH . 'wp-admin/includes/image.php');

            foreach ($data['images'] as $url => $content) {
                $image_data = base64_decode($content);

                $file = $this->internalSaveImageData($image_data, $user, $project_post, $url);
            }
        }

        if(!empty($data['delete_pages'])) {
            foreach($data['delete_pages'] as $page_url) {
                $page_url = pg_sanitize_text_field($page_url);
                $file = $this->getDataFile($user, $project_post, $page_url);
                if(!empty($file)) {
                    $this->deleteDataFile($user, $project_post, $file);
                }
            }
        }

        $current_version++;
        update_post_meta($project_post_id, 'pg-saved-version', $current_version);

        $response['current_version'] = $current_version;

        if(defined('PG_CF_ZONE') && PG_CF_ZONE) {
            if (count($clear_cached) > 0) {
                require_once dirname(__FILE__)."/class-cloudflare.php";
                $cf = new Pinegrow_CloudFlare();
                $cfr = $cf->clearUrlsFromCache($clear_cached);
                $response['cfr'] = $cfr;
                $response['cfi'] = $clear_cached;
            }
        }

        if(!empty($data['request_thumbs'])) {
            foreach($data['request_thumbs'] as $url) {
                $file = $this->getDataFile($user, $project_post, $url);
                if(!empty($file) && !empty($file->thumb_url)) {
                    $response['thumbs'][$url] = $this->getThumbUrlForDataFileThumbUrl($file->thumb_url, $project_post);
                }
            }
        }

        $response['export_nonce'] = wp_create_nonce( 'export-' . $project_id );

        return $response;
    }

    private function getTimestampFromDBTime($time) {
        if ( empty( $time ) || '0000-00-00 00:00:00' === $time ) {
            return 0;
        }
        $datetime = date_create_immutable_from_format( 'Y-m-d H:i:s', $time, wp_timezone() );
        return $datetime->getTimestamp();
	}

    public function apiSaveProject($data) {
        $this->apiValidate();

        $user = $this->getCurrentUser();

        //sleep(10);

        $data = $_REQUEST['data'];

        $this->revisions_deleted = false;
        $response = $this->saveProjectData($data, $user);
        wp_send_json_success($response);
    }

    public function apiSaveRemoteImage($data) {
        $this->apiValidate();

        $user = $this->getCurrentUser();
        $data = $_REQUEST['data'];

        $project_id = pg_sanitize_text_field($data['project_id']);
        $remote_url = pg_sanitize_text_field($data['remote_url']);
        $local_url = pg_sanitize_text_field($data['local_url']);
        $project_post = $this->getProjectPost($project_id, false);

        $project_post_id = $project_post->ID;

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to save the project.'
            ));
        }
        $image_file = $this->getDataFile($user, $project_post, $local_url, false);
        if(!empty($image_file)) {
            wp_send_json_error(array(
                'error' => 'The file with the name ' . $local_url . ' already exists.'
            ));
        }

        $response = wp_remote_get($remote_url);

        if (is_wp_error($response)) {
            wp_send_json_error(array(
                'error' => 'Unable to fetch image from ' . $remote_url . '.'
            ));
        }
        $image_data = wp_remote_retrieve_body($response);

        $image_info = $this->internalSaveImageData($image_data, $user, $project_post, $local_url, true);

        wp_send_json_success(array(
                'data' => $image_info
        ));
    }

    public function apiSaveProjectLib($data) {
        $this->apiValidate();
        $user = $this->getCurrentUser();

        $project_id = pg_sanitize_text_field($_REQUEST['project_id']);
        $project_post = $this->getProjectPost($project_id, false);
        $this->requirePost($project_post);

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to save the project.'
            ));
        }

        $content = wp_unslash($_REQUEST['lib']);

        $lib = pinegrow_get_field('pine_cone_lib', $project_post);
        $version = pinegrow_get_field('pine_cone_lib_version', $project_post);

        $has = true;

        if(empty($lib)) {
            $lib = $project_post->ID . "." . wp_generate_password(8, false) . ".pine.cone.lib.json";
            $has = false;
        }
        if(empty($version)) {
            $version = 0;
        }

        $done = false;


        if(!$done) {
            $b = wp_get_upload_dir();
            $file = $b['basedir'].'/pinegrow/libs/'.$project_post->post_author.'/'.$project_post->ID.'/'.$lib;
            $file_dir = dirname($file);
            if (!wp_mkdir_p($file_dir)) {
                wp_send_json_error(array(
                    'error' => "Unable to create Project Lib folder $file_dir."
                ));
            }
            file_put_contents($file, $content);
        }

        if(!$has) {
            pinegrow_update_field('pine_cone_lib', $lib, $project_post);
        }
        $version++;
        pinegrow_update_field('pine_cone_lib_version', $version, $project_post);

        wp_send_json_success(array());
    }

    private function getProjectLibUrl($project_post) {
        $lib = pinegrow_get_field('pine_cone_lib', $project_post);
        if(empty($lib)) return null;
        $version = pinegrow_get_field('pine_cone_lib_version', $project_post);
        if(!empty($version)) {
            $lib .= '?v=' . $version;
        }
        $b = wp_get_upload_dir();
        return set_url_scheme($b['baseurl'].'/pinegrow/libs/'.$project_post->post_author.'/'.$project_post->ID.'/'.$lib);
    }

    public function apiGetExportedProjectLog() {
        if(PG_FEATURES_WORDPRESS !== true) die();

        $this->apiValidate();

        $user = $this->getCurrentUser();

        $data = $_REQUEST['data'];

        $project_id = pg_sanitize_text_field($data['project_id']);
        $project_post = $this->getProjectPost($project_id, false);
        $this->requirePost($project_post);

        if(!$this->canUserAccessProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'No access.'
            ), 403);
        }

        $project_type = $data['project_type'];

        if($project_type !== 'theme' && $project_type !== 'plugin') {
            wp_send_json_error(array(
                'error' => 'Invalid project type.'
            ));
        }

        $slug = $data['slug'];

        $slug = sanitize_title($slug);

        if(empty($slug)) {
            wp_send_json_error(array(
                'error' => 'Invalid project slug.'
            ));
        }

        $log_key = 'pinegrow-log-' . $project_type . '-' . $slug;
        $log = get_option( $log_key );

        wp_send_json_success(array(
            'log' => $log
        ));
    }


    public function apiGetExportLog() {
        if(PG_FEATURES_WORDPRESS !== true) die();

        $this->apiValidate();

        $this->getCurrentUser();

        $log_key = 'pinegrow-export-log';
        $log = get_option( $log_key );

        wp_send_json_success(array(
            'log' => $log
        ));
    }


    private $export_log_content = '';
    private $log_events = false;

    private function clearLogEvent() {
        delete_option('pinegrow-export-log');
        $export_log_content = '';
    }

    private function logEvent($e) {
        if($this->log_events) {
            $this->export_log_content .= $e . "\n";
            update_option('pinegrow-export-log', $this->export_log_content, false);
        }
    }

    public function apiExportProject() {
        if(PG_FEATURES_WORDPRESS !== true) die();

        $this->clearLogEvent();

        $data = $_REQUEST['data'];

        $this->log_events = !empty($data['with_log']) && $data['with_log'] === 'true';

        $this->logEvent('Export starter...');

        $this->apiValidate();

        $this->logEvent('apiValidated.');

        $user = $this->getCurrentUser();
        $settings_options = get_option( 'pinegrow_settings' );

        $this->logEvent('getCurrentUser and settings.');

        $files = $data['files'];

        $project_id = pg_sanitize_text_field($data['project_id']);

        if(!wp_verify_nonce($data['export_nonce'], 'export-' . $project_id)) {
            $this->logEvent('ERROR - Invalid security token.');

            wp_send_json_error(array(
                'error' => 'Invalid security token. Please reload the project and then export it.'
            ));
        }

        $loopback = !empty($data['loopback']) && $data['loopback'] === 'true';
        $no_pg_check = !empty($data['no_pg_check']) && $data['no_pg_check'] === 'true';

        $this->logEvent('Loopback = ' . $loopback ? 'true' : 'false');
        $this->logEvent('no_pg_check = ' . $no_pg_check ? 'true' : 'false');

        $project_post = $this->getProjectPost($project_id, false);
        $this->requirePost($project_post);

        $this->logEvent('Got project post with ID ' . $project_post->ID);

        if (!$this->canUserAccessProject($user, $project_post)) {
            $this->logEvent('ERROR - Not allowed to access project.');
            wp_send_json_error(array(
                'error' => 'No access.'
            ), 403);
        }

        if (defined('DISALLOW_FILE_MODS') && DISALLOW_FILE_MODS) {
            $this->logEvent('ERROR - DISALLOW_FILE_MODS is set.');
            wp_send_json_error(array(
                'error' => 'DISALLOW_FILE_MODS is set to true in WordPress config. Installing and updating plugins and themes is disabled.'
            ), 403);
        }

        if(empty($settings_options['ignore_disallow_file_edits']) || $settings_options['ignore_disallow_file_edits'] !== 'true') {

            $extra_msg = 'Editing plugin and theme files is disabled. Alternative is to download the exported project ZIP and upload it to WordPress, or to enable the setting to force allowing exporting projects in Pinegrow Settings (only if you fully understand the security implications).';

            if (defined('DISALLOW_FILE_EDIT') && DISALLOW_FILE_EDIT) {
                $this->logEvent('ERROR - DISALLOW_FILE_EDIT is set and Ignore is not checked.');

                wp_send_json_error(array(
                    'error' => 'DISALLOW_FILE_EDIT is set to true in WordPress config. ' . $extra_msg
                ), 403);
            }
        } else {

        }

        if (defined('DISALLOW_FILE_EDIT') && DISALLOW_FILE_EDIT) {
            $loopback = false;
            $this->logEvent('Set Loopback to false because DISALLOW_FILE_EDIT is set.');
        }

        $project_type = $data['project_type'];

        if($project_type !== 'theme' && $project_type !== 'plugin') {
            $this->logEvent('ERROR - Invalid project type.');
            wp_send_json_error(array(
                'error' => 'Invalid project type.'
            ));
        }

        $wp_cap = 'install_themes';
        $slug = $data['slug'];

        $slug = sanitize_title($slug);

        if(empty($slug)) {
            $this->logEvent('ERROR - Invalid project slug ' . $slug);
            wp_send_json_error(array(
                'error' => 'Invalid project slug.'
            ));
        }

        $log_key = 'pinegrow-log-' . $project_type . '-' . $slug;

        $folder = str_replace('_', '-', $slug);

        if(!current_user_can($wp_cap)) {
            $this->logEvent('ERROR - Not allowed to install project.');
            wp_send_json_error(array(
                'error' => 'Not allowed to install theme or plugin. The current user needs to have the '.$wp_cap.' capability.'
            ), 403);
        }

        if($project_type === 'plugin' && $folder === 'pinegrow') {
            $this->logEvent('ERROR - Invalid project slug ' . $folder);
            wp_send_json_error(array(
                'error' => 'Invalid project slug. Exporting to pinegrow would overwrite the Pinegrow plugin.'
            ));
        }

        delete_option( $log_key );
        $this->logEvent('Deleted the project error log.');

        $is_active = false;

        switch($project_type) {
            case 'theme':
                $dir = trailingslashit(get_theme_root()) . $folder;
                $is_active = ( get_stylesheet() === $folder || get_template() === $folder );

                //force theme.json refresh
                //delete_option( $option_timeout );
                break;
            case 'plugin':
                $dir = trailingslashit(WP_PLUGIN_DIR) . $folder;
                $is_active = in_array(
                    $folder,
                    (array) get_option( 'active_plugins', array() ),
                    true
                );
                break;
        }

        $this->logEvent('is_active = ' . $is_active ? 'true' : 'false');

        $this->logEvent('Require the file system...');

        require_once(ABSPATH . 'wp-admin/includes/class-wp-filesystem-base.php');
        require_once(ABSPATH . 'wp-admin/includes/class-wp-filesystem-direct.php');

        $this->logEvent('Done.');
        $this->logEvent('Getting the FS instance...');
        $fs = new WP_Filesystem_Direct(false);

        if (!WP_Filesystem( true, array() ) ) {
            $this->logEvent('ERROR - Unable to access the filesystem.');
            wp_send_json_error(array(
                'error' => 'Unable to access the filesystem.'
            ));
        }

        $first_export = !$fs->exists( $dir );

        $this->logEvent('first_export = ' . $first_export ? 'true' : 'false');

        $pg_magic_file = trailingslashit($dir) . '.exported_by_pinegrow';
        //$comp_pg_magic_file = trailingslashit($dir) . '.exported_by_pinegrow';

        $this->logEvent('Checking if this is a PG project...');

        if(!$first_export && !$fs->exists( $pg_magic_file ) /* && !$fs->exists( $comp_pg_magic_file )*/ /*&& (empty($settings_options['disable_check']) || $settings_options['disable_check'] !== 'true')*/ && empty($no_pg_check)) {
            $this->logEvent('ERROR - It is not and check is not disabled.');
            wp_send_json_error(array(
                'error' => '<span style="display:none;">NOT_A_PG_PROJECT</span>This is not a Pinegrow project. Use Pinegrow Settings - &quot;Do not check if the project was exported by Pinegrow&quot; to export projects that were previously created with the older version of Pinegrow plugin.'
            ));
        }

        $upgrade_folder = $fs->wp_content_dir() . 'upgrade/';

        //$working_dir = get_temp_dir() . 'export-' . wp_generate_password( 10, false );
        $working_dir = $upgrade_folder . 'export-' . wp_generate_password( 10, false );

        $this->logEvent('working_dir = ' . $working_dir);

        if(!wp_mkdir_p($working_dir)) {
            $this->logEvent('ERROR - Unable to create the working dir.');

            wp_send_json_error(array(
                'error' => "Unable to create working folder $working_dir."
            ));
        }

        $dir_cache = array();

        $this->logEvent('Here is the list of exported files:');

        $file_list = '';
        foreach($files as $file => $file_data) {
            $file_list .= "--- " . $file . "\n";
        }

        $this->logEvent($file_list);

        foreach($files as $file => $file_data) {
            if($project_type === 'plugin' && $file === $slug.'.php') {
                $file = $folder.'.php';

                $this->logEvent('Plugin file will be ' . $file);
            }
            $content = wp_unslash($file_data['content']);
            if($file_data['type'] === 'base64') {
                $content = base64_decode($content);
            }
            $file_path = wp_normalize_path($working_dir . '/' . rawurldecode($file));

            if(strpos($file_path, '..') !== false) {
                $this->logEvent('Invalid file name - will not  be saved: ' . $file_path);
                continue;
            }
            $file_dir = dirname($file_path);
            if(!isset($dir_cache[$file_dir])) {
                if (!wp_mkdir_p($file_dir)) {
                    wp_send_json_error(array(
                        'error' => "Unable to create folder $file_dir."
                    ));
                } else {
                    $dir_cache[$file_dir] = true;
                }
            }
            if(file_put_contents($file_path, $content) === false) {
                $this->logEvent('Unable to write file: ' . $file_path);

                wp_send_json_error(array(
                    'error' => 'Unable to write the file ' . $file_path . '. Is the destination writable?'
                ));
            } else {
                $this->logEvent('File written: ' . $file_path);
            }

            $dest_file = wp_normalize_path($dir . '/' . rawurldecode($file));
            wp_opcache_invalidate( $dest_file, true );
        }

        $this->logEvent('Files written.');

        //create pinegrow signature file
        $pg_magic_file = trailingslashit($working_dir) . '.exported_by_pinegrow';
        if(file_put_contents($pg_magic_file, 'pinegrow') === false) {
            $this->logEvent('Unable to write file: ' . $pg_magic_file);
        } else {
            $this->logEvent('Pinegrow signature file created.');
        }

        if($project_type === 'theme') {
            $thumb_file = $this->getThumbFileForPage($project_post);
            if($thumb_file) {
                $thumb_dest = wp_normalize_path($working_dir . '/screenshot.' . (wp_check_filetype($thumb_file)['ext']));
                $fs->copy($thumb_file, $thumb_dest, true);
            }
        }

        $this->logEvent('Requesting class-wp-upgrader.php');
        require_once(ABSPATH . 'wp-admin/includes/class-wp-upgrader.php');

        //make backup of the $dir
        $backup_dir = $dir.'__pg_backup';

        $this->logEvent('backup_dir = ' . $backup_dir);

        if($loopback) {
            $this->logEvent('Renaming the original project to backup.');
            if (!$first_export) {
                if ($fs->exists($backup_dir)) {
                    if (!$fs->delete($backup_dir, true, 'd')) {
                        $this->logEvent('ERROR - Unable to delete old backup.');
                        wp_send_json_error(array(
                            'error' => 'Unable to delete old backup folder ' . $backup_dir
                        ));
                    }
                }
                if (!@rename($dir, $backup_dir)) {
                    $this->logEvent('ERROR - Unable to create backup.');
                    wp_send_json_error(array(
                        'error' => 'Unable to create backup of the destination project.'
                    ));
                }
            }
        }

        $this->logEvent('Getting Upgrader instance...');
        $upgrader = new WP_Upgrader(new Pinegrow_Upgrader_Skin());
        $upgrader->init();
        $this->logEvent('Upgrader->install_package...');

        $result = $upgrader->install_package(
            array(
                'source'                      => $working_dir,
                'destination'                 => $dir,
                'clear_destination'           => true,
                'abort_if_destination_exists' => true,
                'clear_working'               => true,
                'hook_extra'                  => array(),
            )
        );

        $this->logEvent('Done.');

        if(is_wp_error($result)) {
            $this->logEvent('ERROR - Upgrader failed with ' . $result->get_error_code());
            wp_send_json_error(array(
                'error' => $result->get_error_code()
            ));
        }

        //use this wp function to resave the main file in order to trigger loopback check if the site still works
        $check_args = array(
                'file' => ($project_type === 'plugin') ? ($folder . '/' . $folder.'.php') : 'functions.php'
        );

        if($loopback) {
            $this->logEvent('Doing loopback...');

            switch ($project_type) {
                case 'plugin':
                    $check_args['plugin'] = $check_args['file'];
                    $check_args['nonce'] = wp_create_nonce('edit-plugin_' . $check_args['file']);
                    break;
                case 'theme':
                    $check_args['theme'] = $folder;
                    $check_args['nonce'] = wp_create_nonce('edit-theme_' . $folder . '_functions.php');
                    wp_clean_themes_cache();
                    break;
            }
            $check_args['newcontent'] = wp_unslash($files[($project_type === 'plugin') ? ($slug . '.php') : 'functions.php']['content']);

            $check_result = wp_edit_theme_plugin_file($check_args);
            $this->logEvent('Done.');

            if (is_wp_error($check_result)) {
                //revert the original project
                $this->logEvent('Loopback failed.');
                $restore_status = '';

                //Delete the exported project
                if (!$fs->delete($dir, true, 'd')) {
                    $restore_status .= '<p>We tried to remove the exported project, but <b>were unable to delete it!</b></p>';
                } else {
                    if (!$first_export) {
                        //Restore the backup project if it exists
                        if (!@rename($backup_dir, $dir)) {
                            $restore_status .= '<p>We tried to restore  the original project, but <b>were unable to bring it back!</b></p>';
                        } else {
                            $restore_status .= '<p>The previous version of the project was restored.</p>';
                        }
                    }
                }

                $check_error_message = $check_result->get_error_message();
                $check_error_details = print_r($check_result->get_error_data(), true);

                $loopback_not_working = true;

                $this->logEvent('Loopback error details: ' . $check_error_message . "\n" . $check_error_details);

                if(strpos($check_error_details, 'loopback_request_failed') !== false) {
                    $check_error_message = 'Unable to test load the site after export. If this happens often, disable &quot;Try loading the site after export&quot; in the WordPress menu.';
                    $check_error_details = '';
                    $loopback_not_working = true;
                }

                if(!empty($check_error_details)) {
                    $check_error_details = '<p>Details:</p><pre>' . $check_error_details . '</pre>';
                }

                $this->logEvent('ERROR - Loopback failed.');
                wp_send_json_error(array(
                    'error' => '<p>The exported project or another site plugin or theme <b>crashed the site</b>!</p>' . $restore_status . '<p>The reason for the crash is:</p><div style="border-left: 4px red solid; padding: 10px;background: #ff00000f;margin: 20px 0;">' . $check_error_message . '</div>'.$check_error_details,
                    'loopback_not_working' => $loopback_not_working
                ));
            } else {
                if (!$first_export) {
                    //delete backup dir
                    $this->logEvent('Deleting backup dir ' . $backup_dir);
                    if (!$fs->delete($backup_dir, true, 'd')) {
                        //$restore_status .= '<p>Unable to delete the backup folder</b> '.$backup_dir.'</p>';
                    }
                }
            }
        }

        $this->logEvent('Export done.');

        $response = array();

        wp_send_json_success($response);
    }

    public function apiSetProjectFeaturedImage()
    {
        $this->apiValidate();

        $user = $this->getCurrentUser();

        $data = $_REQUEST['data'];

        $project_id = pg_sanitize_text_field($data['project_id']);

        $project_post = $this->getProjectPost($project_id, false);

        if(!$this->canUserAccessProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'No access.'
            ), 403);
            die();
        }

        $image_id = intval(pg_sanitize_text_field($data['image_id']));

        if(!empty($image_id)) {
            set_post_thumbnail( $project_post, $image_id );
        } else {
            delete_post_thumbnail( $project_post );
        }
        $response = array();
        wp_send_json_success($response);
    }

    private function getUserAndProjectFromProjectId($project_id, $project_user_slug = null): array
    {
        $project_parts = explode('/', $project_id);
        if(count($project_parts) === 2) {
            $project_user_slug = $project_parts[0];
            $project_id = $project_parts[1];
        }
        return array($project_user_slug, $project_id);
    }

    public function canUserSaveProject($user, $project_post, $access_view = null) {
        if(empty($user)) return false;
        if(empty($access_view)) {
            $access_view = $this->getProjectAccessView($project_post);
        }
        if(PG_GLOBAL_PROJECTS) {
            return $this->canUserAccessProject($user, $project_post, $access_view);
        } else {
            if($this->isAdmin($user)) return true;
            return $project_post->post_author == $user->ID;
        }
    }

    public function canUserViewProject($user, $project_post, $access_view = null) {
        if(empty($user)) return false;
        if(PG_PREVIEW_ONLY_IF_CAN_EDIT) {
            return $this->canUserSaveProject($user, $project_post, $access_view);
        } else {
            return $this->canUserAccessProject($user, $project_post, $access_view);
        }
    }

    //public function canUserEditProject

    public function canUserAccessProject($user, $project_post, $access_view = null)
    {
        if(empty($access_view)) {
            $access_view = $this->getProjectAccessView($project_post);
        }
        if(PG_GLOBAL_PROJECTS) {
            //public has different meaning in global mode. It means that other authorized users can edit this project
            if(empty($user)) return false;
            if($project_post->post_author != $user->ID) {
                if ($access_view === 'public') {
                    return user_can( $user, 'edit_others_posts' );
                }
            }
        } else {
            if ($access_view === 'public') {
                return true;
            }
        }
        if(empty($user)) return false;

        if(!PG_GLOBAL_PROJECTS && $this->isAdmin($user)) return true;

        if($access_view === 'private') {
            if($project_post->post_author != $user->ID) {
                return false;
            } else {
                return true;
            }
        } else {
            //group
            if (!$this->canUserAAccessProjectsOfUserB($user->ID, $project_post->post_author)) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    public function getProjectIdFromSlug($slug, $user) {
        $needle = $user->ID.'-';
        if(PG_GLOBAL_PROJECTS && strpos($slug, $needle.PG_TUTORIAL_PREFIX) !== 0) return $slug;
        if($slug === $this->global_project_slug) return $slug;
        $pos = strpos($slug, $needle);
        if ($pos !== false) {
            return substr_replace($slug, '', $pos, strlen($needle));
        }
        return $slug;
    }

    private function getSlugFromProjectId($project_id, $user) {
        if(PG_GLOBAL_PROJECTS && strpos($project_id, PG_TUTORIAL_PREFIX) !== 0) return $project_id;
        if($project_id === $this->global_project_slug) return $project_id;
	    return $user->ID."-".$project_id;
    }

    public function onTemplateDirectory($template_dir, $template, $theme_root)
    {
        if(defined('DOING_AJAX') && DOING_AJAX) {
            if( !empty( $_REQUEST['pinegrow_api_call'])) {
                return '_pg_this_theme_does_not_exist';
            }
        }
        return $template_dir;
    }

    private function getRevisionInfo($revision_post) {
        $user = get_user_by('ID', $revision_post->post_author);
        return array(
                'id' => $revision_post->ID,
            'time' => strtotime($revision_post->post_date_gmt . ' GMT'),
            'user' => $user->display_name
        );
    }

    public function apiLoadProject($data) {

        $this->apiValidate();

        $req_data = $_REQUEST['data'];

        $project_id = pg_sanitize_text_field($req_data['project_id']);
        $project_user_slug = pg_sanitize_text_field($req_data['project_user_slug']);

        $revision_id = null;

        if(!empty($req_data['revision_id'])) {
            $revision_id = intval( pg_sanitize_text_field($req_data['revision_id']));
        }

        $load_optional = empty($req_data['load_optional']) || $req_data['load_optional'] === 'true';

        list($project_user_slug, $project_id) = $this->getUserAndProjectFromProjectId($project_id, $project_user_slug);

        $user = $this->getCurrentUser(PG_GLOBAL_PROJECTS || empty($project_user_slug));

        $project_user = null;

        if(empty($project_user_slug)) {
            $project_user = $user;
        } else {
            $project_user = get_user_by('login',$project_user_slug);
            if(empty($project_user)) {
                wp_send_json_error(array(
                    'error' => 'User not found.'
                ), 400);
            }
        }

        $backup_project_id = !empty($req_data['project_id_if_not_found']) ? pg_sanitize_text_field($req_data['project_id_if_not_found']) : null;

        $project_post = $this->getProjectPost($project_id, false, null, $project_user, $revision_id);

        if(empty($project_post) && $backup_project_id) {
            $project_post = $this->getProjectPost($backup_project_id, false, null, $project_user);
            $project_id = $backup_project_id;
        }

        $this->requirePost($project_post);

        $project_post_id = $project_post->ID;

        $access_view = $this->getProjectAccessView($project_post);

        if(empty($user) || $project_post->post_author != $user->ID) {
            //check access
            if(!$this->canUserAccessProject($user, $project_post, $access_view)) {
                wp_send_json_error(array(
                    'error' => 'You are not allowed to view this project.'
                ), 403);
                die();
            }
        }

        $allow_clone = $this->getProjectAccessClone($project_post);

        //if this is a project from other user and we are in online mode we will reset the sharing to private
        if(PG_CUSTOMIZE_WP && $user->ID != $project_user->ID) {
            $access_view = 'private';
            $allow_clone = '';
        }

        $data = array(
            'name' => $project_post->post_title,
            'loaded_project_id' => $project_id,
            'urls' => array(),
            'access_view' => $access_view,
            'access_clone' => $allow_clone,
            'source_project_id' => pinegrow_get_field('source_project_id', $project_post),
            'non_optional_templates' => pinegrow_get_field('non_optional_templates', $project_post),
            'tags' => $this->getProjectTags($project_post->ID),
            'export_nonce' => wp_create_nonce( 'export-' . $project_id ),
            'project_lib_url' => $this->getProjectLibUrl($project_post)
        );

        $saved_version = get_post_meta($project_post->ID, 'pg-saved-version', true);
        if(empty($saved_version)) {
            $saved_version = 10; //1 is reserved after force
        } else {
            $saved_version = intval($saved_version);
        }

        $data['current_version'] = $saved_version;

        if($revision_id) {
            $revision_post = wp_get_post_revision($revision_id);
            if(empty($revision_post)) {
                wp_send_json_error(array(
                    'error' => 'Unable to get the post revision.'
                ));
            }
            $data['loaded_revision_info'] = $this->getRevisionInfo($revision_post);
        }

        $files = $this->getAllDataFiles($project_user, $project_post, true, $revision_id);

        $css = get_post_meta($project_post_id, 'inject_css', true);
        if(!empty($css)) {
            $data['inject_css'] = $css;
        }

        $non_optional_list = empty($data['non_optional_templates']) ? array() : explode(',', $data['non_optional_templates']);

        foreach($files as $file) {
            $page_url = $file->name;

            $type = pathinfo($page_url, PATHINFO_EXTENSION);

            if($type === 'html' && !$load_optional && count($non_optional_list) > 0 && !in_array($page_url, $non_optional_list)) continue;

            $html = $file->content;
            $data['urls'][$page_url] = array(
                    'content' => $html,
                'thumb' => $this->getThumbUrlForDataFileThumbUrl($file->thumb_url, $project_post),
                'version' => intval($file->version)
            );
        }

        //get revisions
        $data['revisions'] = $this->getProjectRevisions($project_post, $access_view);

        wp_send_json_success($data);
    }

    private function getProjectRevisions($project_post, $access_view = null)
    {
        $r = [];

        $project_post_id = $project_post->ID;

        $user = $this->getCurrentUser(false);

        if($this->canUserSaveProject( $user, $project_post, $access_view)) {

            $revisions = wp_get_post_revisions($project_post_id);

            foreach ($revisions as $rev) {
                $r[] = $this->getRevisionInfo($rev);
            }
        }
        return $r;
    }

    public function apiDeleteProject() {
        $user = $this->getCurrentUser();
        $this->apiValidate();

        $req_data = $_REQUEST['data'];
        $project_id = pg_sanitize_text_field($req_data['project_id']);

        $project_post = $this->getProjectPost($project_id, false);

        $this->requirePost($project_post);

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to delete the project.'
            ));
        }

        //project files will be deleted in deleted_post action handler
        //$this->deleteDataFilesForProject($user, $project_post);

        wp_delete_post($project_post->ID, true);

        wp_send_json_success(array(
        ));
    }

    public function apiDeleteProjects() {
        $user = $this->getCurrentUser();
        $this->apiValidate();

        $req_data = $_REQUEST['data'];
        $project_ids = $req_data['project_ids'];

        foreach($project_ids as $project_id) {
            $project_id = pg_sanitize_text_field($project_id);

            $project_post = $this->getProjectPost($project_id, false);

            if(!empty($project_post)) {

                if ($this->canUserSaveProject($user, $project_post)) {
                    $this->deleteDataFilesForProject($user, $project_post);
                    wp_delete_post($project_post->ID, true);
                }
            }
        }

        wp_send_json_success(array(
        ));
    }

    public function apiRenameProject() {
        $this->apiValidate();

        //sleep(10);

        $user = $this->getCurrentUser();

        $req_data = $_REQUEST['data'];
        $project_id = pg_sanitize_text_field($req_data['project_id']);
        $new_name = pg_sanitize_text_field($req_data['project_name']);

        $project_post = $this->getProjectPost($project_id, false);

        $this->requirePost($project_post);

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to rename the project.'
            ));
        }

        wp_update_post(array(
            'ID' => $project_post->ID,
            'post_title' => $new_name,
            'post_name' => $this->getSlugFromProjectId(sanitize_title($new_name), $user)
        ));

        $project_post = get_post($project_post->ID);

        $new_project_id = $this->getProjectIdFromSlug($project_post->post_name, $user);
        wp_send_json_success(array(
            'project_id' => $new_project_id,
            'old_project_id' => $project_id,
            'project_name' => $new_name,
            'export_nonce' => wp_create_nonce( 'export-' . $new_project_id )
        ));
    }

    public function apiDeleteProjectRevision() {
        $this->apiValidate();
        $user = $this->getCurrentUser();

        $req_data = $_REQUEST['data'];
        $project_id = pg_sanitize_text_field($req_data['project_id']);
        $revision_id = pg_sanitize_text_field($req_data['revision_id']);

        $project_post = $this->getProjectPost($project_id, false);
        $this->requirePost($project_post);

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to delete the project revision.'
            ));
        }

        if(empty($revision_id)) {
            wp_send_json_error(array(
                'error' => 'Invalid revision id.'
            ));
        }

        $revision_post = wp_get_post_revision( $revision_id );

        if(!$revision_post || $revision_post->post_parent !== $project_post->ID) {
            wp_send_json_error(array(
                'error' => 'Invalid revision.'
            ));
        }

       if(!wp_delete_post_revision($revision_post)) {
           wp_send_json_error(array(
               'error' => 'Unable to delete revision.'
           ));
       }

        wp_send_json_success(array(
                'revisions' => $this->getProjectRevisions($project_post)
        ));
    }


    public function apiDeleteAllProjectRevisions() {
        $this->apiValidate();
        $user = $this->getCurrentUser();

        $req_data = $_REQUEST['data'];
        $project_id = pg_sanitize_text_field($req_data['project_id']);

        $project_post = $this->getProjectPost($project_id, false);
        $this->requirePost($project_post);

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to delete project revisions.'
            ));
        }

        $revisions = wp_get_post_revisions( $project_post->ID );

        foreach($revisions as $rev) {
            wp_delete_post_revision($rev->ID);
        }

        wp_send_json_success(array(
            'revisions' => $this->getProjectRevisions($project_post)
        ));
    }

    public function getUserAvatar($user_id) {
        if(PG_USER_AVATAR === 'select') {
            return pinegrow_get_field('avatar', 'user_' . $user_id);
        } else {
            if(PG_USER_AVATAR === 'pick_url') {
                $avatar_url = pinegrow_get_field('user_avatar_url', 'user_' . $user_id);
                if(!empty($avatar_url)) {
                    return $avatar_url;
                }
            }

            $avatar = pinegrow_get_field('user_avatar', 'user_' . $user_id, 'image');
            if(!empty($avatar)) {
                return $avatar['url'];
            }
        }
        return null;
    }

    public function apiGetProjects() {
        $this->apiValidate();

	    $req_data = $_REQUEST['data'];

	    $data = array(
	        'projects' => array(),
            'user' => array(
                'level' => 0,
                'name' => 'Guest',
                'username' => 'guest',
                'email' => null,
                'image' => 'alien1.png',
                'student' => false,
                'product' => array(
                    'plan' => 'none'
                )
            )
        );

        $user = $this->getCurrentUser();

        if(empty($user)) {
            wp_send_json_success($data);
        }


	    $options = array(
            //'post_parent' => $user_profile_page->ID,
            'author' => $user->ID,
            'post_type' => array($this->post_type),
            'nopaging' => true,
            'post_status' => array('publish', 'private'),
            'orderby' => 'modified',
            'tax_query' => array(
                array (
                    'taxonomy' => 'pinegrow_flags',
                    'field' => 'slug',
                    'terms' => 'project',
                )
            ),
        );

	    if(!empty($req_data['project_type'])) {
	        //$options['tag'] = $req_data['project_type'];
        }
        $pages = get_posts( $options );

        foreach($pages as $page) {
            $project_id = $this->getProjectIdFromSlug($page->post_name, $user);

            $data['projects'][] = array(
                'name' => $page->post_title,
                'url' => '',
                'project_id' => $project_id,
                'thumb' => $this->getThumbUrlForPage($page),
                'tags' => $this->getProjectTags($page->ID)
            );
        }

        if(!empty($user)) {
            $data['user']['name'] = $user->display_name;
            $data['user']['id'] = $user->ID;
            $data['user']['email'] = $user->user_email;
            $data['user']['username'] = $user->user_login;

            $data['user']['avatar'] = $this->getUserAvatar($user->ID);

            if(PG_USER_PROFILES) {
                $data['user']['bio'] = pinegrow_get_field('user_bio', 'user_' . $user->ID);
            }

            if($this->isAdmin($user)) {
                $data['user']['admin'] = true;
            }

            $data['user']['settings'] = $this->getUserSettings();


            if(PG_USER_MANAGEMENT) {
            } else {
                $data['user']['level'] = 2;
            }
        }

        $dstr = pinegrow_get_field('lesson_status', 'user_'.$user->ID);
        if(!empty($dstr)) {
            $d = json_decode($dstr, true);
        } else {
            $d = array();
        }
        $data['lessons'] = $d;

        $data['security'] = wp_create_nonce( 'pinegrow_api_validation' );

        wp_send_json_success($data);
    }

    public function apiGetPublicProjects() {
        $this->apiValidate();

        $user = $this->getCurrentUser(!PG_USE_WITHOUT_USER);

        $options = array(
            //'author__not_in' => array($user->ID),
            'post_type' => array($this->post_type),
            'posts_per_page' => 40,
            'category_name' => 'featured',
            'post_status' => array('publish'),
            'tax_query' => array(
                array (
                    'taxonomy' => 'pinegrow_flags',
                    'field' => 'slug',
                    'terms' => 'project',
                )
            ),
        );

        if(PG_GLOBAL_PROJECTS) {
            unset($options['category_name']);
            $options['posts_per_page'] = 9999;
            if(!empty($user)) {
                $options['author__not_in'] = array($user->ID);
            }
        }

        $data = array('projects' => array());

        $projects = get_posts( $options );

        foreach($projects as $page) {
            $project_user = get_userdata($page->post_author);
            $project_id = $this->getProjectIdFromSlug($page->post_name, $project_user);

            $data['projects'][] = array(
                'name' => $page->post_title,
                'url' => '',
                'project_id' => PG_GLOBAL_PROJECTS ? $project_id : $project_user->user_login.'/'.$project_id,
                'author' => $project_user->user_login,
                'thumb' => $this->getThumbUrlForPage($page),
                'tags' => $this->getProjectTags($page->ID)
            );
        }

        wp_send_json_success($data);
    }

    private function getProjectTags($project_id)
    {
        $tags = array();
        foreach(wp_get_post_tags($project_id) as $tag) {
            $tags[] = $tag->name;
        }
        return $tags;
    }

    public function apiGetImages() {
        $this->apiValidate();

        $req_data = $_REQUEST['data'];

        $user = $this->getCurrentUser();

        $options = array(
            'post_mime_type' => 'image',
            'post_type' => 'attachment',
            'author' => $user->ID,
            'posts_per_page' => 20,
            'paged' => empty($req_data['page']) ? 1 : intval($req_data['page']),
            //'post_status' => array('publish', 'private')
        );

        if(PG_GLOBAL_PROJECTS) {
            unset($options['author']);
        }

        if(!empty($req_data['term'])) {
            $options['s'] = pg_sanitize_text_field($req_data['term']);
        }

        if(!empty($req_data['project_id'])) {
            $project_post = $this->getProjectPost(pg_sanitize_text_field($req_data['project_id']));
            if($project_post) {
                $options['post_parent'] = $project_post->ID;
            }
        }

        $images = get_posts( $options );

        $data = array('results' => array(), 'total_pages' => 0);

        $home = home_url('wp-content/uploads/');

        foreach($images as $image) {
            $img_data = $this->getImageDataForAttachment($image, $home);
            $data['results'][] = $img_data;
        }

        wp_send_json_success($data);
    }

    public function apiDeleteFile() {
        $this->apiValidate();

        $req_data = $_REQUEST['data'];

        $user = $this->getCurrentUser();
        $id = pg_sanitize_text_field($req_data['id']);

        $image = get_post($id);

        if(empty($image->post_parent)) {
            if($image->post_author != $user->ID && !$this->isAdmin($user)) {
                wp_send_json_error(array(
                    'error' => 'The user is not allowed to delete the file.'
                ));
            }
        } else {
            $project_post = $this->getProjectPost($image->post_parent);
            $this->requirePost($project_post);
            if(!$this->canUserSaveProject($user, $project_post)) {
                wp_send_json_error(array(
                    'error' => 'The user is not allowed to delete files from the project.'
                ));
            }
        }

        if($image && $image->post_author == $user->ID && wp_delete_attachment($id, true)) {
            wp_send_json_success(array());
        } else {
            wp_send_json_error('Could not delete the image.');
        }
    }

    public function getImageDataForAttachment($image, $home = null) {
	    if(empty($home)) {
	        $home = home_url('wp-content/uploads/');
        }
	    $local_home = $home;

	    if(PG_UPLOADE_IMAGES_TO_S3) {
            global $wpdb;
            $table_name = $wpdb->prefix . 'as3cf_items';
            $s3 = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table_name WHERE source_id = %d LIMIT 1", $image->ID));
        } else {
            $s3 = null;
        }

        $img_data = wp_get_attachment_metadata($image->ID);
        $img_data['name'] = $image->post_title;

        if(!empty($s3)) {
            $home = PG_MEDIA_BASE_URL;
            $img_data['file'] = $s3->path;
        }

        $attachment_url = wp_get_attachment_url($image->ID);

        $img_data['url_base'] = dirname($attachment_url) . '/';
        $img_data['url'] = $attachment_url;

        //$img_data['url_base'] = $home . dirname($img_data['file']) . '/';
        //$img_data['url'] = $home . $img_data['file'];

        $img_data['id'] = $image->ID;

        //get responsive
        $image_src  = $img_data['url'];
        $size_array = array(
            $img_data['width'],
            $img_data['height'],
        );
        $img_data['srcset'] = wp_calculate_image_srcset( $size_array, $image_src, $img_data, $image->ID );

        if(PG_USE_CUSTOM_UPLOAD_DIR) {
            $user_home = PG_MEDIA_BASE_URL;
            $replace_home = $home;

            if (!empty($img_data['srcset']) && !empty($s3)) {
                $img_data['srcset'] = str_replace($replace_home . '/', $user_home, $img_data['srcset']);
                $img_data['srcset'] = str_replace($replace_home, $user_home, $img_data['srcset']);
            }

            $img_data['url_base'] = str_replace($replace_home, $user_home, $img_data['url_base']);
            $img_data['url'] = str_replace($replace_home, $user_home, $img_data['url']);
        }

        $img_data['sizes']['full'] = array(
            'width' => $img_data['width'],
            'height' => $img_data['height'],
            'file' => wp_basename($img_data['file'])
        );
        return $img_data;
    }



    public function apiUploadFile() {
        $this->apiValidate();

        //$req_data = $_REQUEST['data'];

        $user = $this->getCurrentUser();

        $allow_images = array('image/gif', 'image/png', 'image/jpeg', 'image/jpg', 'image/webp');

        $allow_fonts = array('font/ttf', 'font/woff', 'font/woff2');

        if($this->isAdmin($user)) {
            $allow_images[] = 'image/svg+xml';
            $allow_images[] = 'image/svg';
        }

        $allow = array_merge($allow_fonts, $allow_images);

        if(!in_array($_FILES['file']['type'], $allow)) {
            wp_send_json_error(array(
                'error' => "Uploading {$_FILES['file']['type']} files is not supported."
            ));
        }

        $is_image = in_array($_FILES['file']['type'], $allow_images);

        if(empty($_REQUEST['project_id'])) {
            $project_id = $this->global_project_slug;
        } else {
            $project_id = pg_sanitize_text_field($_REQUEST['project_id']);
        }
        $project_post = $this->getProjectPost($project_id, false);
        $this->requirePost($project_post);

        if(!$this->canUserSaveProject($user, $project_post)) {
            wp_send_json_error(array(
                'error' => 'The user is not allowed to upload files to the project.'
            ));
        }

        $folder = '';
        if(!empty($_REQUEST['folder'])) {
            $folder = pg_sanitize_text_field($_REQUEST['folder']);
        }

        $this->setCurrentProject($project_post);

        $data = array();

        $attachment_id = media_handle_upload( 'file', $project_post->ID );
        if ( is_wp_error( $attachment_id ) ) {
            wp_send_json_error(array(
                'error' => $attachment_id->get_error_message()
            ));
        } else {
            if($is_image) {
                $data['image'] = $this->getImageDataForAttachment(get_post($attachment_id));

                $url = 'images/' . wp_basename($data['image']['url']);
            } else {
                $url = $folder . '/' . wp_basename($data['image']['url']);
            }
            $image_file = $this->getDataFile($user, $project_post, $url, false);

            $this->saveDataFileForMappedUrl($image_file, $user, $project_post, $url, pathinfo($url, PATHINFO_EXTENSION), $data['image']['url']);

            $data['file'] = array(
                    'source_url' => $url,
                'mapped_url' => $data['image']['url'],
                'content' => '@mapurl:' . $data['image']['url']
            );

            wp_send_json_success($data);
        }
    }


    private function setLessonStatus($lesson_id, $status) {
        $user = $this->getCurrentUser();

        $dstr = pinegrow_get_field('lesson_status', 'user_'.$user->ID);
        if(!empty($dstr)) {
            $d = json_decode($dstr, true);
        } else {
            $d = array();
        }
        $d[$lesson_id] = $status;

        pinegrow_update_field('lesson_status', json_encode($d), 'user_'.$user->ID);
    }

    public function apiSetLessonStatus() {
        $this->apiValidate();

        $data = $_REQUEST['data'];
	    $lesson_id = pg_sanitize_text_field( $data['lesson_id'] );
	    $status = pg_sanitize_text_field( $data['status'] );

        $this->setLessonStatus($lesson_id, $status);
        wp_send_json_success(true);
    }

    private function setLessonStatusMultiple($lesson_ids, $status) {
        $user = $this->getCurrentUser();

        $dstr = pinegrow_get_field('lesson_status', 'user_'.$user->ID);
        if(!empty($dstr)) {
            $d = json_decode($dstr, true);
        } else {
            $d = array();
        }
        foreach($lesson_ids as $lesson_id) {
            $lesson_id = pg_sanitize_text_field( $lesson_id );
            $d[$lesson_id] = $status;
        }

        pinegrow_update_field('lesson_status', json_encode($d), 'user_'.$user->ID);
    }

    public function apiSetLessonStatusMultiple() {
        $this->apiValidate();

        $data = $_REQUEST['data'];
        $status = pg_sanitize_text_field( $data['status'] );

        $this->setLessonStatusMultiple($data['lesson_ids'], $status);
        wp_send_json_success(true);
    }

    public function apiSaveLocalUserData() {
        $this->apiValidate();

        $user = $this->getCurrentUser();

        $data = $_REQUEST['data'];

        $projects = $data['projects'];
        $lessons = $data['lessons'];
        $is_upload = !empty($data['is_upload']);

        $response = array(
                'projects' => array()
        );

        foreach($projects as $pid => $project_data) {
            if($is_upload) {
                $project_post = $this->createNewProjectPost(pg_sanitize_text_field(!empty($project_data['name']) ? $project_data['name'] : $project_data['project_id']));

                $project_data['project_id'] = $this->getProjectIdFromSlug( $project_post->post_name, $user);

                $project_data['force_version_overwrite'] = true;
                $this->saveProjectData($project_data, $user);

                $response['projects'][] = $this->getProjectIdFromSlug($project_post->post_name, $user);

            } else {
            }
        }

        $dstr = pinegrow_get_field('lesson_status', 'user_'.$user->ID);
        if(!empty($dstr)) {
            $lesson_statuses = json_decode($dstr, true);
        } else {
            $lesson_statuses = array();
        }

        foreach($lessons as $lesson_id => $status) {
            if(empty($lesson_statuses[$lesson_id])) {
                $lesson_statuses[$lesson_id] = $status;
            }
        }
        pinegrow_update_field('lesson_status', json_encode($lesson_statuses), 'user_'.$user->ID);

        wp_send_json_success($response);
    }


	private $tunnel_url = PG_TUNNEL_URL;

	public function onRestInit() {
    }

    private function getActiveProductForUser($user_id) {
	    return $this->manage_users->getActiveProductForUser($user_id);
    }

    public function paddleNotification() {
        $this->manage_users->paddleNotification();
    }

    private function getTunnelUrl($url) {
        $url = str_replace("http://${_SERVER['HTTP_HOST']}/", $this->tunnel_url, $url);
        $url = str_replace("https://${_SERVER['HTTP_HOST']}/", $this->tunnel_url, $url);
        return $url;
    }

    public function getGloballyAccessibleUrl($url) {
	    if(strpos($_SERVER['HTTP_HOST'], '.') === false) {
	        return $this->getTunnelUrl($url);
        }
	    return $url;
    }



	public function getThumbUrlForPage($project, $url = null) {
        $thumb = pinegrow_get_field('project_thumb_url', $project);
        if(!empty($thumb)) {
            return $this->getThumbUrlForDataFileThumbUrl($thumb, $project);
        }
	    return $this->getFeaturedImageForUrl($project, null, PG_CUSTOMIZE_WP ? 'page-thumb' : 'post-thumbnail');
    }

    public function getThumbFileForPage($project, $url = null) {
        $thumb = pinegrow_get_field('project_thumb_url', $project);
        if(!empty($thumb)) {
            return $this->getThumbFileForDataFileThumbUrl($thumb, $project);
        }
        $post_thumbnail_id = get_post_thumbnail_id( $project );
        if(!empty($post_thumbnail_id)) {
            return get_attached_file($post_thumbnail_id);
        }
        return null;
    }

    private function getPagePostForUrl($url) {
        $url = substr(parse_url($url, PHP_URL_PATH), 1);
        return get_page_by_path($url);
    }

    public function logInfo($name, $info) {
    }
}

