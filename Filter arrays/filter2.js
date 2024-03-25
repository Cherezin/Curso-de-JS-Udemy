//Filtre as pessoas com nome que tem mais de 7 letras:
//Filtre as pessoas com mais de 50 anos:
//Filtre as pessoas que o nome termina com A:

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Wallace', idade: 47},
    { nome: 'Rosana', idade: 32},
]

//R:

const pessoasNome = pessoas.filter( obj => obj.nome.length >= 7)
const pessoasIdade = pessoas.filter(obj => obj.idade > 50)
const pessoasA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasA)