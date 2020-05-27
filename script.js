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

document.addEventListener("click", backgorundChange)
function backgorundChange(eventoClique){
  let nameOfF = eventoClique.target.className;
  nameOfF = nameOfF.split(' ');
  console.log(nameOfF)

  if (nameOfF[0] === "bg" && nameOfF[1] == null){
    eventoClique.target.className = "change-Bg"
    }else if (nameOfF[0] === "change-Bg" && nameOfF[1] == null){
       eventoClique.target.className = "bg"
     }else if(nameOfF[0] === "bg" && nameOfF[1] != null){
      eventoClique.target.className = "change-Bg" +" "+ nameOfF[1]
     }else if(nameOfF[0] === "change-Bg" && nameOfF[1] != null){
      eventoClique.target.className = "bg" +" "+ nameOfF[1]
     }
}
//-----------------------------------------------------------------------------
document.addEventListener("dblclick", textDecorChange)
function textDecorChange(evento){
  let nameOfS = evento.target.className
  nameOfS = nameOfS.split(' ')
  console.log(nameOfS)
  if ((nameOfS[0] == "bg" && nameOfS[1] == null) || (nameOfS[0] == "change-Bg" && nameOfS[1] == null)){
    nameOfS[1] = "completed" 
    Ntext = nameOfS[0] +  " " + nameOfS[1]
    evento.target.className = Ntext ;
    }else if (nameOfS[1]){
      nameOfS[1] = null
      Ntext = nameOfS[0]
      evento.target.className = Ntext
    }
    
}