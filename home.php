<?php
defined('BASEPATH') OR exit ("No direct script allowed");
class homeextends CI_Controller{
    public function index(){
        $this->load->view('index');
    }
}