let taskInput = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');
let adicionar = document.getElementById('criar-tarefa');

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
  if(target.style.textDecoration !== 'line-through')
  target.style.textDecoration='line-through';
  else{
    target.style.textDecoration='none';
  }
  
  }
lista.addEventListener('click',trocaFundo);
lista.addEventListener('dblclick',riscaItem);