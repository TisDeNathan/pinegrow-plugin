<?php
function pinegrow_update_field($field, $value, $post) {
    if(PG_USE_ACF) {
        update_field($field, $value, $post);
    } else {
        if(is_string($post)) {
            if(str_starts_with($post, 'user_')) {
                $user_id = intval(str_replace('user_', '', $post));
                update_user_meta( $user_id, $field, $value);
            }
        } else {
            update_post_meta(is_numeric($post) ? $post : $post->ID, $field, $value);
        }
    }
}

function pinegrow_get_field($field, $post, $type = null) {
    if(PG_USE_ACF) {
        return get_field($field, $post);
    } else {
        $r = null;
        if(is_string($post)) {
            if(str_starts_with($post, 'user_')) {
                $user_id = intval(str_replace('user_', '', $post));
                $r = get_user_meta( $user_id, $field, true);
            }
        } else {
            $r = get_post_meta( is_numeric($post) ? $post : $post->ID, $field, true);
        }
        if($type === 'post' && is_numeric($r)) {
            $r = get_post($r);
        } else if($type === 'image' && is_numeric($r)) {
            $image = get_post($r);
            if($image) {
                global $pg_plugin_public;
                $r = $pg_plugin_public->getImageDataForAttachment($image);
            } else {
                $r = null;
            }
        }
        return $r;
    }
}


function pgOutputGetResetCSS() {
    return "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
*, *:after, *:before {
    box-sizing: border-box;
}
        
html, body {
    min-height:100vh;
}
";
}



function pgNotAllowed($msg = '') {
    die('Sorry, you are not allowed to view the project. '.$msg);
}


function pg_get_project_edit_url($post = null) {
    global $pg_plugin_public;
    $user = get_userdata( $post->post_author );
    return $pg_plugin_public->getEditUrl($post, $user);
}

function pg_get_post_status_for_query($author_id) {
    global $pg_plugin_public;
    $user = $pg_plugin_public->getCurrentUser(false);
    if(empty($user) || $author_id != $user->ID) {
        return array('publish');
    }
    return array('publish', 'private');
}

function pg_get_project_image($project) {
    global $pg_plugin_public;
    return $pg_plugin_public->getThumbUrlForPage($project);
}

function pg_get_author_avatar($user_id, $size = 'medium') {
    global $pg_plugin_public;
    return  $pg_plugin_public->getUserAvatar($user_id);

    $a = pinegrow_get_field( 'user_avatar', 'user_'.$user_id);
    if(!empty($a)) {
        return $a['sizes'][$size];
    }
    return '';
}

function pg_get_author_badge($user_id) {
    $badge = pinegrow_get_field( 'user_badge', 'user_'.$user_id);
    if(!empty($badge)) {
        return '<badge><img src="images/pine_cone_2020_white.svg">'.$badge.'</badge>';
    }
    return '';
}

function pg_sanitize_text_field($val) {
    $val = sanitize_text_field($val);
    return _wp_specialchars( $val, ENT_QUOTES );
}

class Pinegrow_Upgrader_Skin {

    public $upgrader;
    public $done_header = false;
    public $done_footer = false;
    public $result = false;
    public $options = array();
    public function __construct( $args = array() ) {
    }

    public function set_upgrader( &$upgrader ) {
        if ( is_object( $upgrader ) ) {
            $this->upgrader =& $upgrader;
        }
        $this->add_strings();
    }

    public function add_strings() {
    }

    public function set_result( $result ) {
        $this->result = $result;
    }

    public function request_filesystem_credentials( $error = false, $context = '', $allow_relaxed_file_ownership = false ) {
        return true;
    }

    public function header() {
    }

    public function footer() {
    }

    public function error( $errors ) {
    }

    public function feedback( $feedback, ...$args ) {
    }

    public function before() {}

    public function after() {}

    public function bulk_header() {}

    public function bulk_footer() {}

    public function hide_process_failed( $wp_error ) {
        return false;
    }
}
