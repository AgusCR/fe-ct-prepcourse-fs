/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

      var arregloPadre=[]

      for(var prop in objeto){
      arregloPadre.push(crearArreglo(prop,objeto[prop]))
      }


      function crearArreglo(keey,valuee){
         
            var arregloHijo=[keey,valuee]               

         return(arregloHijo)
     }


     return(arregloPadre)

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   string=string.split(""); // ["C", "C","B","A"]
   string.sort(); //["A","B","C","C"]
     var contador
     var ordenYcontar={}
     
         for(var i=0;i<string.length; i++){
                 contador=1
                   for(var j=0; j<string.length;j++){
                     if(string[i]==string[j]&&i<j){
                       contador=contador+1}
                   } 
                     
                   if(ordenYcontar.hasOwnProperty(string[i])==false){
                     ordenYcontar[string[i]]=contador
                   }
                 
               }

              return(ordenYcontar)
               

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var palabraRepetida=string
   var mayuscula=[]
   var minúscula=[]
 string=string.split("");

 for(var i=0; i<string.length;i++){

     if(string[i]==palabraRepetida.charAt(i).toLocaleUpperCase()){

         mayuscula.push(string[i])

     }
     else{
           minúscula.push(string[i]);

     }

 }

 minúscula=minúscula.join("");
 mayuscula=mayuscula.join("");

 return(mayuscula+minúscula)




}
 
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:


   var res = "";
   var str = frase.split(" ");
   for ( var i = 0; i < str.length; i++) {
     res += str[i].split("").reverse().join("");
     if ( i !== str.length - 1) {
       res += " ";
     }
   }
   return res;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:


   
   var num=numero.toString().split("").reverse().join("")


     if(num==numero.toString()){
       return("Es capicua")
     }

     else{
       return("No es capicua")
     }




}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

         var arrayPalabra=[]
         string=string.split("")

         for(var i=0;i<string.length; i++){

                  if(string[i]!="a"&&string[i]!="b"&&string[i]!="c"){
                     arrayPalabra.push(string[i])
                  }

                  else{
                     arrayPalabra.push("");
                  }

         }
         arrayPalabra=arrayPalabra.join("")
         return(arrayPalabra)

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

            
      function ordenarPorLongitud(arr) {
         // Utilizamos el método sort con una función de comparación personalizada
         arr.sort(function(a, b) {
           // Comparamos las longitudes de las palabras
           return a.length - b.length;
         });
       
         return arr;
       }
       

       var palabrasOrdenadas = ordenarPorLongitud(arrayOfStrings);
      return(palabrasOrdenadas);
                  



}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var arrayConjunto=[]
   for(var i=0; i<array1.length; i++ ){

       for(var j=0; j<array2.length; j++){


           if(array1[i]==array2[j]){

               arrayConjunto.push(array1[i])
           }

           else{continue}

         }

     }
 
     return(arrayConjunto.sort())


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
