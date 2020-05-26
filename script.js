let addButton = document.querySelector("#criar-tarefa");
let inputText = document.querySelector("#texto-tarefa");
let list = document.querySelector("#lista-tarefas");
let eraseButton = document.querySelector("#apaga-tudo");

function createList(){
    let li = document.createElement('li');
    li.innerHTML = inputText.value;
    list.appendChild(li);
    inputText.value = '';
}

addButton.addEventListener('click', createList);

function eraseList(){
    list.innerHTML = '';
}

eraseButton.addEventListener('click', eraseList);
