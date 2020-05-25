let textInput = document.getElementById("texto-tarefa");
let criarTarefaBut = document.getElementById("criar-tarefa");
let apagarTudoBut = document.getElementById("apaga-tudo");
let removerFinalizadosBut = document.getElementById("remover-finalizados");
let salvarTarefasBut = document.getElementById("salvar-tarefas");
let moverBaixoBut = document.getElementById("mover-baixo");
let moverCimaBut = document.getElementById("mover-cima");
let removerSelecBut = document.getElementById("remover-selecionado");
let paiLista = document.getElementById("lista-tarefas")

//CRIAR TAREFA
criarTarefaBut.addEventListener("click", TextAdd)

function TextAdd(){
textInput = document.getElementById("texto-tarefa");
let textOutput = document.createElement("li");
let lista = document.getElementsByTagName("li");
for( i = lista.length ; i <= lista.length ; i++){
textOutput.className = i;
}
textOutput.innerHTML= textInput.value
textInput.value=""
paiLista.appendChild(textOutput)
}

//BACKGROUND CHANGE

paiLista.addEventListener("click", backgroundChange);
let verificadorFundo = true;
function backgroundChange(event){
  if(verificadorFundo === true) {
  let target = event.target
  target.style.backgroundColor = "rgb(128,128,128)"
  target.classList.add("selected")
  verificadorFundo = false
} else {
  let target = event.target
  target.style.backgroundColor = "white"
  target.classList.remove("selected")
  verificadorFundo = true
}
}

//LINETHROUGH

paiLista.addEventListener("dblclick", lineThrough)

function lineThrough(event){
  let target = event.target
  let atual = target.style.textDecoration
  if (atual === "" || atual === "none") {
  target.classList.add("completed");
  target.style.textDecoration = "line-through"
} else {
  target = event.target
  target.classList.remove("completed");
  target.style.textDecoration = "none"
}
}

//APAGA TUDO
apagarTudoBut.addEventListener("click", apagaTudo);
function apagaTudo() {
  let apagarLi = document.getElementsByTagName("li");
  for ( i = (apagarLi.length-1) ; i >= 0 ; i -= 1){
  paiLista.removeChild(apagarLi[i]);
  } 
}

//APAGA FINALIZADOS
removerFinalizadosBut.addEventListener("click", apagaFinaliza);
function apagaFinaliza() {
  let apagar = document.getElementsByClassName("completed");
  for ( i = (apagar.length-1) ; i >= 0 ; i -= 1){
  paiLista.removeChild(apagar[i]);
  } 
}

//APAGAR SELECIONADOS
removerSelecBut.addEventListener("click", apagaSelec);
function apagaSelec() {
  let apagar = document.getElementsByClassName("selected");
  for ( i = (apagar.length-1) ; i >= 0 ; i -= 1){
  paiLista.removeChild(apagar[i]);
  } 
}

//SALVANDO PAG
salvarTarefasBut.addEventListener("click", function(){
window.localStorage.setItem('lista', paiLista.innerHTML);
});

paiLista.innerHTML = localStorage.getItem('lista');

//MOVER PRA CIMA
moverCimaBut.addEventListener("click", moveUp)
function moveUp (){
  //qual sera movido
  let moved = document.getElementsByClassName("selected")[0]
  //guardar o texto dele
  let oldText = moved.innerHTML;
  //encontrar a classe do item anterior
  let classN = parseInt(moved.className)-1;
  let lista = document.getElementsByTagName("li")
  if (classN < 0 || classN > lista.length-1) {
    return;
  }
  //transformar de inteiro para string
  let classStr = ""
  classStr += classN
  //encontrar elemento anterior
  let destin = document.getElementsByClassName(classStr)[0];
  //mudar classe e cor do elemento de destino
  destin.classList.add("selected");
  destin.style.backgroundColor = "rgb(128,128,128)"
  //mudar conteudo, classe e cor do elemento que ficou pra trás
  moved.classList.remove("selected");
  moved.style.backgroundColor = "white"
  moved.innerHTML = destin.innerHTML
  //mudar conteudo do elemento de destino
  destin.innerHTML = oldText
}

moverBaixoBut.addEventListener("click", moveDown)
function moveDown (){
  //qual sera movido
  let moved = document.getElementsByClassName("selected")[0]
  //guardar o texto dele
  let oldText = moved.innerHTML;
  //encontrar a classe do item anterior
  let classN = parseInt(moved.className)+1;
  let lista = document.getElementsByTagName("li")
  if (classN < 0 || classN > lista.length-1) {
    return;
  }
  //transformar de inteiro para string
  let classStr = ""
  classStr += classN
  //encontrar elemento anterior
  let destin = document.getElementsByClassName(classStr)[0];
  //mudar classe e cor do elemento de destino
  destin.classList.add("selected");
  destin.style.backgroundColor = "rgb(128,128,128)"
  //mudar conteudo, classe e cor do elemento que ficou pra trás
  moved.classList.remove("selected");
  moved.style.backgroundColor = "white"
  moved.innerHTML = destin.innerHTML
  //mudar conteudo do elemento de destino
  destin.innerHTML = oldText
}