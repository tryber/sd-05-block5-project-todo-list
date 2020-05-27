botao = document.getElementById("criar-tarefa")
lista = document.getElementById("lista-tarefas")
entradaTexto = document.getElementById("texto-tarefa")
botao.addEventListener('click', function () {
  let novo = document.createElement("li")
  novo.innerText = entradaTexto.value;
  lista.appendChild(novo)
  entradaTexto.value = ""
})

lista.addEventListener('mouseover', function () {
  document.body.style.cursor = 'pointer'
})
lista.addEventListener('click', function (event) {
  let selected = event.target

  alert(selected)
  if (selected.style.backgroundColor == "") {
    selected.style.backgroundColor = "rgb(128,128,128)"
  } else {
    alert("opa")
    selected.style.backgroundColor = "null"
  }

})