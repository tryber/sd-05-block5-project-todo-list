let buttonAdicionar = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas');

buttonAdicionar.addEventListener('click', function () {
  let li = document.createElement('li');
  li.onclick = function () {
    li.style.backgroundColor = 'rgb(128,128,128)';
  };
  li.ondblclick = function () {
    let liCompleted = li.getAttribute('class');
    if (!liCompleted) {
      li.setAttribute('class', 'completed');
    } else {
      li.removeAttribute('class', 'completed');
    }
  };
  li.innerHTML = inputText.value;
  lista.appendChild(li);
  inputText.value = '';
});

// (((())))
// document.getElementsByTagName("H1")[0].removeAttribute("class");
