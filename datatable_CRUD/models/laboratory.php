<?php

    include_once 'connection.php';

    class Laboratory {

        var $laboratories;

        public function __construct(){
            $this->access = Connection::connect();
        }

        function show(){
            $sql =  "SELECT * FROM laboratorio";
            $result =  $this->access->query($sql);
            $this->laboratories = $result->fetch_all(MYSQLI_ASSOC);

            return $this->laboratories;
        }

        function edit($id, $nombre){
            $sql =  "UPDATE laboratorio SET nombre = '$nombre' WHERE id = '$id' ";
            $result =  $this->access->query($sql);
        }

        function delete($id){
            $sql =  "DELETE FROM laboratorio WHERE id = '$id' ";
            $result =  $this->access->query($sql);
        }
    }