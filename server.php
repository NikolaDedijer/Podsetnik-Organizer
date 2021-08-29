<?php
 
$connection = mysqli_connect("localhost", "root", "", "nikola");
 
if (isset($_POST["do_insert"]))
{
    $a = $_POST["fname"];
    $b = $_POST["tname"];
    $c = $_POST["dname"];
    $d = $_POST["gname"];
    $e = $_POST["cell5"];
     
    $sql = "INSERT INTO johnny(cell1, cell2,cell3,cell4,cell5) VALUES ('$a', '$b','$c','$d','$e')";
    mysqli_query($connection, $sql);
 
    echo "Record has been inserted successfully.";
    exit();
}


if (isset($_POST["do_delete"]))
{
    $rowid = $_POST["myTable"];
 
    $sql = "DELETE FROM johnny WHERE cell1 = '" . $rowid . "'";
    mysqli_query($connection, $sql);
 
    //echo "Record has been deleted";
    exit();
}

if (isset($_POST["get_data"]))
{
    $kolona = $_POST["row"];
 
    $sql = "SELECT * FROM johnny WHERE johnnyNumber = '" . $kolona . "'";
    $result = mysqli_query($connection, $sql);
    $row = mysqli_fetch_object($result);
 
    echo json_encode($row);
    exit();
}

if (isset($_POST["do_update"]))
{
    $a = $_POST["cell1"];
    $b = $_POST["cell2"];
    $c = $_POST["cell3"];
    $d = $_POST["cell4"];
    $e = $_POST["cell5"];
    $kolona = $_POST["row"];
 
    $sql = "UPDATE `johnny` SET `cell1` = '$a', `cell2` = '$b',`cell3` = '$c',`cell4` = '$d',`cell5` = '$e' WHERE johnnyNumber = '" . $kolona . "'";
    mysqli_query($connection, $sql);
 
    echo "Record has been updated successfully.";
    exit();
}
?>