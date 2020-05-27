let lista = document.getElementById("lista-tarefas");
let textoEntrada = document.getElementById("texto-tarefa");
let btn = document.getElementById("criar-tarefa");

btn.addEventListener("click", addList);

function addList() {
  let add = document.createElement("li");
  add.innerText = textoEntrada.value;
  lista.appendChild(add);
  textoEntrada.value = "";
  textoEntrada.focus();
}

textoEntrada.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) addList();
});
