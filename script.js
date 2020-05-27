// Feito por Elisangelo
let listaTarefas = document.getElementById("lista-tarefas");
let input = document.getElementById("texto-tarefa");
let adicionar = document.getElementById("criar-tarefa");
        
adicionar.addEventListener("click", adicionaLista)
        
function adicionaLista(){
             
        let lista = document.createElement("li");
        lista.innerHTML = input.value;
        document.body.appendChild(lista);
        input.value = "";
        }
        