<?php
    
    require "dbConnection.php";

    $name = $_POST['name'];
    $dob = $_POST['dob'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    //{$name},{$dob},{$phone},{$email},{$password}

    $sql = "select * from `users` WHERE email = '{$email}'";
    $stmt= $pdo->prepare($sql);
    $stmt->execute();    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($result){
        echo'Email is already available';
    }else{
        $sql = "INSERT INTO users (firstname, dob, phone, email, password) VALUES (:name,:dob,:phone,:email,:password)";
        $stmt= $pdo->prepare($sql);
        if($stmt->execute([
            ':name'=>$name,        
            ':dob'=>$dob,        
            ':phone'=>$phone,        
            ':email'=>$email,        
            ':password'=>$password 
        ])){
            echo '200';
        }else{
            echo 'New record is Not created successfully';
        }
    }    
?>