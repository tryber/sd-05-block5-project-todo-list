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
}

