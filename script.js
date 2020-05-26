const buttonAdicionar = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
const buttonLimpaTudo = document.getElementById('apaga-tudo');
const buttonLimpaFeitos = document.getElementById('remover-finalizados');
const buttonPraCima = document.getElementById('mover-cima');
const buttonPraBaixo = document.getElementById('mover-baixo');
const buttonRemoverSelecionado = document.getElementById('remover-selecionado');

buttonAdicionar.addEventListener('click', function () {
  let li = document.createElement('li');

  li.onclick = function () {
    let isSelected = li.getAttribute('style');
    if (!isSelected) {
      li.style.backgroundColor = 'rgb(128,128,128)';
    } else {
      li.removeAttribute('style');
    }
  };
  li.ondblclick = function () {
    let liCompleted = li.getAttribute('class');
    if (!liCompleted) {
      li.setAttribute('class', 'completed');
    } else {
      li.removeAttribute('class', 'completed');
    }
  };
  li.innerHTML = inputText.value;
  lista.appendChild(li);
  inputText.value = '';
});

buttonLimpaTudo.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    lista.removeChild(lis[i]);
  }
});
buttonLimpaFeitos.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    let itemDaLista = lis[index];
    if (itemDaLista.getAttribute('class')) {
      lista.removeChild(lis[index]);
    }
  }
});

buttonRemoverSelecionado.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    let itemDaLista = lis[index];
    if (itemDaLista.getAttribute('style')) {
      lista.removeChild(lis[index]);
    }
  }
});

buttonPraBaixo.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    let itemDaLista = lis[index];
    if (itemDaLista.getAttribute('style')) {
      // let liSelecionado = lis[index];
      let liNextDoSelecionado = lis[index + 1];
      if (liNextDoSelecionado) {
        lista.insertBefore(
          itemDaLista,
          itemDaLista.nextSibling.nextSibling
        );
      } else {
        alert('fim da linha!');
      }
    }
  }
});

buttonPraCima.addEventListener('click', function () {
  let lis = document.querySelectorAll('li');
  for (let index = 0; index < lis.length; index += 1) {
    let itemDaLista = lis[index];
    if (itemDaLista.getAttribute('style')) {
      // let liSelecionado = lis[index];
      let liAnteriorDoSelecionado = lis[index - 1];
      if (liAnteriorDoSelecionado) {       
        lista.insertBefore(itemDaLista,itemDaLista.previousSibling);
      } else {
        alert('fim da linha!');
      }
    }
  }
});

// })

// function separaLiSelecionado() {
//   let lis = document.querySelectorAll('li');
//   for (let index = 0; index < lis.length; index += 1) {
//     let itemDaLista = lis[index];
//     if (itemDaLista.getAttribute('style')) {
//       return lis[index];
//     }
//   }
// }
