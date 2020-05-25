let criarTarefa = document.getElementById('criar-tarefa');
let listaTarefa = document.getElementById('lista-tarefas');
let inputText = document.getElementById('texto-tarefa');

function criarItem() {
  let li = document.createElement('li');
  listaTarefa.appendChild(li);
  li.innerText = inputText.value;
  inputText.value = "";
}

