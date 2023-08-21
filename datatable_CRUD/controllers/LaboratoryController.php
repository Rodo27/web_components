<?php
    include "../models/laboratory.php";

    $laboratory = new Laboratory();
    
    if($_POST['action'] === 'list'){
        
        $laboratory->show();
        $json = array();

        foreach($laboratory->laboratories as $data)
            $json['data'][] = $data;
        
        echo json_encode($json);
    }

    if($_POST['action'] === 'edit'){
        
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];

        $laboratory->edit($id, $nombre);
    }

    if($_POST['action'] === 'delete'){
        
        $id = $_POST['id'];
        $laboratory->delete($id);
    }