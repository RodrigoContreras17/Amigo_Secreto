// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    // captura el nombre
    let nombre = document.getElementById("amigo").value;

    // validar entrada
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    //actualiza la lista
    amigos.push(nombre);
    
    //limpiar
    document.getElementById("amigo").value = '';

    // actualiza la lista en pantalla
    actualizarLista();
    
}

function actualizarLista(){
    //obtener elemento de la lista
    let lista = document.getElementById("listaAmigos");

    //limpiar lista
    lista.innerHTML= "";

    for (i=0;i<amigos.length;i++){
        lista.innerHTML += "<li>" + amigos[i] + "<li>";
    
    }

}

function sortearAmigo(){
    //elemento donde se muestra el resultado
    let resultado = document.getElementById("resultado")

    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    //generar aletoriedad

    let aleatorio = Math.floor(Math.random()*amigos.length);

    //obtener amigo sorteado

    let sorteado = amigos[aleatorio];

    //mostrar por pantalla resultado

    resultado.innerHTML = "El amigo Sorteado es: "+ sorteado;
}