
function criarElemento(){
    let recuperaOL = document.getElementById('lista-tarefas');
    let recuperaTexto = document.getElementById('texto-tarefa');
    let recebeTexto = recuperaTexto.value
    let criar = document.createElement('li');
        criar.innerHTML = recebeTexto  
        document.getElementById('lista-tarefas').appendChild(criar);
        recuperaTexto.value = " ";
    }


let itemLista = document.getElementById('lista-tarefas');

function selecionarItem(event){
    let  itemSelecionado = event.target;
    itemSelecionado.classList.toggle('selected');
}

itemLista.addEventListener('click',selecionarItem);

