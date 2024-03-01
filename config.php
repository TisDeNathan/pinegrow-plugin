<?php

define('PG_APP_NAME', 'Pinegrow Online');
define('PG_LOCAL_HOST', 'pinegrowplugindev');
define('PG_EDITOR_SITE_URL', get_site_url());
define('PG_LANDING_PAGE_URL', 'https://pinegrow.online');
define('PG_PUBLIC_SITE_URL', get_site_url());
define('PG_MEDIA_BASE_URL', PG_PUBLIC_SITE_URL);
define('PG_SUPPORT_URL', 'https://pinegrow.com#support');

define('PG_LOGIN_LOGO', 'images/pg_logo_2020_512x512.png');
define('PG_LOGIN_BACKGROUND', 'images/online.bck.2000.jpg');

define('PG_USERS_FOLDER', 'users');
define('PG_USE_CUSTOM_UPLOAD_DIR', false);
define('PG_LOGIN_DONE_URL', 'admin.php?page=pinegrow-login-done');

define('PG_USE_GROUPS', false);

define('PG_DEV_CODE_FOLDER', '/PinegrowCode/');
define('PG_PLUGIN_FOLDER', 'pinegrow');

define('PG_PUBLIC_SHARING', 'all');

define('PG_FEATURES_EDITOR', 'monaco');
define('PG_FEATURES_TW', true);
define('PG_FEATURES_DB', true);
define('PG_FEATURES_DESIGN', true);
define('PG_FEATURES_FRAMEWORKS', true);
define('PG_FEATURES_ANIMATIONS', true);
define('PG_FEATURES_ONLINE', true);
define('PG_FEATURES_INFO_EDITOR', true);
define('PG_FEATURES_WORDPRESS', true);
define('PG_FEATURES_COMPONENTS', true);

define('PG_LOAD_LOCAL_PINECONE', isset($_SERVER['SERVER_NAME']) && ($_SERVER['SERVER_NAME'] === PG_LOCAL_HOST));
define('PG_PUBLISH_INTEGRATIONS', true);

define('PG_GLOBAL_PROJECTS', true); //not per user
define('PG_TUTORIAL_PREFIX', 'tutorial_');
define('PG_INCLUDE_TUTORIALS', 'wp,whatsnew,*');

define('PG_REGISTER_ACF_FIELDS', false);
define('PG_USE_ACF', false);

define('PG_USE_FILES_TABLE', true);
define('PG_SAVE_CONTENT_IN_FILE', false);
define('PG_USER_AVATAR', 'custom');

define('PG_USER_MANAGEMENT', false);
define('PG_PADDLE_PUBLIC_KEY', '');
define('PG_CUSTOMIZE_WP', false);
define('PG_USER_PROFILES', false);
define('PG_PROJECT_TAGS', false);
define('PG_PREVIEW_ONLY_IF_CAN_EDIT', true);
define('PG_USE_WITHOUT_USER', false);

define('PG_NICE_URLS', false);

define('PG_EDIT_SLUG', '');
define('PG_EDIT_URL', get_admin_url(null, 'admin.php?page=pinegrow-projects-editor'));

define('PG_TUNNEL_URL', '');
define('PG_GENERATE_THUMBNAILS', false);
define('PG_THUMB_SECRET', '');
define('PG_DEFAULT_PREVIEW_MODE', 'normal');
define('PG_FAVICON_ICO', 'favicon.ico');

define('PG_UPDATE_V1_CPT', false);
define('PG_IS_BETA', false);
define('PINEGROW_UPDATE_URL', 'https://pinegrow.com/wpplugin/pinegrow_plugin_info.json');

define('PG_UPLOADE_IMAGES_TO_S3', false);

?>