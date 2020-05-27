// Feito por Elisangelo
let listaTarefas = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");
let adicionar = document.getElementById("criar-tarefa");
let apagaTudo = document.getElementById("apaga-tudo");
        
adicionar.addEventListener("click", adicionaLista);
listaTarefas.addEventListener('click', fundoCinza); 
listaTarefas.addEventListener('dblclick', listaRiscada);
apagaTudo.addEventListener('click', excluirLista);

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
    risco.classList.toggle("listaRiscada");  
}
function excluirLista(){
    let limparLista = event.target;
    listaTarefas.innerHTML = " ";
}