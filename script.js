function adicionarItem() {
  let itensLista = document.getElementById('texto-tarefa').value;
  let novoElemento = document.createElement('li');
  novoElemento.setAttribute("class", "completed");
  let lista = document.getElementById('lista-tarefas');
  novoElemento.textContent = itensLista;
  lista.appendChild(novoElemento);
  document.getElementById('texto-tarefa').value = "";
  addEventos(novoElemento);
}

function addEventos(novoElemento) {
  novoElemento.addEventListener("click", function () {
    novoElemento.style.backgroundColor = corCinza();
  });
  //style text-decoration
  novoElemento.addEventListener("dblclick", function () {
    if (novoElemento.style.textDecoration == "line-through") {
      novoElemento.style.textDecoration = removeSublinhado();
    } else {
      novoElemento.style.textDecoration = textoSublinhado();
    }
  })

}

function corCinza() {
  return "rgb(128, 128, 128)";
}

function textoSublinhado() {
  return "line-through";
}

function apagarTudo(novoElemento) {
  document.getElementsBy('completed').remove();

}
