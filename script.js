const botaoAdd = document.getElementById ('criar-tarefa');
const botaoClearAll = document.getElementById ('apaga-tudo');
const botaoClearSel = document.getElementById ('remover-selecionados');
const botaoClearFin = document.getElementById  ('remover-finalizados')
const tarefa = document.getElementById ('texto-tarefa');
const lista = document.getElementById ('lista-tarefas');


botaoAdd.addEventListener ('click', adicionar);
botaoClearAll.addEventListener ('click', resetar);
botaoClearSel.addEventListener ('click', rmvSel);
botaoClearFin.addEventListener ('click', rmvFin);

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

        li.addEventListener ('dblclick', completa);

        function completa () {
            li.classList.toggle('completed');
        }

    }   
}

function resetar () {
    while (lista.lastElementChild) {
        lista.removeChild (lista.lastElementChild);
    }    
}

function rmvSel () {
    const elementosSel = document.getElementsByClassName ('selected')
    for (let i = elementosSel.length -1; i>=0; i-=1) {
        elementosSel[i].remove();
    } 
}

function rmvFin (){
    const finalizado = document.getElementsByClassName ('completed')
    for (let a = finalizado.length -1; a>= 0; a -= 1) {
        finalizado[a].remove();
    }
}
