let listaTarefa = document.getElementById("lista-tarefas")
let criarTarefa = document.getElementById("criar-tarefa")
let textoTarefa = document.getElementById("texto-tarefa")
//clicar botão, novo item criado final lista e o texto do input deve ser limpo//

criarTarefa.addEventListener("click", function() {
  let perguntaUsuario = document.createElement("li");
  perguntaUsuario.innerText = textoTarefa.value;
  lista.appendChild(perguntaUsuario);
  text.value = null;
 })
