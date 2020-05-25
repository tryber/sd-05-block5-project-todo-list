const btnCreateTarefa = document.querySelector('#criar-tarefa');
btnCreateTarefa.addEventListener('click', function () {
  document.querySelector('#lista-tarefas').innerHTML += "<li>" + document.getElementById("texto-tarefa").value; + "</li>";
  document.querySelector('input').innerText = '';
})
