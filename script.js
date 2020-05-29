const orderList = document.querySelector('#lista-tarefas');
const botao = document.querySelector('#criar-tarefa');
let arr = [];

function adicionar (){
    let lista = document.getElementById('texto-tarefa');
    orderList.innerHTML = orderList.innerHTML + '<li>' + lista.value + '</li>';
    arr = arr + lista.value + '';
    lista.value='';
}

botao.addEventListener('click', adicionar);