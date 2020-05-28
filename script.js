// Feito por Elisangelo
//Declaracao de variaveis globais
let listaTarefas = document.getElementById("lista-tarefas");
let inputTexto = document.getElementById("texto-tarefa");
let botaoAdicionar = document.getElementById("criar-tarefa");
let botaoApagaTudo = document.getElementById("apaga-tudo");
let lista = document.getElementsByTagName("li");

// adicionando eventos ao apertar Enter nos campos de texto      
inputTexto.addEventListener("keypress", function(e){
     if( e.keyCode === 13 ){
         adicionaLista();
     }
 });
//adicionando evento ao click do botao (adicionar)  para chamar a funcao adicionaLista()
botaoAdicionar.addEventListener("click", adicionaLista);
function adicionaLista(){
    var item = document.createElement("li");
        item.innerHTML = inputTexto.value;
        listaTarefas.appendChild(item);
        inputTexto.value = "";
        inputTexto.focus();
}
//adiconando evento a tag (ol) para quando houver um Click, chamar a funcao selecionaTarefa()
listaTarefas.addEventListener('click', selecionaTarefa); 
function selecionaTarefa(event){
    let alvo = event.target;
    for(item = 0; item < lista.length; item +=1){
        if (!(alvo.classList.contains("selected")) && alvo === lista[item]){
            lista[item].classList.add("selected");
        }
        else {
                lista[item].classList.remove("selected");
        }
    }
}
//adiconando evento a tag (ol) para quando houver um duploClick, chamar a funcao riscarTarefa()
listaTarefas.addEventListener('dblclick', riscarTarefa);
function riscarTarefa(event){
    let risco = event.target;
    risco.classList.toggle("completed");  
}
//adiconando evento ao botao (apagaTudo) para quando houver um Click, chamar a funcao exluirTarefa()
botaoApagaTudo.addEventListener('click', excluirLista);
function excluirLista(){
    listaTarefas.innerHTML = "";
}
