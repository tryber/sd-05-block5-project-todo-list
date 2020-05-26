const btnCreateTarefa = document.querySelector('#criar-tarefa');
btnCreateTarefa.addEventListener('click', function () {
  const textoTarefa = document.getElementById('texto-tarefa').value;
  if (textoTarefa === '') {
    return;
  }
  const li = document.createElement('li');
  li.className = 'item-lista';
  li.innerText = textoTarefa;
  document.querySelector('ol').appendChild(li);
  document.getElementById('texto-tarefa').value = '';
});

const clickItem = document.querySelector('ol');
clickItem.addEventListener('click', function (event) {
  const itemEscolhido = event.target;
  itemEscolhido.classList.toggle('selected');
});

clickItem.addEventListener('dblclick', function () {
  const itemEscolhido = event.target;
  itemEscolhido.classList.toggle('completed');
});

const btnApagaTudo = document.querySelector('#apaga-tudo');
btnApagaTudo.addEventListener('click', function () {
  while (document.querySelectorAll('li').length) {
    const itemRemovido = document.querySelectorAll('li')[0];
    document.querySelector('#lista-tarefas').removeChild(itemRemovido);
  }
});

const btnFinalizados = document.querySelector('#remover-finalizados');
btnFinalizados.addEventListener('click', function () {
  const listaSelecionados = document.querySelectorAll('li');
  for (let i = 0; i < listaSelecionados.length; i += 1) {
    if (listaSelecionados[i].classList.contains('completed')) {
      document.querySelector('#lista-tarefas').removeChild(listaSelecionados[i]);
    }
  }
});

const btnRemoverSelecionados = document.querySelector('#remover-selecionado');
btnRemoverSelecionados.addEventListener('click', function () {
  const listaSelecionados = document.querySelectorAll('li');
  for (let i = 0; i < listaSelecionados.length; i += 1) {
    if (listaSelecionados[i].classList.contains('selected')) {
      document.querySelector('#lista-tarefas').removeChild(listaSelecionados[i]);
    }
  }
});

function moveUp() {
  if (document.querySelectorAll('.selected').length === 1) {
    const listaTarefas = document.querySelectorAll('li');
    if (listaTarefas[0].classList.contains('selected')) {
      alert('Item já está no topo!');
    }
    else {
      for (let i = 1; i < listaTarefas.length; i += 1) {
        if (listaTarefas[i].classList.contains('selected')) {
          const trocaItem = listaTarefas[i - 1].innerHTML;
          listaTarefas[i - 1].innerHTML = listaTarefas[i].innerHTML;
          listaTarefas[i - 1].classList.add('selected');
          listaTarefas[i].innerHTML = trocaItem;
          listaTarefas[i].className = 'item-lista';
        }
      }
    }
  }
  else if (document.querySelectorAll('.selected').length === 0) {
    alert('Não existe item selecionado.');
  }
  else {
    alert('Gentileza escolher apenas um item para mover.');
  }
};

function moveDown() {
  if (document.querySelectorAll('.selected').length === 1) {
    const listaTarefas = document.querySelectorAll('li');
    for (let i = 0; i < listaTarefas.length; i += 1) {
      if (i < (listaTarefas.length - 1) && listaTarefas[i].classList.contains('selected')) {
        const trocaItem = listaTarefas[i + 1].innerHTML;
        listaTarefas[i + 1].innerHTML = listaTarefas[i].innerHTML;
        listaTarefas[i + 1].classList.add('selected');
        listaTarefas[i].innerHTML = trocaItem;
        listaTarefas[i].className = 'item-lista';
        break;
      }
      if (i === (listaTarefas.length - 1)) {
        alert('Item selecionado já é o último!');
      }
    }
  }
  else if (document.querySelectorAll('.selected').length === 0) {
    alert('Não existe item selecionado.');
  }
  else {
    alert('Gentileza escolher apenas um item para mover.');
  }
};


btnSalvarTarefas = document.querySelector('#salvar-tarefas');
btnSalvarTarefas.addEventListener('click', function () {
  
})
