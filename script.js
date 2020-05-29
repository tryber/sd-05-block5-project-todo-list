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
  li.addEventListener("click", changeColor)
}

function changeColor(event){
  let clickedItem = event.target;
  clickedItem.style.backgroundColor = "rgb(128, 128, 128)";
}
