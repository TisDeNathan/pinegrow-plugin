<?php

class Pinegrow_DirectFiles
{

    private $list = array('_pginfo/pine.cone.lib.json');
    public function __construct()
    {
    }

    public function isDirectFile($name) {
        return in_array($name, $this->list);
    }

    public function save($name, $content) {
        if(defined('AS3CF_SETTINGS')) {

        } else {

        }
    }
}