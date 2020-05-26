const sublinharElemento = (tagLi) => {
  if (tagLi.style.textDecoration !== 'line-through') {
    tagLi.style.textDecoration = 'line-through';
    tagLi.className = 'completed';
  } else {
    tagLi.style.textDecoration = 'none';
    tagLi.className = null;
  }
}

const adicionarEventoFundoCinza = (tagLi) => {
  tagLi.addEventListener('click', () => {
    tagLi.style.backgroundColor = 'rgb(128, 128, 128)';
  });
};

const adicionarEventoDeSublinhar = (tagLi) => {
  tagLi.addEventListener('dblclick', () => {
    sublinharElemento(tagLi);
  });
};

// criar elementos, adicionar na lista e apagar input adicionado
const criarElementoLista = () => {
  const campoTarefas = document.getElementById('texto-tarefa').value;
  const tagOl = document.querySelector('#lista-tarefas');
  const tagLi = document.createElement('li');

  tagLi.innerHTML = campoTarefas;
  tagOl.appendChild(tagLi);

  document.getElementById('texto-tarefa').value = '';

  adicionarEventoDeSublinhar(tagLi);
  adicionarEventoFundoCinza(tagLi);
};

const apagarTodosOsItens = () => {
  const tagPai = document.getElementById('lista-tarefas');
  while (tagPai.hasChildNodes()) {
    tagPai.removeChild(tagPai.firstChild);
  };
};

const removerItensFinalizados = () => {
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  };
};

const btn = document.getElementById('criar-tarefa');
btn.addEventListener('click', criarElementoLista);

const btnApagarTudo = document.getElementById('apaga-tudo');
btnApagarTudo.addEventListener('click', apagarTodosOsItens);

let btnItensFinalizados = document.getElementById('remover-finalizados');
btnItensFinalizados.addEventListener('click', removerItensFinalizados);

// Marcar cor dos itens de cinza


// Marcar o item com sublinhado e atribuir a classe completed


// Apagar todos os itens da lista
// Remover itens finalizados
