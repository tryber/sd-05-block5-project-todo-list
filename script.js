const taskInput = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.getElementById('criar-tarefa');
const botaoRemoverTudo = document.querySelector('#apaga-tudo');
const botaoApagarFinalizados=document.querySelector('#remover-finalizados');
const botaoSalvar=document.querySelector('#salvar-tarefas');

// let storageContador=1;
// localStorage.setItem('Task'+(storageContador),taskInput.value);
// storageContador+=1;

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
    target.style.textDecoration='line-through rgb(0,0,0) solid';
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
  localStorage.clear();
}

function apagaFinalizados() {
  let itemsFinalizados=document.querySelectorAll('.completed');
  for(let i=0;i<itemsFinalizados.length;i+=1)
    itemsFinalizados[i].remove();
    salvarLista();
}

function salvarLista() {
  localStorage.clear();
  let auxSalvar = document.querySelectorAll('li');
  for(let i = 0; i<auxSalvar.length;i+=1){
    console.log(auxSalvar[i]); 
    localStorage.setItem('Task'+i,auxSalvar[i].innerHTML);  
    localStorage.setItem('Task'+i,auxSalvar[i].className); 
  }
}

function loadLista() {
  for (let i=0;i<localStorage.length;i+=1){
    let cEle = document.createElement('li');
    cEle.innerHTML=localStorage.getItem('Task'+i);
    console.log(cEle);
    lista.appendChild(cEle);
  }
} 

botaoSalvar.addEventListener('click',salvarLista);
botaoApagarFinalizados.addEventListener('click',apagaFinalizados);
botaoRemoverTudo.addEventListener('click',apagaTudo);
lista.addEventListener('click',trocaFundo);
lista.addEventListener('dblclick',riscaItem);
loadLista();