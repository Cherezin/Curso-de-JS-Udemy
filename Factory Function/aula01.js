function createpeople(name, surname, height, weigth){
    return{
        name,
        surname,
        ask(subject){
            return `${name} está ${subject}`
        },
        height,
        weigth,
        imc(){
            const index = this.weigth / (this.height ** 2)
            return index.toFixed(2)
        }
    }
}

const p1 = createpeople('Alexandre', 'Alves', 1.70, 74)
console.log(p1.imc())
console.log(p1.ask('falando sobre JJk'))
const p2 = createpeople('Fu', 'Lano', 1.89, 85)
console.log(p2.imc())
console.log(p2.ask('falando sobre JJk'))