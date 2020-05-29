let addButton = document.getElementsByTagName("button")[0];
addButton.addEventListener("click", addItem);

function addItem(){
  let list = document.getElementsByTagName("ol")[0];
  let textoTarefa = document.getElementById("texto-tarefa");
  let text = textoTarefa.value;
  let li = document.createElement("li");
  li.innerHTML = text;
  list.appendChild(li);
  textoTarefa.value = "";
  li.addEventListener("click", changeColor);
  li.addEventListener("dblclick", doubleClick);
}

function changeColor(event){
  let clickedItem = event.target;
  clickedItem.style.backgroundColor = "rgb(128, 128, 128)";
}

function doubleClick(event){
  let clickedItem = event.target;
  if (clickedItem.style.textDecoration !== "line-through"){
    clickedItem.style.textDecoration = "line-through";
  } else {
    clickedItem.style.textDecoration = "";
  }
}