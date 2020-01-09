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
    $task = $_POST['task'];
    $priority = $_POST['priority'];
    $date = $_POST['date'];

    $sql="INSERT INTO `maintable` (`task_id`, `task_name`, `priority`, `date`) VALUES (NULL, '$task', '$priority', '$date')";

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