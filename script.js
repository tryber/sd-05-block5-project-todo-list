
function criarElemento(){
    let recuperaOL = document.getElementById('lista-tarefas');
    let recuperaTexto = document.getElementById('texto-tarefa');
    let recebeTexto = recuperaTexto.value;
    let criar = document.createElement('li');
        criar.innerHTML = recebeTexto;  
      recuperaOL.appendChild(criar);
        recuperaTexto.value = "";
    }
let criarTF = document.getElementById('criar-tarefa');
criarTF.addEventListener('click',criarElemento);


let itemLista = document.getElementById('lista-tarefas');

function selecionarItem(event){
    let  itemSelecionado = event.target;
    itemSelecionado.classList.toggle('selected');
}
itemLista.addEventListener('click',selecionarItem);


let riscaItemDaLista = document.getElementById('lista-tarefas');

function selecionarItParaRiscar(event){
    let itemSelecionado2 = event.target;
    itemSelecionado2.classList.toggle('completed');
}

riscaItemDaLista.addEventListener('dblclick',selecionarItParaRiscar);


let apagarTudo = document.getElementById('apaga-tudo')
let listTarefa = document.getElementById('lista-tarefas')
 
function limparListaTarefa(){
    
   listTarefa.remove()
   console.log(listTarefa)
}

apagarTudo.addEventListener('click',limparListaTarefa)

