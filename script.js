function agregarNombre() {
    const nombre = document.getElementById("nombre").value;
    

    


    if (nombre !== "") {
        const listaNombres = document.getElementById("listaNombres");

        // Crear elementos li y button
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteButton = document.createElement("button");

        // Agregar nombre al span
        span.appendChild(document.createTextNode(nombre));

        // Configurar el botón de eliminación
        deleteButton.appendChild(document.createTextNode("Eliminar"));
        deleteButton.onclick = function() {
            // Eliminar el li actual
            listaNombres.removeChild(li);
            // Guardar datos en localStorage después de eliminar
            guardarNombresEnLocalStorage();
        };

        // Agregar elementos al li
        li.appendChild(span);
        li.appendChild(deleteButton);

        // Agregar li a la lista
        listaNombres.appendChild(li);

        document.getElementById("nombre").value = "";

        // Guardar datos en localStorage después de agregar
        guardarNombresEnLocalStorage();
    } else {
        alert("Por favor, ingrese un nombre.");
    }
}


function guardarNombresEnLocalStorage() {
    const listaNombres = document.getElementById("listaNombres").innerHTML;
    localStorage.setItem("listaNombres", listaNombres);
}

function cargarNombresGuardados() {
    const listaNombres = localStorage.getItem("listaNombres");
    if (listaNombres) {
        document.getElementById("listaNombres").innerHTML = listaNombres;
    }

    // Asignar el manejador de eventos a la lista para delegar los clics
    document.getElementById("listaNombres").onclick = function(event) {
        if (event.target.tagName === "BUTTON") {
            // Si el clic fue en un botón, eliminar el elemento li padre
            event.target.parentElement.remove();
            // Guardar datos en localStorage después de eliminar
            guardarNombresEnLocalStorage();
        }
    };
}

// Cargar datos desde localStorage al cargar la página
window.onload = function() {
    cargarNombresGuardados();
};
