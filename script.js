
function criarLista(){
let li  = document.createElement("li");
let itemNovo= document.getElementById("texto-tarefa").value;
document.getElementById("texto-tarefa").value = ""
let textNode = document.createTextNode(itemNovo);
li.appendChild(textNode);
document.getElementById("lista-tarefas").appendChild(li);
}
document.getElementById("criar-tarefa").addEventListener("click", criarLista)