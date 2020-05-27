const posBotaoAdicionar = document.getElementById('criar-tarefa');
let conteudoAdicionar = '';
const posTextoTarefa = document.getElementById('texto-tarefa');
const posListaTarefas = document.getElementById('lista-tarefas');
const posApagaTudo = document.getElementById('apaga-tudo');
const posBotaoFinalizados = document.getElementById('remover-finalizados');
const posBotaoSalvar = document.getElementById('salvar-tarefas');

function carregaStorage() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('conteudo');
}

window.onload = carregaStorage;

function salvarTarefas() {
  localStorage.clear()
  const pegaTudo = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('conteudo', pegaTudo);
  /* const pegaTodosLi = document.querySelectorAll('#lista-tarefas li');
  for (let i=0; i<pegaTodosLi.length; i+=1) {
    let classe = pegaTodosLi[i].className;
    let conteudo = pegaTodosLi[i].innerHTML;
    localStorage.setItem(conteudo, classe);
  } */
 }

posBotaoSalvar.addEventListener('click', salvarTarefas);

function adicionaCompleted(event) {
  event.target.classList.toggle('completed');
}

posListaTarefas.addEventListener('dblclick', adicionaCompleted);

function coloreCinza(event) {
  const pegaTodosLi = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < pegaTodosLi.length; i+=1) {
    if (pegaTodosLi[i].classList.contains('coloreCinza')) {
      pegaTodosLi[i].classList.remove('coloreCinza');
    }
  }
  event.target.classList.add('coloreCinza');
}

posListaTarefas.addEventListener('click', coloreCinza);

function apagaTudo() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

posApagaTudo.addEventListener('click', apagaTudo);

function apagaFinalizados() {
  const pegaCompletos = document.querySelectorAll('.completed');
  for (const elemento of pegaCompletos) {
    elemento.remove();
  }
}

posBotaoFinalizados.addEventListener('click', apagaFinalizados);

function adicionaItem() {
  const criaLi = document.createElement('li');
  posListaTarefas.appendChild(criaLi);
  conteudoAdicionar = posTextoTarefa.value;
  posListaTarefas.lastElementChild.innerHTML = conteudoAdicionar;
  posTextoTarefa.value = '';
}

posBotaoAdicionar.addEventListener('click', adicionaItem);
