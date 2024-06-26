import ValidaCPF from "./ValidaCPF";

export default class GeneratorCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatCPF(cpf){
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
            
    }

    geraNewCPF(){
        const cpfWithoutDigit = this.rand()
        const digit1 = ValidaCPF.criaDigito(cpfWithoutDigit)
        const digit2 = ValidaCPF.criaDigito(cpfWithoutDigit + digit1)
        const newCPF = cpfWithoutDigit + digit1 + digit2
        return this.formatCPF(newCPF)
    }
}