<?php
    require_once('./php/conn.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TO-DO</title>
    <!--<script src="js/calendar.js"></script>
    <script src="js/calendar-en.js"></script>
    <script src="js/calendar-setup.js"></script>
    <link rel="stylesheet" href="css/calendar-blue.css">-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css">
    <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script src="js/scirpJquery.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php 
        if (isset($_SESSION['errors'])) {
            unset($_SESSION['errors']);
        }

        if (isset($_SESSION['filled'])) {
            unset($_SESSION['filled']);
        }
        
        var_dump($_SESSION) 
    ?>
    <div id="main-layout">
        <header id="header1">
            <h1>Your tasks</h1>
        </header>
        <main>
            <form method="get" id="form">
                <input type="text" name="tarea" id="tarea">
                <div id="contenedor-fecha">
                    <input type="text" name="date" id="fecha" readonly="readonly">
                </div>
                <input type="button" name="add" id="add" value="Add task">
                <input type="button" name="remove" id="remove" value="Delete task">
                <input type="button" name="seleccionarTodas" id="seleccionarTodas" value="Select all tasks">
                <a href="profile.php"><input type="button" name="profile" id="profile", value="profile"></a>
                <a href="src/logout.php"><input type="button" name="profile" id="profile", value="logout"></a>
            </form>
        </main>

        <div id="reloj">
            
        </div>

        <img src="img/moon.png" alt="dark" id="cambiarTema">
    </div>
</body>
</html>