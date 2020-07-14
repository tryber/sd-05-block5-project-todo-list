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
  textoInput.focus(); //FAZ O CURSOS DE DIGITAR FICAR 'PISCANDO' NO INPUT
  
}

// evento que cria tarefa
botaoCriarTarefa.addEventListener('click', criaItem);

// função que atribui a classe selected para o item clicado
function itemSelecionado(evento) {
  const item = evento.target;
  const todasTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].classList.contains('selected')) {
      todasTarefas[i].classList.remove('selected');
    }
  }
  item.classList.add('selected');
}

// evento que dá a classe selected para o item da lista
listaTarefas.addEventListener('click', itemSelecionado);

// função que risca o item
function riscaItem(evento) {
  const item = evento.target;
  item.classList.toggle('completed');
}

// evento que risca o item
listaTarefas.addEventListener('dblclick', riscaItem);

// função que remove todos os itens da lista
function apagaTudo() {
  const todasTarefas = document.getElementById('lista-tarefas');
  while (todasTarefas.firstChild) {
    todasTarefas.firstChild.remove();
  }
}

// evento que apaga todos os itens da lista
botaoApagaTudo.addEventListener('click', apagaTudo);

// função que remove todos os itens com com classe completed
function removeFinalizados() {
  const todasTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].classList.contains('completed')) {
      todasTarefas[i].remove();
    }
  }
}

// evento que remove todos os itens com com classe completed
botaoRemoverFinalizados.addEventListener('click', removeFinalizados);

// função que remove somente o item selecionado
function removeSelecionado() {
  const todasTarefas = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].classList.contains('selected')) {
      todasTarefas[i].remove();
    }
}
}

// evento que remove somente o item selecionado
botaoRemoverSelecionado.addEventListener('click', removeSelecionado);

// função para salvar as tarefas no local storage
function salvaTarefas() {
  const todasTarefas = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('todas as tarefas', todasTarefas);
}

// evento para salvar as tarefas no local storage
botaoSalvarTarefas.addEventListener('click', salvaTarefas);

// ao carregar a página os itens salvos no local storage aparecerão
window.onload = recuperaTarefas;

// função que recupera os itens salvos no local storage
function recuperaTarefas() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('todas as tarefas');
}
