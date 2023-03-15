<?php
    
    require "dbConnection.php";

    $username = $_POST['username'];
    $password = $_POST['pwd'];
    setcookie("cookies[one]","$username");
    $sql = "select * from users where email = '{$username}'";
    $stmt= $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($result){
        if($password == $result[0]['password']){
            echo '200';
        }else{
            echo 'Username and Password is not matched';
        }
    }else{
        echo 'No Users Available';
    }
?>