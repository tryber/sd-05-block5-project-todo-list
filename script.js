const botaoAdd = document.getElementById ('criar-tarefa');
const botaoClearAll = document.getElementById ('apaga-tudo');
const botaoClear = document.getElementById ('remover-finalizados');
const tarefa = document.getElementById ('texto-tarefa');
const lista = document.getElementById ('lista-tarefas');
let a = "";

botaoAdd.addEventListener ('click', adicionar);

function adicionar () {
    if (tarefa.value !== " ") {
        const li = document.createElement ('li');
        li.innerText = tarefa.value;
        lista.appendChild (li);  
        tarefa.value = " ";
    }

    
}