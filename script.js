const botaoAdd = document.getElementById ('criar-tarefa');
const botaoClearAll = document.getElementById ('apaga-tudo');
const botaoClear = document.getElementById ('remover-finalizados');
const tarefa = document.getElementById ('texto-tarefa');
const lista = document.getElementsByTagName ('li');
let a = "";

botaoAdd.addEventListener ('click', adicionar);

function adicionar () {
    if (tarefa != " ") {
        lista.innerHTML = tarefa.value;   
        tarefa.value = " ";
    }

    
}