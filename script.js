let toDoList = document.getElementById("lista-tarefas");

function addSelected(element) {
  element.addEventListener("click", function () {
    element.classList.toggle("selected");
  });
  element.addEventListener("dblclick", function () {
    element.classList.toggle("completed");
  });
}

function addItem() {
  let li = document.createElement("li");
  let input = document.getElementById("texto-tarefa");
  const list = document.getElementById("lista-tarefas");
  const text = document.createTextNode(input.value);
  addSelected(li);
  li.appendChild(text);
  list.appendChild(li);
  input.value = "";
}

const button = document.getElementById("criar-tarefa");
button.addEventListener("click", addItem);

function deleteButton() {
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
}

const clearAll = document.getElementById("apaga-tudo");
clearAll.addEventListener("click", deleteButton);

function removeCompleted() {
  document.querySelectorAll("li").forEach(function (i) {
    if (i.classList.contains("completed")) {
      i.remove();
    }
  });
}
const clearCompleted = document.getElementById("remover-finalizados");
clearCompleted.addEventListener("click", removeCompleted);

document
  .querySelector("#salvar-tarefas")
  .addEventListener("click", function () {
    localStorage.setItem(
      "lista",
      document.getElementById("lista-tarefas").innerHTML
    );
  });
if (window.localStorage.getItem("lista")) {
  document.getElementById(
    "lista-tarefas"
  ).innerHTML = window.localStorage.getItem("lista");
  document.querySelectorAll("li").forEach(function (li) {
    addSelected(li);
  });
}

function removeSelected() {
  document.querySelectorAll("li").forEach(function (i) {
    if (i.classList.contains("selected")) {
      i.remove();
    }
  });
}
const clearSelected = document.getElementById("remover-selecionado");
clearSelected.addEventListener("click", removeSelected);

function moveUp() {
  const selected = document.querySelector(".selected");
  return toDoList.insertBefore(selected, selected.previousElementSibling);
}
const up = document.getElementById("mover-cima");
up.onclick = moveUp;

function moveDown() {
  const selected = document.querySelector(".selected");
  return toDoList.insertBefore(
    selected,
    selected.nextElementSibling.nextElementSibling
  );
}
const down = document.getElementById("mover-baixo");
down.onclick = moveDown;
