const tarefa = document.querySelector("#tarefa");
const enviarTarefa = document.querySelector("#enviar-tarefa");
const resultadoTarefa = document.querySelector("#tarefas-resultado");

function criaLi(){
  const li = document.createElement('li');
  return li;
}

tarefa.addEventListener('keypress', function(e) {
  if(e.keypress === 13){
    if (!tarefa.value) return;
      criarElemento(tarefa.value);
  }
});

function limpaInput(){
  tarefa.value = '';
  tarefa.focus();
}

function criaBotaoApagar(li){
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'X';
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criarElemento(textoInput){
  const li = criaLi();
  li.innerText = textoInput;
  resultadoTarefa.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
}

enviarTarefa.addEventListener('click', function (e){
  if (!tarefa.value) return;
  criarElemento(tarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')){
    el.parentElement.remove();
  }

  salvaTarefas();
});

function salvaTarefas(){
  const liTarefas = resultadoTarefa.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas){
    criarElemento(tarefa);
  }
}

adicionaTarefasSalvas();