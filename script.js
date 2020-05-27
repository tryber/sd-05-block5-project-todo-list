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
  li.className = "bg"
  document.getElementById("lista-tarefas").appendChild(li);
}
//----------------------------------------------------------------------------
// document.addEventListener("mouseover", passMouse);
// function passMouse(evento){
//   console.log(evento.target)
//   if (evento.target.className === "ponteiro"){
//    evento.target.style.cursor = "pointer";
//   }
// }
//------------------------------------------------------------------------------
document.addEventListener("click", backgorundChange)
function backgorundChange(eventoClique){
  if (eventoClique.target.className === "bg"){
     eventoClique.target.className = "change-Bg";
    }else if (eventoClique.target.className === "change-Bg"){
      eventoClique.target.className = "bg";
    }
}