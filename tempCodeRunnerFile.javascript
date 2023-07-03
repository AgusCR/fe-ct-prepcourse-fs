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


            // function identificar(arrayed){

            //             var arregloConA=[]
            //     for(var i=0; i<arrayed.length;i++){

            //        var nombre=arrayed[i].split("");

                            
            //                 if(nombre[0]=="a"||nombre[0]=="A"){
            //                   nombre= nombre.join("");
            //                     arregloConA.push(nombre);
                                
            //                 }

            //                 else {continue}
            //          }

            //         console.log(arregloConA)
            // }

            
            // identificar(arregloPrueba=["Aerman","Maro","Manuel"])
        

                //De esta forma puedo ver la cantidad de propiedades 

            //  var prueba={

            //   nombre:"Agustin",
            //   edad: 20
            //    }

            //      var arregloPadre=[]

            //       for(var prop in prueba)
            //       arregloPadre.push(crearArreglo(prop,prueba[prop]))
            //       console.log(arregloPadre)
    
            //       function crearArreglo(keyy,valuee){


            //       var arregloHijo=[];

            //       arregloHijo[0]=keyy
            //       arregloHijo[1]=valuee

            //       return(arregloHijo)
            // }


            
            // stringg="asdf gh"
            // stringg=stringg.split(""); // ["C", "C","B","A"]
            // stringg.sort(); //["A","B","C","C"]
            //   var contador
            //   var ordenYcontar={}
              
            //       for(var i=0;i<stringg.length; i++){
            //               contador=1
            //                 for(var j=0; j<stringg.length;j++){
            //                   if(stringg[i]==stringg[j]&&i<j){
            //                     contador=contador+1}
            //                 } 
                              
            //                 if(ordenYcontar.hasOwnProperty(stringg[i])==false){
            //                   ordenYcontar[stringg[i]]=contador
            //                 }
                          
            //             }

            //            console.log(ordenYcontar)
                        
            //            var arregloPadre=[]

            //            for(var prop in objeto){
            //            arregloPadre.push(crearArreglo(prop,objeto[prop]))
            //            }
                 
                 
            //            function crearArreglo(keey,valuee){
                          
            //                  var arregloHijo=[keey,valuee]               
                 
            //               return(arregloHijo)
            //           }
                 
                 
            //           return(arregloPadre)
                 
                 
                 
            //      function numberOfCharacters(string) {
            //         // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
            //         // letras del string, y su valor es la cantidad de veces que se repite en el string.
            //         // Las letras deben estar en orden alfabético.
            //         // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
            //         // Tu código:
                 
            //         string=string.split(""); // ["C", "C","B","A"]
            //         string.sort(); //["A","B","C","C"]
            //           var contador
            //           var ordenYcontar={}
                      
            //               for(var i=0;i<string.length; i++){
            //                       contador=1
            //                         for(var j=0; j<string.length;j++){
            //                           if(string[i]==string[j]&&i<j){
            //                             contador=contador+1}
            //                         } 
                                      
            //                         if(ordenYcontar.hasOwnProperty(string[i])==false){
            //                           ordenYcontar[string[i]]=contador
            //                         }
                                  
            //                     }
                 
            //                    return(ordenYcontar)
            //                   }    
                 



            // var palabra="soyHENRY"
            // var palabraRepetida=palabra
            //   var mayuscula=[]
            //   var minúscula=[]
            // palabra=palabra.split("");

            // for(var i=0; i<palabra.length;i++){

            //     if(palabra[i]==palabraRepetida.charAt(i).toLocaleUpperCase()){

            //         mayuscula.push(palabra[i])

            //     }
            //     else{
            //           minúscula.push(palabra[i]);

            //     }

            // }

            // minúscula=minúscula.join("");
            // mayuscula=mayuscula.join("");

            // console.log(mayuscula+minúscula)


  //           var frase="AGUS tin"
          

  //           var res = "";
  // var str = frase.split(" ");
  // for ( var i = 0; i < str.length; i++) {
  //   res += str[i].split("").reverse().join("");
  //   if ( i !== str.length - 1) {
  //     res += " ";
  //   }
  // }
  // console.log(res);

  
      // var numero =105217
      // var num=numero.toString().split("").reverse().join("")


      //   if(num==numero.toString()){
      //     console.log("Es capicua")
      //   }

      //   else{
      //     console.log("No es capicua")
      //   }


      // function ordenarPorLongitud(arr) {
      //   // Utilizamos el método sort con una función de comparación personalizada
      //   arr.sort(function(a, b) {
      //     // Comparamos las longitudes de las palabras
      //     return a.length - b.length;
      //   });
      
      //   return arr;
      // }
      
      // // Ejemplo de uso
      // var palabras = ["You", "are", "beautiful", "looking"];
      // var palabrasOrdenadas = ordenarPorLongitud(palabras);
      // console.log(palabrasOrdenadas);

          



  // if(array1.length>array2.length)
var arrayConjunto=[]

array1=[1,2,3,4]
array2=[1,5,2,6,7]

        for(var i=0; i<array1.length; i++ ){

            for(var j=0; j<array2.length; j++){


                if(array1[i]==array2[j]){

                    arrayConjunto.push(array1[i])
                }

                else{continue}

              }

          }
      
          console.log(arrayConjunto.sort())
