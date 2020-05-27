let textoTarefa = document.getElementById('texto-tarefa');
let criarTarefas = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let apagaTudo = document.getElementById('apaga-tudo');
let removerFinalizados = document.getElementById('remover-finalizados');

criarTarefas.addEventListener('click', function () {
  let tarefa = document.createElement("li");
  let itemDaLista = listaTarefas.appendChild(tarefa);
  itemDaLista.innerText = textoTarefa.value;
  textoTarefa.value = ""
  itemDaLista.addEventListener('click', function(evento){
    if (evento.target.className.includes('backgroundClick')){
      evento.target.classList.remove('backgroundClick');
    } else {
      let conferirBackground = document.querySelector('.backgroundClick');
      if (conferirBackground){
        conferirBackground.classList.remove('backgroundClick')
      }
      evento.target.classList.add('backgroundClick')
    }
  })
  itemDaLista.addEventListener('dblclick', function(evento){
    if (evento.target.className.includes('completed')){
      evento.target.classList.remove('completed');
    } else {
      evento.target.classList.add('completed')
    }
  })
});

apagaTudo.addEventListener('click', function(){
  listaTarefas.innerHTML = "";
});

removerFinalizados.addEventListener('click', function(){
  let riscados = document.getElementsByClassName('completed')
  for (let i = riscados.length -1; i >= 0; i--){
    riscados[i].remove();
  }
});