<?php

include_once("config.php"); 

header('Access-Control-Allow-Origin:*');

header('Content-Type: application/json');

?>


<?php

$result = $conn->query("SELECT * FROM `maintable` WHERE `statuse` = 'done'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"id":"'  . $rs["task_id"] . '",';
  $outp .= '"name":"'  . $rs["task_name"] . '",';
  $outp .= '"priority":"'   . $rs["priority"]. '",';
  $outp .= '"date":"'   . $rs["date"]        . '",';
  $outp .= '"statuse":"'. $rs["statuse"]     . '"}';
}
$outp ='{"obj":['.$outp.']}';
$conn->close();

echo($outp);

?>
