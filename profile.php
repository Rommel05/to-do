<?php
    require_once('./php/conn.php');
    //var_dump($_SESSION);
    $id = $_SESSION['user']['id'];
    echo $id;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="css/style-profile.css">
</head>
<body>
    <div class="main-layout">
        <header class="header">
            <h1>Profile</h1>
        </header>
        <div class="main-content">
            <div class="profile-content">
                <div id="profile-info">
                  <!--<h2>Username</h2>
                    <p>Age: user-age</p>
                    <p>User-description</p>-->
                </div>
            </div>
        </div>
    </div>

    <script>
        let id = "<?php echo $id; ?>";
        console.log(id);

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "src/showProfile.php?id=" + id);
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let contenedor = document.getElementById('profile-info');
                let content = xhr.responseText;
                contenedor.innerHTML = content;
                console.log(content);
            }
        })
        xhr.send();
    </script>
</body>
</html>