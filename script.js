const botaoAdd = document.getElementById ('criar-tarefa');
const botaoClearAll = document.getElementById ('apaga-tudo');
const botaoClear = document.getElementById ('remover-finalizados');
const tarefa = document.getElementById ('texto-tarefa');
const lista = document.getElementById ('lista-tarefas');
let a = "";


botaoAdd.addEventListener ('click', adicionar);
botaoClearAll.addEventListener ('click', resetar);

function adicionar () {
    if (tarefa.value !== "") {
        const li = document.createElement ('li');
        li.innerText = tarefa.value;
        lista.appendChild (li);  
        tarefa.value = "";

        li.addEventListener ('click', selecionar);
        
        function selecionar () {
            li.classList.toggle ('selected');
        }

        li.addEventListener ('dblclick', pintar);

        function pintar () {
            li.classList.toggle('feita');
        }

    }   
}

function resetar () {
    while (lista.lastElementChild) {
        lista.removeChild (lista.lastElementChild);
    }    
}

