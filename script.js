// criar tarefa
// criar elemento li filho do ol
// inserir html do input
// limpar input
console.log("link on?")

 function criarTarefas () {
	let filha = document.createElement("li");
	const tarefa = document.querySelector("#texto-tarefa").value;
	filha.innerHTML = tarefa;
 	document.getElementById("lista-tarefas").appendChild(filha);
	 document.querySelector("#texto-tarefa").value="";
};

document.getElementById("criar-tarefa").addEventListener("click", criarTarefas);



