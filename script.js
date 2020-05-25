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
  verificadorFundo = false
} else {
  let target = event.target
  target.style.backgroundColor = "white"
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
