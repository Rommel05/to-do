window.onload = () => {
    addTarea();
    removeTarea();
}

function addTarea()  {
    let add = document.getElementById("add");
    add.addEventListener("click", () => {
        let form = document.getElementById("form");

        let tarea = document.getElementById("tarea");
        let tareaText = tarea.value;

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
        

    })
} 

function removeTarea() {
    let remove = document.getElementById("remove");

    remove.addEventListener("click", () => {
        let form = document.getElementById("form");

        let divsTareas = form.getElementsByTagName("div");
        for (let i = 0; i < divsTareas.length; i++) {

            let inputs = divsTareas[i].getElementsByTagName("input");
            for (let j = 0; j < inputs.length; j++) {
                if (inputs[j].checked) {
                    form.removeChild(divsTareas[i]);
                }
            }
        }
    })
}


