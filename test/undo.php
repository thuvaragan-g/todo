<?php
header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");

header('Content-Type: application/json');
?>

<?php

$_POST =json_decode(file_get_contents('php://input'), true);

include_once("config.php"); 

if(isset($_POST) && !empty($_POST)) 
{
    $id = $_POST['id'];

    $sql="UPDATE `maintable` SET statuse = 'todo' WHERE task_id = $id";

    if(mysqli_query($conn,$sql)){ ?>

        {
            "sucess": "addedd"
         
        }

    <?php } else { echo 'error'.$sql ?>

        {
            "sucess": "sql error"
        }
    
    <?php }} else { ?>

        {
            "sucess": "ony Post work"
        }

    <?php } ?>