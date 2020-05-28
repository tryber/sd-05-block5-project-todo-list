let botao = document.getElementById('criar-tarefa')
let lista = document.getElementById('lista-tarefas')
let entradaTexto = document.getElementById('texto-tarefa')
botao.addEventListener('click', function () {
  let novo = document.createElement('li')
  novo.innerText = entradaTexto.value;
  lista.appendChild(novo)
  entradaTexto.value = ''
})
lista.addEventListener('mouseover', function () {
  document.body.style.cursor = 'pointer'
})
lista.addEventListener('click', function (event) {
  let selected = event.target
  for (let i = 0; i < selected.parentElement.children.length; i++) {
    if (selected.parentElement.children[i].className.indexOf('selected') >= 0) {
      selected.parentElement.children[i].className = selected.parentElement.children[i].className.replace('selected', '')
    }
  }
  if (selected.className.indexOf('selected') < 0) {
    selected.className += ' selected'
  }
})
//
lista.addEventListener('dblclick', function (event) {
  let selected = event.target
  if (selected.className.indexOf(' completed') < 0) {
    selected.className += ' completed'
  } else {
    selected.className = selected.className.replace(' completed', '')
  }
})
let botaoApagaTudo = document.getElementById('apaga-tudo')
botaoApagaTudo.addEventListener('click', function () {
  document.getElementById('lista-tarefas').innerHTML = ''
})
let botaoFinalizados = document.getElementById('remover-finalizados')
botaoFinalizados.addEventListener('click', function () {
  let listFinalizados = document.getElementsByClassName('completed')
  for (let item = listFinalizados.length - 1; item >= 0; item--) {
    let elemento = listFinalizados[item]
    elemento.parentElement.removeChild(elemento)
  }
})
let botaoRemoveSelecionado = document.getElementById('remover-selecionado')
botaoRemoveSelecionado.addEventListener('click', function () {
  let selecionadoRemocao = document.getElementsByClassName('selected')
  for (let item = selecionadoRemocao.length - 1; item >= 0; item--) {
    let elemento = selecionadoRemocao[item]
    elemento.parentElement.removeChild(elemento)
  }
})
let salvaLista = document.getElementById('salvar-tarefas')
salvaLista.addEventListener('click', function () {
  localStorage.setItem('lista', document.getElementsByTagName('ol')[0].innerHTML)
})
if (localStorage.getItem('lista') != null) {
  document.getElementsByTagName('ol')[0].innerHTML = localStorage.getItem('lista')
}
