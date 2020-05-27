// Feito por Elisangelo
let listaTarefas = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");
let adicionar = document.getElementById("criar-tarefa");
        
adicionar.addEventListener("click", adicionaLista);
listaTarefas.addEventListener('click', fundoCinza); 
listaTarefas.addEventListener('dblclick', listaRiscada)     
function adicionaLista(){
             
        let lista = document.createElement("li");
        lista.innerHTML = input.value;
        listaTarefas.appendChild(lista);
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
