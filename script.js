let list = document.getElementById("lista-tarefas")
let create = document.getElementById("criar-tarefa")
let text = document.getElementById("texto-tarefa")
let selecionado = ""

create.addEventListener("click", function() {
 let task = document.createElement("li")
 task.innerText = text.value
 list.appendChild(task)
 text.value = null
})

list.addEventListener("click", function () {
    
    if (selecionado.classList !== undefined) {
        selecionado.classList.remove("selected")
        }
    event.target.classList.add("selected")
    selecionado = event.target
})

list.addEventListener('dblclick', function() {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove("completed")
    } else {
        event.target.classList.add("completed")
    }
})
