const insereTarefaNaLista = (campoTarefas) => {
  const tagOl = document.querySelector('#lista-tarefas');
  const tagLi = document.createElement('li');

  tagLi.innerHTML = campoTarefas;
  tagOl.appendChild(tagLi);

  document.getElementById('texto-tarefa').value = '';

  adicionarEventoDeSublinhar(tagLi);
  adicionarEventoFundoCinza(tagLi);
};

// adiciona na lista e apagar input adicionado
const criarElementoLista = () => {
  const campoTarefas = document.getElementById('texto-tarefa').value;
  insereTarefaNaLista(campoTarefas);
};

// Funções para os botões
const btn = document.querySelector('#criar-tarefa');
btn.addEventListener('click', criarElementoLista);

