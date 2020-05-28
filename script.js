const botaoAdd = document.getElementById ('criar-tarefa');
const botaoClearAll = document.getElementById ('apaga-tudo');
const botaoClear = document.getElementById ('remover-finalizados');
const tarefa = document.getElementById ('texto-tarefa');
const lista = document.getElementById ('lista-tarefas');
let a = "";
const selecionado = document.getElementsByClassName ('.selected');
const abc = document.getElementsByClassName ('.feita');

botaoAdd.addEventListener ('click', adicionar);
botaoClearAll.addEventListener ('click', resetar);
botaoClear.addEventListener ('click', rmvSel);
abc.addEventListener ('click', cor);

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

function rmvSel () {
    while (selecionado.length > 0) {
        selecionado[0].parentNode.removeChild(selecionado[0]);
    }
}

function cor (event){
    let ok = document.querySelector ('.feita');
     event.target.style.background = getComputedStyle(ok).background = rgb (128, 128, 128);  
}
