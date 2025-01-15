$(document).ready(function () {
    fecha();
    addTarea();
    removeTask();
    selectAll();
    setInterval(time, 1000);
    changeTheme();
});

function addTarea() {
    $('#add').on('click', function () {
        //let form = $('#form');
        let task = $('#tarea').val();
        let date = $('#fecha').val();

        if (task.trim() != '' && date.trim() != '') {

            let div = $('<div class="divTarea"></div>');

            div.append('<input type="checkbox">' + '<label>'+ task + ' - ' + date + '</label>');

            $('#form').append(div)


            $('#tarea').val('');
            $('#fecha').val('');

            $('#tarea').focus();
        } else {
            alert("You cannot leave empty fields");
            $('#tarea').focus();
        }
    });
}

function fecha() { 
    $( function() {
        $( "#fecha" ).datepicker({
          showOn: "button",
          buttonImage: "img/calendario.png",
          buttonImageOnly: true,
          buttonText: "Select date",
          dateFormat: "yy-mm-dd", 
        });
    } );
}

function removeTask() { 
    $('#remove').on('click', function () {
        if ($('.divTarea').length != 0) {
            $.each($('.divTarea'), function (indexInArray, valueOfElement) { 
                let checkbox = $(valueOfElement).find('input[type=checkbox]');

                if (checkbox.is(':checked')) {
                    $(valueOfElement).remove();
                }
            });
        }
    });
}

function selectAll() {
    $('#seleccionarTodas').on('click', function () {
        if ($('.divTarea').length != 0) {
            $.each($('.divTarea'), function (indexInArray, valueOfElement) { 
                 let checkbox = $(valueOfElement).find('input[type=checkbox]');

                 checkbox.prop('checked','isChecked')
            });
        }
    });
}

function time() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if (horas < 10) {
        horas = "0" + horas;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    if ($('#reloj p').length == 0) {
        $('#reloj').append('<p>'+ horas + ':' + minutos + ':'+ segundos +'</p>')
    } else {
        $('#reloj p').html(horas + ':' + minutos + ':'+ segundos);
    }
}

function changeTheme() {
    $('#cambiarTema').on('click', function () {
        let theme = $('#cambiarTema').attr('src');

        if (theme == 'img/moon.png') {
            $('body').animate({
                backgroundColor: '#555',
            })
            $('#cambiarTema').attr('src', 'img/light.png');
        } else {
            $('body').animate({
                backgroundColor: 'white',
            })
            $('#cambiarTema').attr('src', 'img/moon.png');
        }
    });
}