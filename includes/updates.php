<?php
class Pinegrow_Version_Updater {

    public static function update() {
        global $pg_plugin_public;
        //check if projects have pinegrow_flags
        $options = array(
            'post_type' => array($pg_plugin_public->post_type),
            'nopaging' => false,
            'posts_per_page' => 1,
            'post_status' => array('publish', 'private'),
            'tax_query' => array(
                array (
                    'taxonomy' => 'pinegrow_flags',
                    'field' => 'slug',
                    'terms' => array('project', 'lesson'),
                )
            ),
        );

        $projects = get_posts( $options );

        if(empty($projects)) {
            //no projects with these tags found. mark all as project
            $options = array(
                'post_type' => array($pg_plugin_public->post_type),
                'nopaging' => true,
                'post_status' => array('publish', 'private'),
            );

            $projects = get_posts( $options );
            foreach($projects as $project) {
                wp_set_post_terms( $project->ID, array('project'), 'pinegrow_flags', false );
            }
        }
    }
}