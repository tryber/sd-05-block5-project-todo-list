const criar_tarefa = document.getElementById('criar-tarefa');
const salvar_tarefas = document.getElementById('salvar-tarefas');
const remover_finalizados = document.getElementById('remover-finalizados');
const remover_selecionado = document.getElementById('remover-selecionado');
const apaga_tudo = document.getElementById('apaga-tudo');
const mover_cima = document.getElementById('mover-cima');
const mover_baixo = document.getElementById('mover-baixo')
const input = document.getElementById('texto-tarefa') 
const lista_tarefas = document.getElementById('lista-tarefas') 


// adds items to list

criar_tarefa.addEventListener('click', adicionarItem)

function adicionarItem(event){
  event.preventDefault();
  let novo_item = document.createElement('li');
  let novo_item_texto = document.createTextNode(input.value)
  novo_item.appendChild(novo_item_texto)
  lista_tarefas.appendChild(novo_item)
  input.value = '';
}


// toggles item state

lista_tarefas.addEventListener('dblclick', toggleItemState);

function toggleItemState(event) {
  let selected = event.target;

  // adds 'completed' class
  if (selected.classList.contains('completed')) {
    selected.classList.remove('completed');
  } else {
      selected.classList.add('completed');
    }

  // styles selected item with strikethrough
  if (selected.style.textDecoration == 'line-through') {
    selected.style.removeProperty('text-decoration')
  } else {
    selected.style.textDecoration = 'line-through';
  }
}


// adds id to selected item and remove from previous selected

lista_tarefas.addEventListener('click', selectItem)

function selectItem(event) {
  let selected = event.target;
  let items_lista = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < items_lista.length; i++) {
    items_lista[i].removeAttribute('id')
  }
  selected.setAttribute('id', 'selected')
}


// removes completed tasks

remover_finalizados.addEventListener('click', removesCompleted);

function removesCompleted(){
  let items_lista = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < items_lista.length; i++) {
    if(items_lista[i].classList.contains('completed')){
      items_lista[i].remove();
    }
  }
}


// removes selected item

remover_selecionado.addEventListener('click', removeSelected)

function removeSelected() {
  let selected = document.getElementById('selected');
  console.log(selected)
  selected.remove();
}


// clears list

apaga_tudo.addEventListener('click', clearAll);

function clearAll(){
  let items_lista = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < items_lista.length; i++) {
    items_lista[i].remove();
  }
}


// changes background of selected item

lista_tarefas.addEventListener('click', changeBg);

function changeBg(event){
  let target = event.target;
  let selected = event.target;
  selected.style.backgroundColor = 'rgb(128,128,128)';
}


// moves item up and down

mover_cima.addEventListener('click', moveTop)

function moveTop() {
  let selected = document.getElementById('selected');
  lista_tarefas.insertBefore(selected, selected.previousSibling)
}

mover_baixo.addEventListener('click', moveDown)

function moveDown() {
  // there is not insertAfter function, so we have to do this:
  // 1 > 2 > 3
  // selected = 1; nextElement = 2; then nextElement of 2 = 3
  // insert selected before 3
  // 2 > 1 > 3
  let selected = document.getElementById('selected');
  let nextElement = selected.nextSibling;
  nextElement = nextElement.nextSibling;
  lista_tarefas.insertBefore(selected, nextElement)
}

