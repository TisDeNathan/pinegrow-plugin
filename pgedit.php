<?php
if ( !defined('WPINC') ) {
    die();
}

global $pgBaseUrl;
global $pg_plugin_public;
?>
<!DOCTYPE html>
<html style="margin-top: 0 !important;" <?php language_attributes(); ?>>
<head>
    <base href="<?php echo $pgBaseUrl; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta charset="utf8">
    <meta content="Pinegrow Web Editor" name="generator">
    <?php echo $pg_plugin_public->get_editor_styles(); ?>
</head>
<body class="main-window">
<?php echo $pg_plugin_public->get_editor_scripts(); ?>
</body>
</html>
