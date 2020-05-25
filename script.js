const btnCreateTarefa = document.querySelector('#criar-tarefa');
btnCreateTarefa.addEventListener('click', function () {
  let textoTarefa = document.getElementById("texto-tarefa").value;
  if (textoTarefa === '') {
    return
  }
  else {
    document.querySelector('#lista-tarefas').innerHTML += "<li>" + textoTarefa + "</li>";
  }
  document.getElementById("texto-tarefa").value = '';
})
