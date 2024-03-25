//Retorne um array contendo somente os nomes das pessoas
//Remova a chave nome do objeto.
//

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Wallace', idade: 47},
    { nome: 'Rosana', idade: 32},
]

function id(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

const pessoasNome = pessoas.map(valor => valor.nome)
const pessoasRemoveNome = pessoas.map(obj => ({idade: obj.idade}))
const pessoasId = pessoas.map(obj  => {const newObjt = { ...obj };newObjt.id = id(); return newObjt})
console.log(pessoasId)