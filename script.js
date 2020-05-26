// ao clicar no botão criar-tarefa, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

let buttonNewTask = document.getElementById("criar-tarefa");
let inputText = document.getElementById("texto-tarefa");
let ol = document.getElementById("lista-tarefas")

function newTask() {
  if (inputText.value.length !== 0) {
    let li = document.createElement("li");
    ol.appendChild(li); // para adicionar elemento li no pai ol
    li.innerText = inputText.value; // para transferir o input texto em novo item de lista
    inputText.value = ""; // para limpar o input text
  }
}
buttonNewTask.addEventListener("click", newTask);


// Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128)
// function changeItemColor (event) {

// }