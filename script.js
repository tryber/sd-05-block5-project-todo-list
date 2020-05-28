// Feito por Elisangelo
//Declaracao de variaveis
let listaTarefas = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");
let adicionar = document.getElementById("criar-tarefa");
let apagaTudo = document.getElementById("apaga-tudo");
// adicionando eventos nos botoes e campos de texto        
listaTarefas.addEventListener('click', fundoCinza); 
listaTarefas.addEventListener('dblclick', listaRiscada);
apagaTudo.addEventListener('click', excluirLista);
adicionar.addEventListener("click", adicionaLista);
input.addEventListener("keypress", function(e){
     if( e.keyCode === 13 ){
         adicionaLista();
     }
 });
function adicionaLista(){
        let adicionarLista = document.createElement("li");
        adicionarLista.innerHTML = input.value;
        listaTarefas.appendChild(adicionarLista);
        input.value = "";
}
function fundoCinza(event){
    let sombra = event.target;
    sombra.classList.toggle("selected");
}
function listaRiscada(event){
    let risco = event.target;
    risco.classList.toggle("completed");  
}
function excluirLista(){
    listaTarefas.innerHTML = "";
}
