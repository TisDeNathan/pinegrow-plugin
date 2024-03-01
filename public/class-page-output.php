<?php

class Pinegrow_Page_Output {

    private $pg_plugin;

    public function __construct() {
        global $pg_plugin_public;

        $this->pg_plugin = $pg_plugin_public;
    }

    public function outputDataFile($data) {
        global $pg_plugin_public, $pgBaseUrl;
        global $base_site_url;

        $mode = PG_DEFAULT_PREVIEW_MODE;

        if(!empty($data['mode'])) $mode = $data['mode'];

        $base_site_url = $pgBaseUrl;

        $current_user = $pg_plugin_public->getCurrentUser(false);

        if(empty($current_user)) {
            $base_site_url = str_replace(PG_EDITOR_SITE_URL, PG_PUBLIC_SITE_URL, $base_site_url);
            $base_site_url = str_replace(PG_LANDING_PAGE_URL, PG_PUBLIC_SITE_URL, $base_site_url);
            //$base_site_url = $pg_plugin_public->public_site_url;
        }

        $project = $data['project'];
        $project_author_id = $project->post_author;

        $project_user = $data['user'];

        $access_view = $pg_plugin_public->getProjectAccessView($project);

        if($mode === 'normal_if_viewed_by_author') {
            if(!empty($current_user) && $project_author_id == $current_user->ID && $_SERVER['HTTP_HOST'] === $pg_plugin_public->editor_site_host) {
                //this is preview on editor site
                $mode = 'normal';
            } else {
                $mode = 'iframe';
            }
        }

        $file = $data['file'];

        if(empty($file)) {
            pgNotAllowed('URL not found');
        }

        $content = $file->view_content;
        if(empty($content)) $content = $file->content;

        if($file->file_type === 'html') {
            $public_site_hostname = str_replace('https://', '', PG_PUBLIC_SITE_URL);

            if($access_view === 'public') {
                if(PG_PREVIEW_ONLY_IF_CAN_EDIT) {
                    if(!$this->pg_plugin->canUserViewProject($current_user, $project, $access_view)) {
                        pgNotAllowed();
                    }
                } else if(empty($current_user) || $project_author_id != $current_user->ID ) {
                    if(empty($data['mapped_to_post'])) {
                        $pg_plugin_public->redirectCurrentRequestToPublicSiteIfNeeded();
                    }
                }

            } else if(empty($current_user)) {
                if(PG_CUSTOMIZE_WP) {
                    pgNotAllowed('You need to be signed in to view this project.');
                } else {
                    pgNotAllowed();
                }
            } else {
                if(!$this->pg_plugin->canUserViewProject($current_user, $project, $access_view)) {
                    pgNotAllowed();
                }
            }

            $output = '';

            global $wp;
            $post_permalink = add_query_arg( array(), $wp->request );

            $project_url = dirname( $post_permalink );

            $content = str_replace('__PROJECTBASE__', $project_url, $content);

            $project_version = get_post_modified_time( 'U', true, $project);
            $content = str_replace('__PROJECT_VERSION__', $project_version, $content);

            $base = $base_site_url;
            $base = $pg_plugin_public->getGloballyAccessibleUrl($base);

            if(!empty($data['set_base'])) {
                $target = '';
                if($mode === 'iframe') {
                    $target = ' target="_parent"';
                }
                $content = str_replace('<head>', "<head>
        <base href=\"{$data['set_base']}\"{$target}>", $content);
            } else if($mode === 'iframe') {
                $content = str_replace('<head>', "<head>
        <base target=\"_parent\">", $content);
            }

            $content = str_replace('</body>', '', $content);
            $content = str_replace('</html>', '', $content);

            $content .= "
<script>            

if(window.opener) {
    window.opener.postMessage({
        action: 'pgPageViewOpened',
        url: '$post_permalink'
    }, '*');
    
    window.addEventListener('message', function(event) {
        console.log('Got pgPageViewOpened', event);

        if(event.data.action === 'pgPageChanged') {
            location.reload();
        }
    }, false);
}       
</script>
            ";

            //echo $content;

            //fix older projects
            $content = str_replace('https://pinegrow.online/wp-content/plugins/pinegrow/', 'https://pinegrow.online/wp-content/plugins/pinegrow-online/', $content);


            $prehead = explode('</head>', $content);

            $output .= $prehead[0];
            //wp_head();

            if(defined('PG_FAVICON_ICO')) {
                $output .= '<link rel="icon" type="image/ico" href="' . $pgBaseUrl . PG_FAVICON_ICO . '"/>';
            }

            if(defined('PG_FAVICON_32x32')) {
                $output .= '<link rel="icon" href="' . $pgBaseUrl . PG_FAVICON_32x32 . '" sizes="32x32" />';
            }
            if(defined('PG_FAVICON_192x192')) {
                $output .= '<link rel="icon" href="' . $pgBaseUrl . PG_FAVICON_192x192 . '" sizes="192x192" />';
            }
            if(defined('PG_FAVICON_180x180')) {
                $output .= '<link rel="apple-touch-icon" href="' . $pgBaseUrl . PG_FAVICON_180x180 . '" />';
            }
            if(defined('PG_FAVICON_270x270')) {
                $output .= '<meta name="msapplication-TileImage" content="' . $pgBaseUrl . PG_FAVICON_270x270 . '" />';
            }

            $clone = $pg_plugin_public->getProjectAccessClone($project);

            if($clone === 'clone') {
                $output .= '<style>
#pg-menu-box {
position: fixed !important;
    bottom: 10px !important;
    right: 10px !important;
    background-color: rgba(20,20,20,0.75) !important;
    color: rgba(255,255,255,0.75) !important;
    padding: 0 !important;
    border-radius: 2px !important;
    font-family: sans-serif !important;
    transition: all 0.3s !important;
    font-size: 13px !important;
    line-height: 1 !important;
    height: 32px !important;
    z-index:20000 !important;
}

#pg-menu-box:hover {
background-color: rgba(20,20,20,1) !important;
}

#pg-menu-box a {
font-size: 13px !important;
text-decoration: none !important;
color: inherit !important;
display: inline-flex !important;
flex-direction: row !important;
align-items: center !important;
}
#pg-menu-box a:hover {
text-decoration: underline !important;
}
#pg-menu-box img {
width: 32px !important;
margin-right: 8px !important;
border-radius: 2px 0 0 2px !important;
}

</style>';
            }

            if(strpos($prehead[0], '<title>') === false) {
                $output .= "    <title>{$project->post_title}</title>\n";
            }

            $title = $project->post_title;

            //get title and description from output
            preg_match_all('/<title>(.*)<\/title>/m', $output, $matches, PREG_SET_ORDER, 0);
            if(!empty($matches)) {
                $title = $matches[0][1];
            }

            $description = 'A Pinegrow Online project';
            preg_match_all('/<meta name="description" content="(.*)"/m', $output, $matches, PREG_SET_ORDER, 0);
            if(!empty($matches)) {
                $description = $matches[0][1];
            }

            $featured_image = $this->pg_plugin->getFeaturedImageForUrl($project, null, 'large');
            if(empty($featured_image)) {
                $featured_image = $this->pg_plugin->getThumbUrlForPage($project);
            }

            $open_graph_html = $this->getOpenGraphCode($data, $title, $description, $featured_image, $post_permalink);

            if($mode !== 'iframe') {
                if(strpos($output, '<meta property="og:title"') === false) {
                    $output .= $open_graph_html;
                }
            }

            $output .= '</head>';

            $output .= $prehead[1];

            if($this->pg_plugin->isAdmin($project_user)) {
                $output = preg_replace_callback(
                    '/\[PG_INCLUDE ([^\]]+)\]/m',
                    function ($matches) {
                        $template = $matches[1];
                        ob_start();
                        get_template_part($template);
                        return ob_get_clean();
                    },
                    $output
                );
            }

            $edit_url = $this->pg_plugin->getEditUrl($project, $project_user);

            if($clone === 'clone' && $mode !== 'iframe') {
                $box = '<div id="pg-menu-box"><a href="'.$edit_url.'" target="_blank" title="Edit this project in '.PG_APP_NAME.'" style="text-decoration: none;margin-right: 8px;"><img src="' . $pgBaseUrl . 'images/logo_pine.png"> Edit</a></div>';

                $output .= $box;
            }

            $output .= '</body></html>';

            if($mode === 'iframe') {
                $info = false;
                $post_content = pinegrow_get_field('info_content', $project);

                $info = !empty($post_content);

                if($info) {
                    $info_title = pinegrow_get_field('info_title', $project);
                    if(empty($info_title)) {
                        $info_title = $project->post_title;
                    }
                    $post_content = preg_replace('/([A-Za-z0-9\-\_]+)_ICON/', '<i class="icon icon-$1"></i>', $post_content);
                    $post_content = preg_replace('/([A-Za-z0-9\-\_]+)_KEY/', '<kbd>$1</kbd>', $post_content);
                }
                $project_name = $project->post_title;
                require_once 'output_templates/iframe-topbar.php';
                //require_once 'output_templates/with-floating-bar.php';
            } else {
                echo $output;
            }
            die();

        } else if($file->file_type === 'css') {
            header('Content-type: text/css');
            header('Cache-control: must-revalidate');

            $inject_css = get_post_meta($project, 'inject_css', true);
            if(!empty($inject_css)) {
                $content = $inject_css."\n".$content;
            }

            $import_re = '/@import[^;]+;/m';
            preg_match_all($import_re, $content, $matches, PREG_SET_ORDER, 0);

            if(count($matches) > 0) {
                $content = preg_replace($import_re, '', $content);
            }

            //$content = pgOutputGetResetCSS().$content;

            if(count($matches)) {
                $imports = '';
                for($n = 0; $n < count($matches); $n++) {
                    $imports .= $matches[$n][0]."\n";
                }
                $content = $imports."\n".$content;
            }

            $content = preg_replace_callback('/url\\([\'"]([^\'"]+)[\'"]\\)/', function($match) {
                global $pgBaseUrl;
                global $pg_plugin_public;
                global $base_site_url;

                $url = $match[1];
                if(strpos($url, 'http://') === false && strpos($url, 'https://') === false) {
                    //avoid breaking links to /wp-content/...,
                    if(strpos($url, '/wp-') !== 0) {
                        if (strpos($url, '/') === 0) {
                            $url = substr($url, 1);
                        }
                        $url = $base_site_url . $url;
                    }
                    $url = $pg_plugin_public->getGloballyAccessibleUrl($url);
                }
                return "url('$url')";
            }, $content);

            echo $content;
        } else {
            $mimes = array(
                'js' => 'application/javascript',
                'json' => 'application/json',
                'svg' => 'image/svg+xml'
            );
            header('Content-type: '.$mimes[$file->file_type]);
            header('Cache-control: must-revalidate');

            echo $content;
        }

        die();
    }

    private function encodeQuotes($s) {
        return str_replace('"', '&quot;', $s);
    }

    public function getOpenGraphCode($data, $title, $description, $featured_image, $url = null) {
        if(empty($url)) {
            $url = $this->pg_plugin->getPublicFileUrl($data['project'], $data['user'], $data['file']);
        }

        $html = '        <meta property="og:title" content="'.$this->encodeQuotes($title).'">
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="'.$url.'">
        <meta property="og:description" content="'.$this->encodeQuotes($description).'">
        <meta property="og:image" content="'.$featured_image.'">
        ';

        return $html;
    }

}

?>