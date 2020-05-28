//código cria um elemento e depois limpa a caixa de texto
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
//fim da função ....

//código que adiciona um fundo cinza ao item selecionado
let itemLista = document.getElementById('lista-tarefas');
function selecionarItem(event){
    let  itemSelecionado = event.target;
    itemSelecionado.classList.toggle('selected');
}
itemLista.addEventListener('click',selecionarItem);
//fim da função ....

//Código que adiciona um risco no elemento selecionado
let riscaItemDaLista = document.getElementById('lista-tarefas');
function selecionarItParaRiscar(event){
    let itemSelecionado2 = event.target;
    itemSelecionado2.classList.toggle('completed');
}
riscaItemDaLista.addEventListener('dblclick',selecionarItParaRiscar);
// fim ....

function limparListaTarefa(){
    let pg = document.getElementById('lista-tarefas')
        pg.innerHTML= "";
}

let apagarTudo = document.getElementById('apaga-tudo')
apagarTudo.addEventListener('click',limparListaTarefa)

