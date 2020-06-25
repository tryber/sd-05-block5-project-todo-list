let criar_tarefa = document.getElementById('criar-tarefa');
let salvar_tarefas = document.getElementById('salvar-tarefas');
let remover_finalizados = document.getElementById('remover-finalizados');
let apaga_tudo = document.getElementById('apaga-tudo');
let mover_cima = document.getElementById('mover-cima');
let mover_baixo = document.getElementById('mover-baixo')
let input = document.getElementById('texto-tarefa') 
let lista_tarefas = document.getElementById('lista-tarefas') 

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

// clear list

apaga_tudo.addEventListener('click', apagaFunc);

function apagaFunc(){
  let items_lista = document.querySelectorAll('#lista-tarefas li');
  for(let i = 0; i < items_lista.length; i++){
    items_lista[i].remove();
  }
}

let item = document.getElementsByTagName('li');

// change background of selected item

lista_tarefas.addEventListener('click', mudarBg);

function mudarBg(event){
  let target = event.target;
  let selected = event.target;
  selected.style.backgroundColor = 'rgb(128,128,128)';
}

// toggles item state, adding or removing completed class

lista_tarefas.addEventListener('click', toggleItemState);

function toggleItemState(event) {
  let selected = event.target;
  if (selected.classList.contains('completed')) {
    selected.classList.remove('completed');
  } else {
      selected.classList.add('completed');
    }
  }
