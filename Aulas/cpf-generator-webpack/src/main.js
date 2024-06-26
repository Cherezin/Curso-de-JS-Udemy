import GeneratorCPF from './modules/GeneratorCPF';

import './assets/css/style.css';


(function(){
    document.addEventListener('click', e => {
        const el = e.target
        const botão = document.querySelector('.h1')
    
        if(el === botão){
        const gera = new GeneratorCPF()
        const cpfGenerated = document.querySelector('.result')
        cpfGenerated.innerHTML = gera.geraNewCPF()
        }
    })
})()