

function criarLista(){
    let li  = document.createElement("li");
    let itemNovo= document.getElementById("texto-tarefa").value;
    document.getElementById("texto-tarefa").value = "";
    let textNode = document.createTextNode(itemNovo);
    li.appendChild(textNode);
    document.getElementById("lista-tarefas").appendChild(li);
}

document.getElementById("criar-tarefa").addEventListener("click", criarLista);

function estaSelecionado(){
    let sel = document.querySelector(".selected");
    if (sel) {
        sel.classList.remove("selected");
    }
}

function selecionarCinza(event){
    estaSelecionado();
    if (event.target.classList.contains("selected")){
        event.target.classList.remove("selected");
    } else {
        event.target.classList.add("selected");
    }

}
document.getElementById("lista-tarefas").addEventListener("click", selecionarCinza);

function riscar(event){
    if (event.target.classList.contains("completed")){
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed");
    }

}
document.getElementById("lista-tarefas").addEventListener("dblclick", riscar);

function apagaTudo(){
    let listacheia = document.getElementById("lista-tarefas");
    while (listacheia.firstChild) {
        listacheia.removeChild(listacheia.firstChild);
    }
    /*if (listacheia.childrenCount > 0){
        for(i = 0; i < listacheia.childrenCount; i += 1){
        listacheia.children[i].remove();
        }
    }*/
}
document.getElementById("apaga-tudo").addEventListener("click", apagaTudo);

function removerfinalizados(){
    while (document.querySelector(".completed")) {
        document.querySelector(".completed").remove();
    }

}
document.getElementById("remover-finalizados").addEventListener("click", removerfinalizados)
