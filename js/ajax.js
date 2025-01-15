window.onload = () => {
        
        let xhr = new XMLHttpRequest(); 

        xhr.open('GET', 'php/conn.php', true);

        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
                
            document.getElementById('profile-info').innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}