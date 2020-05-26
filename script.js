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
  if (itemDblClick.className !== "completed") {
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
let listTasks = document.getElementsByTagName("li");

function deleteCompleted() {
  for (let i = 0; i < listTasks.length; i += 1) {
    if (listTasks[i].classList.contains("completed")) {
      listTasks[i].remove();
    }
  }
}
    buttonDeleteCompleted.addEventListener("click", deleteCompleted);
// cuidado, essa function funciona testando mas dà o erro seguinte no cypress: 
//TypeError: Cannot read property 'content' of undefined
//at Context.<anonymous> (http://localhost:37841/__cypress/tests?p=cypress/integration/project.spec.js-127:88:37)

//function para deixar fundo cinza dos li selecionados
let allLi = document.getElementsByTagName("li");

function getGrey(eventgrey) {
  
  for (let i = 0; i < allLi.length; i += 1) {
  if (eventgrey.target == allLi[i]) {
    eventgrey.target.style.backgroundColor = "rgb(128 , 128 , 128)";
  }
}
}

ol.addEventListener("click", getGrey);
// cuidado, essa function tb funciona testando mas dà o erro seguinte no cypress:
// AssertionError: expected '<li>' to have CSS property 'background-color' with the value 'rgb(128, 128, 128)', but the value was 'rgba(0, 0, 0, 0)'
//       + expected - actual

//       -'rgba(0, 0, 0, 0)'
//       +'rgb(128, 128, 128)'
// refazer com essa dica: usar class .selected no css com o bg cinza, e ao clicar no objeto vc adiciona essa classe nele