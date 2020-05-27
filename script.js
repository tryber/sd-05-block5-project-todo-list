// coded by Lyraah
// variáveis e constantes
const button = document.querySelector('#criar-tarefa');
const caixaDeTexto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('ol');
const clearButton = document.querySelector('#apaga-tudo');
let completed = false;

// funções e métodos
function add() {
  const li = document.createElement('li');
  li.innerText = caixaDeTexto.value;
  lista.appendChild(li);
  caixaDeTexto.value = '';
};

function clear() {
  lista.innerHTML = '';
};

// eventos
button.addEventListener('click',add);

lista.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

lista.addEventListener('dblclick', function(event) {
  if (completed === false) {
    event.target.className = 'completed';
    completed = true;
  } else if (completed === true) {
    event.target.className = 'not-complete';
    completed = false;
  }
});

clearButton.addEventListener('click', clear);