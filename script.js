// declarando as variaveis e botoes:
let textoInput = document.getElementById('texto-tarefa');
let botaoCriarTarefa = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let botaoApagaTudo = document.getElementById('apaga-tudo');
let botaoRemoverFinalizados = document.getElementById('remover-finalizados');
let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
let botaoRemoverSelecionado = document.getElementById('remover-selecionado');
let botaoPraCima = document.getElementById('mover-cima');
let botaoPraBaixo = document.getElementById('mover-baixo');

// criando o item li:
// esta função adiciona o itemLi como filho da lista de tarefas
// e limpa a entrada de texto
function criaItem () {
  const itemLi = document.createElement('li');
  itemLi.innerHTML = textoInput.value;
  listaTarefas.appendChild(itemLi);
  textoInput.value = '';
  itemLi.style.cursor = 'pointer'
}
// evento que cria tarefa:
botaoCriarTarefa.addEventListener('click', criaItem);

function atribuiClasseCompleted(evento) {
  let itemClicado = evento.target;
  if (!(itemClicado.classList.contains('completed'))) {
    itemClicado.classList.add('completed');
  }
  else {
    itemClicado.classLint.remove('completed');
  }
}
listaTarefas.addEventListener('dblclick', atribuiClasseCompleted);

function apagaTudo() {
  while (listaTarefas.firstChild) {
    listaTarefas.firstChild.remove();
  }
}
botaoApagaTudo.addEventListener('click', apagaTudo);

let listaItens = document.getElementsByTagName('li');
function fundoCinza (ev) {
  let itemSelecionado = ev.target;
  for (let i = 0; i < listaItens.length; i += 1) {
    if (itemSelecionado === listaItens[i] && !(itemSelecionado.classList.contains("selected"))) {
      listaItens[i].classList.add("selected");
    }
    else if (itemSelecionado === listaItens[i] && itemSelecionado.classList.contains("selected")) {
      listaItens[i].classList.remove("selected");
    }
  }
}
listaTarefas.addEventListener('click', fundoCinza);





/*
// criando função que incluirá uma tarefa à lista:
function criaTarefa() {
  // criando o elemento li:
  const novaTarefa = document.createElement('li');
  // adicionando ao li o texto do input:
  novaTarefa.innerHTML = document.getElementById('texto-tarefa').value;
  // adicionando o elemento li como filho da ol:
  document.getElementById('lista-tarefas').appendChild(novaTarefa);
  // localStorage.setItem('tarefa', )
  // funcionalidade que limpa input após o click:
  document.getElementById('texto-tarefa').value = '';
  // fazendo com que cada novo item da lista receba a maozinha com o passar do mouse:
  novaTarefa.style.cursor = 'pointer';
  // mudando a cor do item da lista ao ser clicado:
  novaTarefa.addEventListener('click', function () {
    novaTarefa.style.backgroundColor = 'rgb(128,128,128)';
  });
  // riscar o item com clique duplo:
  novaTarefa.addEventListener('dblclick', riscaLi);
  function riscaLi () {
    novaTarefa.className = 'completed';
    novaTarefa.style.textDecoration = 'line-through';
  }
  // removendo classe completed e risco no item clicado novamente:
  novaTarefa.addEventListener('dblclick', removeRisco);
  function  removeRisco () {
    if (novaTarefa.className === 'completed') {
      novaTarefa.classList.remove('completed');
      novaTarefa.style.textDecoration = 'none';
      novaTarefa.style.backgroundColor = 'aliceblue';
    }
  }
}
// colocando o evento de adição de tarefa ao botão:
const botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', criaTarefa);
// criando função que remove todos os elementos li:
const botaoApagaTudo = document.getElementById('apaga-tudo');
function apagaTudo() {
  const lista = document.getElementById('lista-tarefas');
  while (lista.firstChild) {
    lista.firstChild.remove();
  }
}
// colocando o evento de apagar todos os elementos ao botão:
botaoApagaTudo.addEventListener('click', apagaTudo);
// função que apague somente os elementos finalizados:
const botaoApagaFinalizados = document.getElementById('remover-finalizados');
function apagaFinalizados() {
  const tarefaFinalizada = document.querySelector('li.completed');
  document.querySelector('li.completed').remove();
  // apagar elemento que já perdeu a classe completed:
  if (document.querySelector('li').className !== 'completed') {
    document.querySelector('li').className = 'completed';
    document.querySelector('li.completed').remove();
    //document.querySelector(null).remove();
  }
}
botaoApagaFinalizados.addEventListener('click', apagaFinalizados);

// COLOCAR UM IF/ELSE DENTRO DA FUNÇÃO QUE APAGA OS ITENS FINALIZADOS E NÃO NA FUNÇÃO QUE REMOVE A CLASSE COMPLETED
*/