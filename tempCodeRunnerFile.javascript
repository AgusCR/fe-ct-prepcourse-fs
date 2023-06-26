// Array.prototype.darVuelta=function(){
//     let nuevoArreglo=[]
// //     for(let i=0; i<this.length; i++){

// //         nuevoArreglo.unshift(this[i]);
// //     }

// //     return nuevoArreglo;

// // }


// // let miArreglo=[5,4,3,2,1]

// // var expresarArreglo=miArreglo.darVuelta();
// // console.log(expresarArreglo);

// class LatinoAmerica {
//     constructor(pais){
//         this.paises=[]
//     }
// }

// LatinoAmerica.prototype.agregarPais=function(pais){



//     this.paises.unshift(pais);

// }

// let continente= new LatinoAmerica()
// continente.agregarPais("Brasil")

// console.log(continente.paises)



// function agregarPropiedad(objeto, propiedad) {
//     // Recibirás un objeto por parámetro.
//     // Debes agregarle una propiedad con el nombre recibido por parámetro.
//     // Esta propiedad será igual al valor `null`.
//     // Retornar el objeto.
//     // Tu código:
 
//           objeto[propiedad]=null
 
//              console.log(objeto)
 
//  }


//  let auto={}

 
//  agregarPropiedad(auto,"color")

// let arreglo=[1,2]

// arreglo.push(3);

// console.log(arreglo)


    // let procuto={

    //         precio:80,
    //         porcentajeDescuento:0.2
    // }


    // procuto.calcular= function(){

    //     var descuento=this.precio*this.porcentajeDescuento;
    //     var precioFinal=this.precio-descuento;

    //             return(precioFinal);
    // }   

    // console.log(procuto)



    // class Persona {

    //         constructor(nombre, edad){

    //                 this.edad=edad
    //                 this.nombre=nombre


    //         }
            
    //         saludar(){
    //             console.log("Hola, mi nombre es "+this.nombre+". Tengo "+this.edad)
    //         }
    //     } 

    //         class Programador extends Persona {
    //             constructor(nombre,edad,añosDeExperiencia){
    //                     super(nombre,edad);

    //                         this.añosDeExperiencia=añosDeExperiencia                                
    //             }


    //             codear(){
    //                 console.log("Soy "+this.nombre+". "+"Codeo desde hace "+this.añosDeExperiencia+ " años.")
    //             }

    //             }
    //         let martin= new Persona(26,"Martin")
    //         let programador=new Programador("Maria",37,4)
           
                 
    //         programador.saludar()



        // var n1 =function(num){

        //     var numRetorno=num+1
            
        //     return numRetorno;
        // }

        // var n2= function(num1){

        //         var numRetorno1=num1+1

        //         return numRetorno1
        // }

        // var suma = function(func1,func2){

        //     var sumaa=func1(1)+func2(2)

        //     return(sumaa)
        // }   

        // var resultado=suma(n1,n2);

        // console.log(resultado)
        


        // var elegirComida= function(comida){

        //         return("Quiero comer "+comida)

        // }

        //     var hablar= function(comida,cb){

        //         console.log(cb(comida))
                
        //     }


        //     hablar("Pizza",elegirComida)


            // EJercicio 1 del homework 8
    // function mayuscula(nombre){
    
    //             nombre.split("")
            
          

    //         console.log(nombre[0].toUpperCase()+nombre.slice(1))

    // }
    // mayuscula("pedro")


            function identificar(arrayed){

                        var arregloConA=[]
                for(var i=0; i<arrayed.length;i++){

                   var nombre=arrayed[i].split("");

                            
                            if(nombre[0]=="a"||nombre[0]=="A"){
                              nombre= nombre.join("");
                                arregloConA.push(nombre);
                                
                            }

                            else {continue}
                     }

                    console.log(arregloConA)
            }

            
            identificar(arregloPrueba=["Aerman","Maro","Manuel"])
        