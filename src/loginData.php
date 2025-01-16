<?php
    require_once('../php/conn.php');
    if (!isset($_SESSION)) {
        session_start();
    }
    
    if ($_POST) {
        $email = isset($_POST['email']) ? trim($_POST['email']) : null;
        $password = isset($_POST['password']) ? $_POST['password'] : null;

        $sql = "SELECT * FROM users where email = '$email'";
        $query = mysqli_query($conn, $sql);

        if ($query && mysqli_num_rows($query) === 1) {
            $user  = mysqli_fetch_assoc($query);

            if (password_verify($password, $user['password'])) {
                /*echo 'true';
                die();*/
                $_SESSION['user'] = $user;

                if (isset($_SESSION['error_login'])) {
                    unset($_SESSION['error_login']);
                }
                header('location:../task.php');
            } else {
                $_SESSION['error_login'] = 'Login error';
                header('location:../login.php');
            }
               
        } else {
            $_SESSION['error_login'] = 'Login error';
            header('location:../login.php');
        }   
    }
?>