//coded by Lyraah
//variáveis e constantes
const button = document.querySelector("#criar-tarefa");
const caixaDeTexto = document.querySelector("#texto-tarefa");
let lista = document.querySelector("ol");
let listaLi = document.querySelectorAll("li");


//funções e métodos
function add(){
    const li = document.createElement("li");
    li.innerText = caixaDeTexto.value;
    lista.appendChild(li);
    caixaDeTexto.value = "";
}
function mouse(){
    (lista.target).style.cursor = 'pointer';
  };

//eventos
button.addEventListener("click",add);
lista.addEventListener('mouseover', mouse);
