window.onload = function () {

 const buttonHTML = document.getElementsByTagName('button')
 const creakeTaskButton = document.getElementsByTagName("criar-tarefa");

 // adding the cursor pointer on the buttons
 const cursosFunction = () => {
  for (let i = 0; i < buttonHTML.length; i += 1) {
   let index = buttonHTML[i];
   index.style.cursor = "pointer";

  }
 }


}
