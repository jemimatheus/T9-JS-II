/*
  Exercício 3
  -----------

  Instruções:

  1. crie uma página com um h1 de "Minha lista de Livros"

  2. crie um array com objetos contendo informações dos livros que você mais gosta.
  
  ex.: {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
  }

  4. percorra pelo array de livros e, para cada livro, crie uma div com o título e autor do livro e 
  adicione ele na página.

  Bonus: adicione uma propriedade com a URL da imagem da capa do livro e crie também um img para cada livro

*/

const ArrayLivros = [
{
  capa: './morro.jpg',
  titulo:"O Morro Dos Ventos Uivantes",
  autor:"Brontë,Emily",
  
},
{
  capa:'./giz.jpg',
  titulo:"O Homem De Giz",
  autor:"Tudor,C. J.",
  
},
{
  capa:'./michelle.jpg',
  titulo:'Minha História',
  autor:'Obama,Michelle',
  
},
{
  capa: './nevoa.jpg',
  titulo:'Dama da Nevoa',
  autor:'Sebastian, Laura',
  
}
]




const body = document.querySelector('body')


for (let contador= 0; contador < ArrayLivros.length; contador++){
console.log('Titulo',ArrayLivros[contador].titulo, 'Autor',ArrayLivros[contador].autor)

  const divLivro = document.createElement('div')
  
  const tituloH2 = document.createElement('h2')
  tituloH2.innerText =  `Titulo:${ArrayLivros[contador].titulo}`

  const autorParagrafo = document.createElement('p')
  autorParagrafo.innerText = `Autor : ${ArrayLivros[contador].autor}`

  const capaAutor = document.createElement('img')
  capaAutor.src = `${ArrayLivros[contador].capa}`

  divLivro.appendChild(capaAutor)
  divLivro.appendChild(tituloH2)
  divLivro.appendChild(autorParagrafo)
  


body.appendChild(divLivro)

  console.log(divLivro)
} 
