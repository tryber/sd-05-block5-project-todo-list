// let li = document.createElement("li");
// let myText = document.getElementById("texto-tarefa").Value;
// let textNode = document.createTextNode(myText);
let btn = document.getElementById("criar-tarefa");
btn.addEventListener("click", additenbt);

function additenbt(){
  let li = document.createElement("li");
  let myText = document.getElementById("texto-tarefa");
  let textNode = document.createTextNode(myText.value);
  myText.value = "";

  li.appendChild(textNode);
  // li.className = "ponteiro"
  document.getElementById("lista-tarefas").appendChild(li);
}
//----------------------------------------------------------------------------
let button = document.getElementsByTagName("button");
let lista = document.getElementsByTagName("li");
console.log(button)
document.addEventListener("mouseover", passMouse);
function passMouse(evento){
  console.log(evento.target)
  if (evento.target == "button" ||evento.target == "li"  ){
   evento.target.style.cursor = "pointer";
  }
}