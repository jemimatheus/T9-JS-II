/*
  Exercício 1
  -----------

  Faça o gato falar!

  1. acessar e guardar o elemento que contém a imagem do gato
  2. criar uma função que execute uma lógica para alterar o texto da div "cat-chat"
  3. adicionar um observador de eventos na imagem do gato que faça com que ao clicar na imagem
  o texto da div "cat-chat" seja alterado.

    
*/

window.addEventListener('DOMContentLoaded',function(){

//seu código vai aqui

//Selecionando a imagem do gato no HTML
const gato = document.querySelector('#cat-pic')

//Declarando uma função que altera o conteudo textual da div com o id " cat-chat"
function falaGato(){
  const miau = document.querySelector('#cat-chat')
//alterando o texto do div miau
  miau.innerText = "Miauuuuuu"
}

gato.addEventListener('click',falaGato)

})