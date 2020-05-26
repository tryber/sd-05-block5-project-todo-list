// Marcar o item com sublinhado e atribuir a classe completed
const sublinharElemento = (tagLi) => {
  if (tagLi.style.textDecoration !== 'line-through') {
    tagLi.style.textDecoration = 'line-through';
    tagLi.className = 'completed';
  } else {
    tagLi.style.textDecoration = 'none';
    tagLi.className = null;
  }
};

// Adiciona evento fundo cinza
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

const insereTarefaNaLista = (campoTarefas) => {
  const tagOl = document.querySelector('#lista-tarefas');
  const tagLi = document.createElement('li');

  tagLi.innerHTML = campoTarefas;
  tagOl.appendChild(tagLi);

  document.getElementById('texto-tarefa').value = '';

  adicionarEventoDeSublinhar(tagLi);
  adicionarEventoFundoCinza(tagLi);
};

// criar elementos, adicionar na lista e apagar input adicionado
const criarElementoLista = () => {
  const campoTarefas = document.getElementById('texto-tarefa').value;
  insereTarefaNaLista(campoTarefas);
};

// Apagar todos os itens da lista
const apagarTodosOsItens = () => {
  const tagPai = document.getElementById('lista-tarefas');
  while (tagPai.hasChildNodes()) {
    tagPai.removeChild(tagPai.firstChild);
  }
};

// Remover itens finalizados
const removerItensFinalizados = () => {
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  }
};

for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
  document.querySelectorAll('li')[i].innerHTML = localStorage.getItem('lista');
}
// Salvar tarefas localStorage
const salvarItensLocalStorage = () => {
  const lista = [];
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {
    lista.push(document.querySelectorAll('li')[i].innerHTML);
  }

  const listaEmTexto = JSON.stringify(lista);
  localStorage.setItem('lista', listaEmTexto);
};

const recuperarListaLocalStorage = () => {
  const listaEmTexto = localStorage.getItem('lista');
  if (listaEmTexto != null) {
    const list = JSON.parse(listaEmTexto);
    for (let i = 0; i < list.length; i += 1) {
      insereTarefaNaLista(list[i]);
    }
  }
};

const btn = document.getElementById('criar-tarefa');
btn.addEventListener('click', criarElementoLista);

const btnApagarTudo = document.getElementById('apaga-tudo');
btnApagarTudo.addEventListener('click', apagarTodosOsItens);

const btnItensFinalizados = document.getElementById('remover-finalizados');
btnItensFinalizados.addEventListener('click', removerItensFinalizados);

const btnSalvarTarefas = document.getElementById('salvar-tarefas');
btnSalvarTarefas.addEventListener('click', salvarItensLocalStorage);
recuperarListaLocalStorage();
