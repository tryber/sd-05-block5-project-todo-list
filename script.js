// Criar lista ordenada, com classes e interação
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function createListItem() {
  let li = document.createElement('li');
  li.className = "item-lista";
  if (textoTarefa.value === '') {
    alert('Você deve escrever algo!');
    return;
  } else {
    listaTarefas.appendChild(li);
    li.innerHTML = textoTarefa.value;
    textoTarefa.value = '';
    // Clicar para alterar cor do fundo ou riscar
    li.addEventListener("click", function() {
      li.classList.toggle('selected');
    })
    li.addEventListener("dblclick", function() {
      li.classList.toggle('completed');
    })
  }
}
// Botão para apagar itens completos
function deleteCompleted() {
  let completed = document.getElementsByClassName('completed');
  while (completed.length > 0) {
    completed[0].parentNode.removeChild(completed[0]);
  }
}
// Botão para apagar item selecionado
function deleteSelected() {
  let selected = document.getElementsByClassName('selected');
  while (selected.length > 0) {
    selected[0].parentNode.removeChild(selected[0]);
  }
}
// Botão para apagar lista inteira
function deleteListItem() {
  listaTarefas.innerHTML = '';
}
// Salvar no local storage
function saveList() {
  localStorage.clear();
  localStorage.setItem('listaItens', listaTarefas.innerHTML);
}
// Resgatar o local storage
function loadList() {
  let savedList = localStorage.getItem('listaItens');
  listaTarefas.innerHTML = savedList;
}

window.addEventListener('load', loadList());