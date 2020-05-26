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


//riscar item quando recebe double click, para indicar atividade completada
function itemCrossed(e) {
  const itemDblClick = e.target;
  if (itemDblClick.className !== "completed"){
  itemDblClick.classList.add("completed");
}
else {
  itemDblClick.classList.remove("completed");
}
}
ol.addEventListener("dblclick", itemCrossed);


