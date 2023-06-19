// Array.prototype.darVuelta=function(){
//     let nuevoArreglo=[]
//     for(let i=0; i<this.length; i++){

//         nuevoArreglo.unshift(this[i]);
//     }

//     return nuevoArreglo;

// }


// let miArreglo=[5,4,3,2,1]

// var expresarArreglo=miArreglo.darVuelta();
// console.log(expresarArreglo);

class LatinoAmerica {
    constructor(pais){
        this.paises=[]
    }
}

LatinoAmerica.prototype.agregarPais=function(pais){



    this.paises.unshift(pais);

}

let continente= new LatinoAmerica()
continente.agregarPais("Brasil")

console.log(continente.paises)