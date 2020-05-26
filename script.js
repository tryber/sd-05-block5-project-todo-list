let buttonAdicionar = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas');

buttonAdicionar.addEventListener('click', function () {
  let li = document.createElement('li');
  li.innerHTML = inputText.value;
  lista.appendChild(li);
});

// (((())))
