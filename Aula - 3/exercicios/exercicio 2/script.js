/*
  Exercício 2
  -----------

  Adicionar tarefas

  1. selecione o input e o botão da página.
  2. crie uma função "addTask" que adicione os valores inseridos no input dentro de uma div na página.
  3. adicione um observador de "click" no botão para executar a função addTask.

*/

//seu código vai aqui
//seleciona o input
const input =  document.querySelector('#input')
//seleciona o botao
const botao = document.querySelector('#add')

const listaTarefas = document.querySelector('#lista')

// //para coletar o valor de um input, tem que acessar o .value do atributo
// botao.addEventListener('click', function(){
//   console.log (input.value)
// })

//declarando a função addTarefa

function addTarefa() {
  //criando um li para receber a tarefa do input
  const tarefa = document.createElement('li')
  //atribuindo no innertex do li(tarefa) o valor do input
  tarefa.innerText =  input.value
  //adciona tarefas (li) dentro da lista de tarefas(ul)
  listaTarefas.appendChild(tarefa)
}

//adicionando evento de clicl no botao
botao.addEventListener('click', addTarefa)