let list = document.getElementById("lista-tarefas")
let create = document.getElementById("criar-tarefa")
let text = document.getElementById("texto-tarefa")

create.addEventListener("click", function() {
 let task = document.createElement("li")
 task.innerText = text.value
 list.appendChild(task)
})