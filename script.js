const textoTarefa = document.getElementById("texto-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const criarTarefa = document.getElementById("criar-tarefa");

function adicionarTarefa() {
  let li = document.createElement("li"); // criar um elemento
  listaTarefas.appendChild(li); // adicionar o elemento no local desejado
  li.innerText = textoTarefa.value; // atribuindo o valor de textoTarefa para o item (li)
  li.classList.add('item-tarefa'); // adicionando uma classe para o elemento criado
  textoTarefa.value = ""; // zerando o que o usuário digitou na caixa de texto
}
criarTarefa.addEventListener('click', adicionarTarefa); // passando o valor da caixa de texto pra a lista em um clique
