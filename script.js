// Feito por Elisangelo
let listaTarefas = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");
let adicionar = document.getElementById("criar-tarefa");
let apagaTudo = document.getElementById("apaga-tudo");
        

listaTarefas.addEventListener('click', fundoCinza); 
listaTarefas.addEventListener('dblclick', listaRiscada);
apagaTudo.addEventListener('click', excluirLista);
adicionar.addEventListener("click", adicionaLista);


function adicionaLista(){
        let adicionarLista = document.createElement("li");
        adicionarLista.innerHTML = input.value;
        listaTarefas.appendChild(adicionarLista);
        input.value = "";
}
function fundoCinza(){
    let sombra = event.target;
    sombra.classList.toggle("fundoCinza");
}
function listaRiscada(){
    let risco = event.target;
    risco.classList.toggle("completed");  
}
function excluirLista(){
    listaTarefas.innerHTML = " qq";
}
input.addEventListener("keypress", function(e){
   // console.log(e.keyCode)
    if( e.keyCode === 13 ){
        adicionaLista();
    }
});