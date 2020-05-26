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

function changeBGColor() {
    let tagLI = document.getElementsByTagName("li");
    for(let i = 0; i < tagLI.length; i += 1) {
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
    } 
  }

  list.addEventListener('click', changeBGColor);