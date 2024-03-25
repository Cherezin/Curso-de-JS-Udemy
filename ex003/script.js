function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920, 1080)); // vai retornar true
console.log(ePaisagem(1080, 1920)); // vai retornar false

// porem esse return poderia ficar mais simples, pois já estamos
// checando se a largura é maior do que a altura, ja vamos ter um
// retorno se é true ou falso, então o codigo poderia ficar assim:

function ePaisagem(largura, altura){
    return largura > altura
}

//Agora convertendo em arrowFunction:

const ePaisagem = (largura, altura) => largura > altura;