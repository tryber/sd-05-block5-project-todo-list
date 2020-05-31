let botao = document.querySelector("#criar-tarefa")
let lista = document.querySelectorAll(".list");

let ol = document.querySelector("#lista-tarefas")
botao.addEventListener("click", addList);

function addList (){
    let input = document.querySelector("#texto-tarefa").value;
    let li = document.createElement("li");
    li.classList.add("list")
    li.innerHTML = input;
    ol.appendChild(li)
    document.querySelector("#texto-tarefa").value="";
}


