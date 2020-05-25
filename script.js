const btnCreateTarefa = document.querySelector('#criar-tarefa');
btnCreateTarefa.addEventListener('click', function () {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  if (textoTarefa === '') {
    return;
  }
  document.querySelector('#lista-tarefas').innerHTML += '<li>' + textoTarefa + '</li>';
  document.getElementById('texto-tarefa').value = '';
})


// Incluindo pointer ao passar mouse sobre botões e itens da lista.
document.querySelector('button').addEventListener('mouseover',() => {
    document.querySelector('button').style.cursor = 'pointer';
});
document.querySelector('ol').addEventListener('mouseover',() => {
    document.querySelector('ol').style.cursor = 'pointer';
});
