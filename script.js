let botao = document.querySelector("#criar-tarefa");
let ol = document.querySelector("#lista-tarefas");

botao.addEventListener("click", addList);
function addList (){
    let input = document.querySelector("#texto-tarefa").value;
    let li = document.createElement("li");
    li.classList.add("list")
    li.innerHTML = input;
    ol.appendChild(li);
    document.querySelector("#texto-tarefa").value="";
}

let lista = document.querySelectorAll(".list");
console.log(lista); 

for(let a = 0; a < lista.length; a++){
    lista[a].addEventListener("click",selected);
    lista[a].addEventListener("dblclick",completo);
    console.log(lista[a]) 
}
function selected (event){
    console.log(event);
    let secionado = event.target.classList.contains('selected');
    for(let b = 0; b < lista.length; b++){
    lista[b].classList.remove('selected')
    }
    event.target.classList.add('selected');
}
function completo (event){
    let completed = event.target.classList.contains('completed');
    if(!completed){
    event.target.classList.add('completed');
    }
    else{
    event.target.classList.remove('completed');    
    }
}

    
