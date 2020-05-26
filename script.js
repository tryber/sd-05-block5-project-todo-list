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
  document.getElementById("lista-tarefas").appendChild(li);
}