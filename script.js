const orderList = document.querySelector('#lista-tarefas');//ol - toDoList
const botao = document.querySelector('#criar-tarefa');//botao
const lista = document.getElementById('texto-tarefa');//caixa de texto -toDoEntryBox
//let arr = [];

function newToDoItem (itemText, completed){
    //orderList.innerHTML = orderList.innerHTML + '<li>' + lista.value + '</li>';
    //arr = arr + lista.value + '';
    //lista.value='';
    //let orderList = document.ol;
    let toDoItem = document.createElement('li');
    let toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);
    if(completed) {
        toDoItem.classList.add('completed');
    }
    orderList.appendChild(toDoItem);
    toDoItem.addEventListener('dblclick', toggleToDoItemState);
    lista.value='';   
}

function toggleToDoItemState() {
    if (this.classList.contains('completed')){
        this.classList.remove('completed');
        
    } else {
        this.classList.add('completed');
    }
}

function addToDoItem() {
    let itemText = lista.value;
    newToDoItem(itemText, false)
}

botao.addEventListener('click', addToDoItem);



//function alteraCor (){
//    for(let c = 0; c < arr.length; c+=1){
//        if (arr[c].click) {
//            arr[c].style.background = rgb(128,128,128)
//        }
//    }
//
//}
//
//arr.addEventListener('click', alteraCor);

