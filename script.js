const taskInput = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.getElementById('criar-tarefa');
const botaoRemoverTudo = document.querySelector('#apaga-tudo');
const botaoApagarFinalizados=document.querySelector('#remover-finalizados');

adicionar.addEventListener('click',function(){
  let createEle = document.createElement('li');
  let valor = taskInput.value;  
  createEle.innerHTML=valor;
  lista.appendChild(createEle);
  taskInput.value='';
})

function trocaFundo(){
let target= event.target;
target.style.backgroundColor='rgb(128,128,128)';
}

function riscaItem(){
  let target= event.target;
  if(target.style.textDecoration !== 'line-through'){
    target.style.textDecoration='line-through';
    target.className='completed'
  }
  else{
    target.style.textDecoration='none';
    target.classList.remove('completed');
  }
}

function apagaTudo() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

function apagaFinalizados() {
  let itemsFinalizados=document.querySelectorAll('.completed');
  for(let i=0;i<itemsFinalizados.length;i+=1)
    itemsFinalizados[i].remove();
}

botaoApagarFinalizados.addEventListener('click',apagaFinalizados);
botaoRemoverTudo.addEventListener('click',apagaTudo);
lista.addEventListener('click',trocaFundo);
lista.addEventListener('dblclick',riscaItem);