// Variáveis
const btn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

const insereTarefaNaLista = (campoTarefas) => {
  const li = document.createElement('li');

  li.innerHTML = campoTarefas;
  ol.appendChild(li);

  document.getElementById('texto-tarefa').value = '';
};

// adiciona na lista e apagar input adicionado
const criarElementoLista = () => {
  const campoTarefas = document.getElementById('texto-tarefa').value;
  insereTarefaNaLista(campoTarefas);
};

btn.addEventListener('click', criarElementoLista);

// Apagar lista inteira
const buttonDeleteAll = document.getElementById('apaga-tudo');

function deleteAll() {
  ol.innerText = '';
}
buttonDeleteAll.addEventListener('click', deleteAll);

// Sublinhar item
function itemCrossed(e) {
  const itemDblClick = e.target;
  if (!(itemDblClick.classList.contains('completed'))) {
    itemDblClick.classList.add('completed');
  } else {
    itemDblClick.classList.remove('completed');
  }
}
ol.addEventListener('dblclick', itemCrossed);

// Remover finalizados
const btnDeleteCompleted = document.getElementById('remover-finalizados');
const listCompleted = document.getElementsByClassName('completed');

function deleteCompleted() {
  for (let i = listCompleted.length - 1; i >= 0; i -= 1) {
    listCompleted[i].remove();
  }
}
btnDeleteCompleted.addEventListener('click', deleteCompleted);

// Fundo cinza
const tagLi = document.getElementsByTagName('li');

function getGrey(event) {
  const liSelected = event.target;
  for (let i = 0; i < tagLi.length; i += 1) {
    if (liSelected === tagLi[i] && !(liSelected.classList.contains('selected'))) {
      tagLi[i].classList.add('selected');
    }
    else if (liSelected === tagLi[i] && liSelected.classList.contains('selected')) {
      tagLi[i].classList.remove('selected');
    }
  }
}
ol.addEventListener('click', getGrey);
