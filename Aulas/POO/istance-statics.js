class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    //Métodos de instancia
    aumentarVolume(){
        this.volume++
    }
    diminuirVolume(){
        this.volume--
    }

    //Método estático
    static trocaPilha(){
        console.log('Ok, vou trocar')
    }
}

const tv1 = new ControleRemoto('Samsung')
tv1.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(tv1)