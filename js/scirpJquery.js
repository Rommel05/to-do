$(document).ready(function () {
    fecha();
    addTarea();
    removeTask();
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