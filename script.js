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
