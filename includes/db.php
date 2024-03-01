<?php

class Pinegrow_DB {

    public static function createOrUpdate() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'pg_files';

        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
		id bigint(20) NOT NULL AUTO_INCREMENT,
		project_id bigint(20) NOT NULL,
		user_id bigint(20) DEFAULT 0,
		changed_time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
		name varchar(255) NOT NULL,
		access_view varchar(10) DEFAULT 'private' NOT NULL,
		file_type varchar(200) NOT NULL,
		content longtext DEFAULT '' NOT NULL,
		view_content longtext DEFAULT '' NOT NULL,
		thumb_url varchar(255) DEFAULT '' NOT NULL,
		thumb_time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
		cached tinyint(1) DEFAULT 0,
		meta mediumtext DEFAULT '' NOT NULL,
		is_media tinyint(1) DEFAULT 0,
		version int DEFAULT 1,
		revision_id bigint(20) DEFAULT 0,
		PRIMARY KEY  (id),
		KEY project_id (project_id),
		KEY user_id (user_id),
		KEY name (name(191)),
		KEY is_media (is_media),
		KEY revision_id (revision_id)
	) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta( $sql );
        update_option('pinegrow_db_version', PG_DB_VERSION);
    }
}