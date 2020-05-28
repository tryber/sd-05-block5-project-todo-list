let criar_tarefa = document.getElementById("criar-tarefa");
let salvar_tarefas = document.getElementById("salvar-tarefas");
let remover_finalizados = document.getElementById("remover-finalizados");
let apaga_tudo = document.getElementById("apaga-tudo");
let mover_cima = document.getElementById("mover-cima");
let mover_baixo = document.getElementById("mover-baixo")
let input = document.getElementById("texto-tarefa") 
let lista_tarefas = document.getElementById("lista-tarefas") 

criar_tarefa.addEventListener("click", adicionarItem)

function adicionarItem(event){
  event.preventDefault();
  let item = input.value;
  novoItem(item)
}

function novoItem(item) {
    let novo_item = document.createElement("li");
    let novo_item_texto = document.createTextNode(item)
    novo_item.appendChild(novo_item_texto)
    lista_tarefas.appendChild(novo_item)
}

