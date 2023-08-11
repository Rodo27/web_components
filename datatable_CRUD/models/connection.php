<?php
    class Connection{

        public static function connect(){
            $conecction = new mysqli("localhost", "root", "", "datatable_CRUD");
            $conecction->set_charset('utf8');
            
            return $conecction;
        }
    }