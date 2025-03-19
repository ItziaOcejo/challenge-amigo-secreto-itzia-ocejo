// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
let asignaciones = {};

function agregarNombre() {
    const nombreInput = document.getElementById("nombre");
    const errorMensaje = document.getElementById("error");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        errorMensaje.textContent = "Por favor, no dejes el campo vacío.";
        return;
    }
    if (lista.includes(nombre)) {
        errorMensaje.textContent = "Ese nombre ya está en la lista.";
        return;
    }

    lista.push(nombre);
    nombreInput.value = "";
    errorMensaje.textContent = "";
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    lista.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigos() {
    if (lista.length < 2) {
        alert("Debe haber al menos 2 participantes para sortear.");
        return;
    }

    let participantes = [...lista];
    let disponibles = [...lista];
    asignaciones = {};

    for (let persona of participantes) {
        let posibles = disponibles.filter((p) => p !== persona);
        if (posibles.length === 0) {
            alert("No se pudo completar el sorteo. Inténtalo nuevamente.");
            return;
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[persona] = elegido;
        disponibles = disponibles.filter((p) => p !== elegido);
    }

    mostrarResultados();
}

function mostrarResultados() {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    Object.entries(asignaciones).forEach(([persona, amigo]) => {
        const li = document.createElement("li");
        li.textContent = `🎉 ${persona} → ${amigo} 🎉`;
        resultadoLista.appendChild(li);
    });
}

function reiniciarLista() {
    lista = [];
    asignaciones = {};
    document.getElementById("error").textContent = "";
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
