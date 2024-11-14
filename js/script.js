window.onload = () => {
    addTarea();
    removeTarea();
    seleccionarTodo();
    setInterval(reloj, 1000);
    calendar();
}

function addTarea()  {
    let add = document.getElementById("add");
    add.addEventListener("click", () => {
        let form = document.getElementById("form");

        let tarea = document.getElementById("tarea");
        let tareaText = tarea.value;

        let fecha = document.getElementById("fecha");
        let fechaContent = fecha.value;

        if (tareaText.trim() != "" && fechaContent.trim() != "") {
            let divTarea = document.createElement("div");
            divTarea.setAttribute("class", "divTarea");

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            let label = document.createElement("label");
            let contentLabel = document.createTextNode(tareaText + " - " + fechaContent);
            label.appendChild(contentLabel);

            divTarea.appendChild(checkbox);
            divTarea.appendChild(label);
            form.appendChild(divTarea);

            form.reset();
            tarea.focus();
        } else {
            alert("No puedes dejar campos vacios");
            tarea.focus();
        }
    })
} 

function removeTarea() {
    let remove = document.getElementById("remove");
    let inputTarea = document.getElementById("tarea");

    remove.addEventListener("click", () => {
        let form = document.getElementById("form");

        let divsTareas = form.getElementsByTagName("div");
        if (divsTareas.length != 0) {
            for (let i = divsTareas.length - 1; i >= 0; i--) {

                let inputs = divsTareas[i].getElementsByTagName("input");
    
                for (let j = inputs.length - 1; j >= 0; j--) {
                    if (inputs[j].checked) {
                        form.removeChild(divsTareas[i]);
                        inputTarea.focus();
                    }
                }
            }
        } else {
            alert("No hay tareas para eliminar");
            inputTarea.focus();
        }
    })
}

function seleccionarTodo() {
    let seleccionTodas = document.getElementById("seleccionarTodas");
    seleccionTodas.addEventListener("click", () => {
        let form = document.getElementById("form");
        let divsTareas = form.getElementsByClassName("divTarea");
        
        for (let i = 0; i < divsTareas.length; i++) {
            let inputs = divsTareas[i].getElementsByTagName("input");
            for (let j = 0; j < inputs.length; j++) {
                inputs[j].checked = true;
            }
        }
    })
}

function reloj() {
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

    let divReloj = document.getElementById("reloj");
    let contenido = document.createTextNode(horas + ":" + minutos + ":" + segundos);
    let p = divReloj.getElementsByTagName("p");
    
    if (p.length == 0) {
        p = document.createElement("p");
        p.appendChild(contenido);
        divReloj.appendChild(p);
    } else {
        divReloj.firstElementChild.textContent = horas + ":" + minutos + ":" + segundos;
    }
}

function calendar() {
    Calendar.setup({
        inputField: "fecha",   
        ifFormat: "%Y/%m/%d",      
        button: "selector"        
    });
}
