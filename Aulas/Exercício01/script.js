function calcular(){
    const res = document.querySelector('#res')
    const form = document.querySelector('.form');
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    const dados = []
    dados.push({
        peso: peso.value,
        altura: altura.value
    });

    const p = Number(peso.value)
    const a = Number(altura.value)
    let imc = p/(a**2)
    let imca = imc.toFixed(2);
    res.innerHTML = `Seu IMC é ${imc}`;

    if(!p || !a){
        res.innerHTML = 'Peso ou altura inválido.'
    } else if (imc < 18.5){
        res.innerHTML = `Seu IMC é ${imca}, você está abaixo do peso.`;
    } else if (imc >= 18.5 && imc <= 24.9){
        res.innerHTML = `Seu IMC é ${imca}, você está com peso normal.`;
    } else if (imc >= 25 && imc <=29.9){
        res.innerHTML = `Seu IMC é ${imca}, você está com sobrepeso.`;
    } else if (imc >= 30 && imc <= 34.9){
        res.innerHTML = `Seu IMC é ${imca}, você está com obesidade grau 1.`;
    } else if (imc >= 35 && imc <= 39.9){
        res.innerHTML = `Seu IMC é ${imca}, você está com obesidade grau 2.`;
    } else if(imc > 40){
        res.innerHTML = `Seu IMC é ${imca}, você está com obesidade grau 3.`;
    }
}