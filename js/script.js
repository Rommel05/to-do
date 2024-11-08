window.onload = () => {
    addTarea();
    removeTarea();
    seleccionarTodo();
}

function addTarea()  {
    let add = document.getElementById("add");
    add.addEventListener("click", () => {
        let form = document.getElementById("form");

        let tarea = document.getElementById("tarea");
        let tareaText = tarea.value;

        if (tareaText.trim() != "") {
            let divTarea = document.createElement("div");

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            let label = document.createElement("label");
            let contentLabel = document.createTextNode(tareaText);
            label.appendChild(contentLabel);

            divTarea.appendChild(checkbox);
            divTarea.appendChild(label);
            form.appendChild(divTarea);

            form.reset();
            tarea.focus();
        } else {
            alert("No puedes añadir una tarea vacia");
            tarea.focus();
        }
    })
} 

/*function removeTarea() {
    let remove = document.getElementById("remove");
    let inputTarea = document.getElementById("tarea");

    remove.addEventListener("click", () => {
        let confirmar = confirm("¿Estás seguro que quieres eliminar la tarea?")
        if (confirmar) {
            let form = document.getElementById("form");

            let divsTareas = form.getElementsByTagName("div");
            if (divsTareas.length == 0) {
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
                alert("No hay tareas para eliminar")
            }
        }
    })
}*/

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
        let divsTareas = form.getElementsByTagName("div");
        
        for (let i = 0; i < divsTareas.length; i++) {
            let inputs = divsTareas[i].getElementsByTagName("input");
            for (let j = 0; j < inputs.length; j++) {
                inputs[j].checked = true;
            }
        }
    })
}


