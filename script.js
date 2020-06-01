let adicionar = document.querySelector("#criar-tarefa");
let ol = document.querySelector("#lista-tarefas");
let lista = document.querySelectorAll(".list");
let apagarLista = document.querySelector("#apaga-tudo");
let apagarFinalizados = document.querySelector("#remover-finalizados");
console.log(lista); 

adicionar.addEventListener("click", addList);
function addList (){
    let input = document.querySelector("#texto-tarefa").value;
    let li = document.createElement("li");
    li.classList.add("list")
    li.innerHTML = input;
    ol.appendChild(li);
    document.querySelector("#texto-tarefa").value="";

    lista = document.querySelectorAll(".list"); 
    console.log(lista);

for(let a = 0; a < lista.length; a++){
    lista[a].addEventListener("click",selected);
    lista[a].addEventListener("dblclick",completo);
    console.log(lista[a])
} 
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
apagarLista.addEventListener("click",apagarLi);
function apagarLi (){
    let lis = document.querySelectorAll(".list")
    for (let c = 0; c < lis.length; c++){
        if (lis){
        ol.removeChild(lis[c]);
        }
    }
}

apagarFinalizados.addEventListener("click",apagarCompleto);
function apagarCompleto (){
    let compl = document.querySelectorAll(".completed")
    for (let d = 0; d < compl.length; d++){
        if (compl){
        ol.removeChild(compl[d]);
        }
    }
}    
