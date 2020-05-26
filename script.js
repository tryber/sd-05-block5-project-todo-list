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
  let itemDblClick = e.target;
  if (!(itemDblClick.classList.contains("completed"))) {
    itemDblClick.classList.add("completed");
  }
  else {
    itemDblClick.classList.remove("completed");
  }
}
ol.addEventListener("dblclick", itemCrossed);


//botão com id="apaga-tudo" que quando clicado deve apagar todos os items da lista.
let buttonDeleteAll = document.getElementById("apaga-tudo");

function deleteAll() {
  ol.innerText = "";
}
buttonDeleteAll.addEventListener("click", deleteAll);

//botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
let buttonDeleteCompleted = document.getElementById("remover-finalizados");
let listCompleted = document.getElementsByClassName("completed");

function deleteCompleted() {
  for (let i = 0; i < listCompleted.length; i += 1) {
    listCompleted[i].remove();
  }
}
buttonDeleteCompleted.addEventListener("click", deleteCompleted);

//function para deixar fundo cinza dos li selecionados
let allLi = document.getElementsByTagName("li");

function getGrey(eventgrey) {
  let liSelected = eventgrey.target;
  for (let i = 0; i < allLi.length; i += 1) {
    if (liSelected === allLi[i] && !(liSelected.classList.contains("selected"))) {
      allLi[i].classList.add("selected");
    }
    else if (liSelected === allLi[i] && liSelected.classList.contains("selected")) {
      allLi[i].classList.remove("selected");
    }
  }
}
ol.addEventListener("click", getGrey);
