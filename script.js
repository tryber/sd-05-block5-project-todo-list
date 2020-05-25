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
console.log(textInput)
criarTarefaBut.addEventListener("click", TextAdd)

function TextAdd(){
textInput = document.getElementById("texto-tarefa")
let textOutput = document.createElement("li")
textOutput.className = "teste"
textOutput.innerHTML= textInput.value
textInput.value=""
paiLista.appendChild(textOutput)
console.log(textOutput);
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
let verificadorRisco = true;
function lineThrough(event){
  if (verificadorRisco === true) {
  let target = event.target
  target.classList.add("completed")
  verificadorRisco = false;
} else {
  target = event.target
  target.classList.remove("completed")
  verificadorRisco = true
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