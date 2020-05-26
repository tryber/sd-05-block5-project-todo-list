const listaTarefa = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
const button = document.getElementsByClassName('btn');
var elementList = null;

function createItem() {
  const li = document.createElement('li');
  li.className='white';
  listaTarefa.appendChild(li);
  li.innerText = inputText.value;
  inputText.value = '';
  renderEvents();
}

function renderEvents() {
  elementList = listaTarefa.children;
  for (let index = 0; index < elementList.length; index += 1) {
    elementList[index].addEventListener('click', changeBgColor)
  }
}

function changeBgColor() {
  console.log(event.target.className == 'white');
  if (event.target.className == 'grey') {
    event.target.className = 'white'
  } else { event.target.className = 'grey'}
}

function removeAllElements() {
  while(listaTarefa.firstChild) {
    listaTarefa.removeChild(listaTarefa.firstChild)
  }
}
// cria uma classe no CSS com a cor
// e cria um eventListener no ol, pra 
// adicionar no target a classe selected