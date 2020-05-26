let addButton = document.querySelector("#criar-tarefa");
let inputText = document.querySelector("#texto-tarefa");
let list = document.querySelector("#lista-tarefas");

function createList(){
    let li = document.createElement('li');
    li.innerHTML = inputText.value;
    list.appendChild(li);
}

addButton.addEventListener('click', createList);