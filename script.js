let textoTarefa = document.getElementById('texto-tarefa');
let criarTarefas = document.getElementById('criar-tarefas');
let listaTarefas = document.getElementById('lista-tarefas');
let apagaTudo = document.getElementById('apaga-tudo');
let removerFinalizados = document.getElementById('remover-finalizados');

criarTarefas.addEventListener('click', function () {
  let tarefa = document.createElement("li");
  listaTarefas.appendChild(tarefa);
  tarefa.innerText = textoTarefa.value;
  textoTarefa.value = ""
});

