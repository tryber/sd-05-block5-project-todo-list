// criar elementos, adicionar na lista e apagar input adicionado
const criarElementos = () => {
  let campoTarefas = document.getElementById('texto-tarefa').value;
  const tagOl = document.querySelector('#lista-tarefas');
  let tagLi = document.createElement('li');

  tagLi.innerHTML = campoTarefas;
  tagOl.appendChild(tagLi);

  document.getElementById('texto-tarefa').value = '';

  aplicarCorCinzaAosItens(tagLi);
  sublinhaItem(tagLi);
}

const btn = document.getElementById('criar-tarefa');
btn.addEventListener('click', criarElementos);

// Marcar cor dos itens de cinza
const aplicarCorCinzaAosItens = (tagLi) => {
  tagLi.addEventListener('click', () => {
      tagLi.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}

// Marcar o item com sublinhado e atribuir a classe completed
const sublinhaItem = (tagLi) => {
  tagLi.addEventListener('dblclick', () => {
    for(let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
      if(tagLi.style.textDecoration != "line-through") {
        tagLi.style.textDecoration = "line-through";
        tagLi.className = 'completed';
      } else {
        tagLi.style.textDecoration = "none";
        tagLi.className = null;
      }
    }
  })
}

// Apagar todos os itens da lista
const apagarTodosOsItens = () => {
  let tagPai = document.getElementById('lista-tarefas');
  while (tagPai.hasChildNodes()) {
    tagPai.removeChild(tagPai.firstChild);
  }
}
const btnApagarTudo = document.getElementById('apaga-tudo');
btnApagarTudo.addEventListener('click', apagarTodosOsItens);

// Remover itens finalizados
const removerItensFinalizados = () => {
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  }
}
let btnItensFinalizados = document.getElementById('remover-finalizados');
btnItensFinalizados.addEventListener('click', removerItensFinalizados);
