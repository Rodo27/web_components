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