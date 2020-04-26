const div = document.querySelector('div')
const paragrafo = document.querySelector('p')
const h1 = document.querySelector('h1')


console.log('div', div)
console.log('paragrafo',paragrafo)

div.removeChild(paragrafo)


h1.remove()

function removeItem(){
    const item = document.querySelector('#remove')
    div.removeChild(item)
}