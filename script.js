let lista = document.getElementById("lista-tarefas");
let textoEntrada = document.getElementById("texto-tarefa");
let btn = document.getElementById("criar-tarefa");

btn.addEventListener("click", addList);

function addList() {
  const item = document.createElement("li");
  item.className = "itemlist";
  item.innerText = textoEntrada.value;
  lista.appendChild(item);
  textoEntrada.value = "";
  textoEntrada.focus();
}

textoEntrada.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addList();
  }
});

function selectItem(event) {
  if (event.target.classList.contains("itemlist")) {
    event.target.classList.add("selected");
  }
}
const listaTarefa = document.getElementById("lista-tarefas");
listaTarefa.addEventListener("click", selectItem);

function removeList() {
  listaTarefa.innerHTML = "";
}

const removeTarefa = document.getElementById("apaga-tudo");
removeTarefa.addEventListener("click", removeList);

function completeList(event) {
  if (event.target.classList.contains("itemlist")) {
    event.target.classList.toggle("completed");
  }
}

listaTarefa.addEventListener("dblclick", completeList);
