const botao = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const entradaTexto = document.getElementById('texto-tarefa');
botao.addEventListener('click', function () {
  const novo = document.createElement('li');
  novo.innerText = entradaTexto.value;
  lista.appendChild(novo);
  entradaTexto.value = '';
});
lista.addEventListener('mouseover', function () {
  document.body.style.cursor = 'pointer';
});
lista.addEventListener('click', function (event) {
  const selected = event.target;
  for (let i = 0; i < selected.parentElement.children.length; i += 1) {
    if (selected.parentElement.children[i].className.indexOf('selected') >= 0) {
      selected.parentElement.children[i].className = selected.parentElement.children[i].className.replace('selected', '');
    }
  }
  if (selected.className.indexOf('selected') < 0) {
    selected.className += ' selected';
  }
});
//
lista.addEventListener('dblclick', function (event) {
  const selected = event.target;
  if (selected.className.indexOf(' completed') < 0) {
    selected.className += ' completed';
  } else {
    selected.className = selected.className.replace(' completed', '');
  }
});
const botaoApagaTudo = document.getElementById('apaga-tudo');
botaoApagaTudo.addEventListener('click', function () {
  document.getElementById('lista-tarefas').innerHTML = '';
});
const botaoFinalizados = document.getElementById('remover-finalizados');
botaoFinalizados.addEventListener('click', function () {
  const listFinalizados = document.getElementsByClassName('completed');
  for (let item = listFinalizados.length - 1; item >= 0; item -= 1) {
    const elemento = listFinalizados[item];
    elemento.parentElement.removeChild(elemento);
  }
});
const botaoRemoveSelecionado = document.getElementById('remover-selecionado');
botaoRemoveSelecionado.addEventListener('click', function () {
  const selecionadoRemocao = document.getElementsByClassName('selected');
  for (let item = selecionadoRemocao.length - 1; item >= 0; item -= 1) {
    const elemento = selecionadoRemocao[item];
    elemento.parentElement.removeChild(elemento);
  }
});
const salvaLista = document.getElementById('salvar-tarefas');
salvaLista.addEventListener('click', function () {
  localStorage.setItem('lista', document.getElementsByTagName('ol')[0].innerHTML);
});
if (localStorage.getItem('lista') != null) {
  document.getElementsByTagName('ol')[0].innerHTML = localStorage.getItem('lista');
}
