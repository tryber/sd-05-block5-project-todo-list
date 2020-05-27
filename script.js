let lista = document.getElementById("lista-tarefas");
let textoEntrada = document.getElementById("texto-tarefa");
let btn = document.getElementById("criar-tarefa");

btn.addEventListener("click", function () {;
  let add = document.createElement("li");
  add.innerText = textoEntrada.value;
  lista.appendChild(add);
});
