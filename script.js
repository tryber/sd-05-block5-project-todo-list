// criar elementos, adicionar na lista e apagar input adicionado
function criarElementos() {
  let campoTarefas = document.getElementById('texto-tarefa').value;
  const tagOl = document.querySelector('#lista-tarefas');
  let tagLi = document.createElement('li');
  tagLi.className = 'completed';

  tagLi.innerHTML = campoTarefas;
  tagOl.appendChild(tagLi);

  document.getElementById('texto-tarefa').value = '';

  aplicarCorCinzaAosItens(tagLi);
  sublinhaItem(tagLi);
}

const btn = document.getElementById('criar-tarefa');
btn.addEventListener('click', criarElementos);

// Marcar cor dos itens de cinza
const aplicarCorCinzaAosItens = (tagLi) => {
  tagLi.addEventListener('click', () => {
      tagLi.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}

// Marcar o item com sublinhado
const sublinhaItem = (tagLi) => {
  tagLi.addEventListener('dblclick', function() {
    if(tagLi.style.textDecoration != "line-through") {
      tagLi.style.textDecoration = "line-through";
    } else {
      tagLi.style.textDecoration = "none";
    }
  })
  removerItens(tagLi);
}

// Apagar todos os itens da lista
const apagarTodosOsItens = () => {
  let tagPai = document.getElementById('lista-tarefas');
  while (tagPai.hasChildNodes()) {
    tagPai.removeChild(tagPai.firstChild);
  }
}
const btnApagarTudo = document.getElementById('apaga-tudo');
btnApagarTudo.addEventListener('click', apagarTodosOsItens);

// Remover itens finalizados
const removerItens = (tagLi) => {
  if(tagLi.style.textDecoration == "line-through") {
    tagLi.style.backgroundColor = 'blue';
  }
}
let btnItensFinalizados = document.getElementById('remover-finalizados');
btnItensFinalizados.addEventListener('click', removerItens);





























// function adicionarItem() {
//   let itensLista = document.getElementById('texto-tarefa').value;
//   let novoElemento = document.createElement('li');
//   novoElemento.setAttribute("class", "completed");
//   let lista = document.getElementById('lista-tarefas');
//   novoElemento.textContent = itensLista;
//   lista.appendChild(novoElemento);
//   document.getElementById('texto-tarefa').value = "";
//   addEventos(novoElemento);
// }

// function addEventos(novoElemento) {
//   novoElemento.addEventListener("click", function () {
//     novoElemento.style.backgroundColor = corCinza();
//   });
//   //style text-decoration
//   novoElemento.addEventListener("dblclick", function () {
//     if (novoElemento.style.textDecoration == "line-through") {
//       novoElemento.style.textDecoration = removeSublinhado();
//     } else {
//       novoElemento.style.textDecoration = textoSublinhado();
//     }
//   })

// }

// function corCinza() {
//   return "rgb(128, 128, 128)";
// }

// function textoSublinhado() {
//   return "line-through";
// }

// function apagarTudo(novoElemento) {
//   document.getElementsBy('completed').remove();

// }
