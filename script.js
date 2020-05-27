// VARIÁVEIS

const addTarefa = document.getElementById('lista-tarefas');
const inputValue = document.getElementById('texto-tarefa');
const btnAdicionar = document.getElementById('criar-tarefa');
const btnApagar = document.getElementById('apaga-tudo');
const btnRemover = document.getElementById('remover-finalizados');
const btnSalvar = document.getElementById('salvar-tarefas');
const btnMoverCima = document.getElementById('mover-cima');
const btnMoberBaixo = document.getElementById('mover-baixo');
const btnRemoverSelecionado = document.getElementById('remover-selecionado');

// FUNÇÕES

function criaTarefa() {
  const task = document.createElement('li');
  addTarefa.appendChild(task);
  task.innerText = inputValue.value;
  inputValue.value = '';
}

// EVENT LISTENERS

btnAdicionar.addEventListener('click', criaTarefa);

// Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).

// 9 - Ao clicar duas vezes em um item, ele deverá ser riscado,
// indicando que foi completo. Deve ser possível desfazer essa ação
// clicando novamente duas vezes no item.
// Pontos importantes sobre este requisito:
// * Crie uma classe CSS com o nome "completed" e defina a propriedade
// "text-decoration" com o valor "line-through".
// * Utilize a classe CSS "completed" para adicionar o efeito de letra
// tachada (riscada) as tarefas finalizadas.

// BONUS

// 1 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista.
// Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
