const taskInput = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.getElementById('criar-tarefa');
const botaoRemoverTudo = document.querySelector('#apaga-tudo');
const botaoApagarFinalizados=document.querySelector('#remover-finalizados');
const botaoSalvar=document.querySelector('#salvar-tarefas');
const botaoUp=document.querySelector('#mover-cima');
const botaoDown=document.querySelector('#mover-baixo');

let selecionado='';

adicionar.addEventListener('click',function(){
  let createEle = document.createElement('li');
  let valor = taskInput.value;  
  createEle.innerHTML=valor;
  lista.appendChild(createEle);
  taskInput.value='';
})

function trocaFundo(){
  let target= event.target;
  if(target.classList.contains('selected')){
    target.classList.remove('selected');
  }
  else{
    target.classList.add('selected');
  }
}

function riscaItem(){
  let target= event.target;
  if(target.classList.contains('completed')){
    target.classList.remove('completed');
  }
  else{
    target.classList.add('completed');
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
  localStorage.setItem('Lista salva',lista.innerHTML);
}

function loadLista() {
  let valoresLista = localStorage.getItem('Lista salva');
  lista.innerHTML=valoresLista;
} 
function moverCima() {
  selecionado = document.querySelector('.selected');
  if(selecionado.previousSibling != null){
    let anterior = selecionado.previousSibling.innerHTML;
    selecionado.previousSibling.innerHTML=selecionado.innerHTML;
    selecionado.previousSibling.classList.add('selected');
    selecionado.innerHTML =anterior;
    selecionado.classList.remove('selected');
  }
}

botaoUp.addEventListener('click',moverCima);
botaoSalvar.addEventListener('click',salvarLista);
botaoApagarFinalizados.addEventListener('click',apagaFinalizados);
botaoRemoverTudo.addEventListener('click',apagaTudo);
lista.addEventListener('click',trocaFundo);
lista.addEventListener('dblclick',riscaItem);
loadLista();