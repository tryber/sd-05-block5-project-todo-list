const posBotaoAdicionar = document.getElementById('criar-tarefa');
posBotaoAdicionar.addEventListener("click", adicionaItem);
let conteudoAdicionar = '';
const posTextoTarefa = document.getElementById('texto-tarefa');
let posListaTarefas = document.getElementById('lista-tarefas');


posListaTarefas.addEventListener('click', coloreCinza);
posListaTarefas.addEventListener('dblclick', adicionaCompleted);

function adicionaCompleted(event){
  event.target.classList.toggle('completed');
}

function coloreCinza (event) {
  const pegaTodosLi = document.querySelectorAll('#lista-tarefas li');
  for (i = 0; i<pegaTodosLi.length; i+=1){
    if (pegaTodosLi[i].classList.contains('coloreCinza')) {
      pegaTodosLi[i].classList.remove('coloreCinza');
    }
  }
  event.target.classList.add('coloreCinza');
}

function adicionaItem () {
  const criaLi = document.createElement('li');
  posListaTarefas.appendChild(criaLi);
  conteudoAdicionar = posTextoTarefa.value;
  posListaTarefas.lastElementChild.innerHTML = conteudoAdicionar;
  posTextoTarefa.value = '';
}
