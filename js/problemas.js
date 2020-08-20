/* 
Programa una función que cuente el 
número de caracteres de una cadena 
de texto, pe. miFuncion("Hola Mundo") 
devolverá 10.
*/

const contarCaracteres = (texto="") =>{
    try{

        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en texto o está vacío"
        
        return texto.trim().length;

    }catch(error){
        return error;
    }
     
}

/* 
Programa una función que te devuelva 
el texto recortado según el número de 
caracteres indicados, pe. 

miFuncion("Hola Mundo", 4) devolverá "Hola".

 */

const extraerCaracterPorNumero = (texto = "", numero = "") =>{
    try{

        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en texto o está vacío"
        if (typeof numero != "number" || numero % 1 != 0) throw "Error en el tipo de dato ingresado en numero o está vacío"
        

        return texto.trim().slice(0,numero)

    }catch(error){
        return error;
    }
}

/* 
Programa una función que dada una String 
te devuelva un Array de textos separados 
por cierto caracter, pe. 

miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal'].
*/

const separarTexto = (texto, separador) =>{
    try{

        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en texto o está vacío"
        if (typeof separador != "string") throw "Error en el tipo de dato ingresado en separador o está vacío"

        return texto.trim().split(separador)

    }catch(error){
        return error;
    } 
}

/* 

Programa una función que repita un texto X veces, pe.

miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.

*/

const reptirTexto = (texto = "", numero = "") =>{
    
    try{

        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en texto o está vacío"
        if (typeof numero != "number" || numero % 1 != 0) throw "Error en el tipo de dato ingresado en numero o está vacío"
        
        for (let index = 0; index < numero; index++) {
            console.log(texto + " " + (index + 1))    
        }
        
        return;

    }catch(error){
        return console.log(error);
    }
}


/* 
5) Programa una función que invierta las palabras 
de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH".
*/

const invertirPalabra = texto =>{
    let resultado="";

    try {

        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en texto o está vacío"

        texto = texto.split("").reverse();

        texto.forEach(element => {
            resultado += element;
        });

        return resultado;

    } catch (error) {
        
    }
}

/* 
6) Programa una función para contar el número de 
veces que se repite una palabra en un texto largo, pe. 

miFuncion("hola mundo adios mundo", "mundo") 
devolverá 2. 
*/

const encontarPalabra = (texto, palabra) =>{
    let reg = new RegExp(palabra,"g")

    let match;
    let count = 0;
    
    try{

        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en texto o está vacío"
        if (typeof palabra != "string" || !palabra || !palabra.trim()) throw "Error en el tipo de dato ingresado en palabra o está vacío"

        do {

            match = reg.test(texto);
            if (match){
                count++;
            }

        } while (match);

        return count;

    }catch(error){

        return error;

    }
}



/* 
7) Programa una función que valide si una palabra o 
frase dada, es un palíndromo (que se lee igual en un 
sentido que en otro), pe. 

mifuncion("Salas") 
devolverá true.
 */

const verificarPolimero = palabra =>{
    try {
        if (typeof palabra != "string" || !palabra || !palabra.trim()) throw "Error en el tipo de dato ingresado en palabra o está vacío"
        
        palabra = palabra.toLowerCase()
        let array = palabra;
        
        palabra = palabra.split("").reverse();
        array = array.split("")

        for (let index = 0; index < array.length; index++) {
            if(array[index] != palabra[index]) return false;
        }
        
        return true;

    } catch (error) {
        return error;
    }
}


/* 
8) Programa una función que elimine cierto patrón de 
caracteres de un texto dado, pe. 

miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá  "1, 2, 3, 4 y 5.
 */

const eliminarPatron = (texto, patron) =>{
    try {

        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en texto o está vacío"
        if (typeof patron != "string" || !patron || !patron.trim()) throw "Error en el tipo de dato ingresado en patron o está vacío"

        let textoFinal = "";
        array = texto.split(patron)

        for (let index = 0; index < array.length; index++) {
            if(array[index] != false) textoFinal += array[index];
        }

        return textoFinal;
        
    } catch (error) {
        return error;
    }
}


/* 
9) Programa una función que obtenga un numero aleatorio 
entre 501 y 600. */

var random = (max, min) => {

    try {
        if (typeof max != "number" || max % 1 != 0) throw "Error en el tipo de dato ingresado en maximo o está vacío"
        if (typeof min != "number" || min % 1 != 0) throw "Error en el tipo de dato ingresado en minimo o está vacío"
        

        return Math.round(Math.random() * (max - min) + 500);

    } catch (error) {
        return error;
    }
}


/* 10) Programa una función que reciba un número y evalúe 
si es capicúa o no (que se lee igual en un sentido que en otro), pe. 

miFuncion(2002) 
devolverá true. */

const verificarCapicua = (numero) =>{
    let array = numero;

    try {

        if (typeof numero != "number" || numero % 1 != 0) throw "Error en el tipo de dato ingresado en minimo o está vacío"
        
        numero = numero.toString().split("");
        array = array.toString().split("").reverse();
        
        console.log(array)
        console.log(numero)


        for (let index = 0; index < array.length; index++) {
            if(array[index] != numero[index]) return false;
        }
        
        return true; 

    } catch (error) {
        return error;
    }
}

/* 11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto 
de todos los números enteros positivos desde 1 hasta n), pe. 

miFuncion(5) 
devolverá 120. */

const factorial = numero =>{
    try {

        let resultado = 1;
        if (typeof numero != "number" || numero % 1 != 0) throw "Error en el tipo de dato ingresado en minimo o está vacío"
        
        for (let index = 1; index <= numero; index++) {
            resultado = resultado * index;
        }

        return resultado;

    } catch (error) {
        return error;
    }
}


/* 
12) Programa una función que determine si un número 
es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. 

miFuncion(7) devolverá true.
 */

const numeroPrimo = (numero) =>{
    try {

        let resultado = 1;
        if (typeof numero != "number" || numero % 1 != 0) throw "Error en el tipo de dato ingresado en minimo o está vacío"
        
        for (let index = 2; index < numero; index++) {
            if (numero % index == 0 ){
                return false;
            };
        }

        return true;

    } catch (error) {
        return error;
    }

}

/* 
13) Programa una función que determine si un número es par o impar, pe. 
miFuncion(29) 
devolverá Impar.
 */

const numeroParInpar = numero =>{
    try {
        if (typeof numero != "number") throw "Error en el tipo de dato ingresado en minimo o está vacío"
        
        resultado = numero % 2 == 0 ? true : false;

        return resultado;

    } catch (error) {
        return error;
    }
}

/* 
14) Programa una función para convertir grados Celsius a Fahrenheit 
y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 */


 const convertirCelsiusFahrenheit = (numero, grados) =>{
    try {
        if (typeof numero != "number") throw "Error en el tipo de dato ingresado en minimo o está vacío"
        if (typeof grados != "string" || !grados || !grados.trim()) throw "Error en el tipo de dato ingresado en patron o está vacío"
        
        grados = grados.toUpperCase();

        switch (grados) {
            case "F":
                return (numero-32)*5/9;
                break;
            
            case "C":
                return (numero * 9/5)+32;
                break;
            default:
                throw "La letra ingresada no es válida"
                break;
        }

    } catch (error) {
        return error;
    }
 }

/*  

15) Programa una función para convertir números de base 
binaria a decimal y viceversa, pe. 

miFuncion(100,2) devolverá 4 base 10. 

*/

const binarioDecimal = (binario, decimal) => {
    try {
        if (typeof binario != "number" || binario % 1 != 0) throw "Error en el tipo de dato ingresado en binario o está vacío"
        if (typeof decimal != "number" || decimal % 1 != 0) throw "Error en el tipo de dato ingresado en decimal o está vacío"
        
        return parseInt(binario, 2) +" base "+decimal.toString(2);;

    } catch (error) {
        return error;
    }
}


/*  
16) Programa una función que devuelva el monto final después 
de aplicar un descuento a una cantidad dada, pe. 

miFuncion(1000, 20) devolverá 800.

 */ 

 const descuento = (numero, descuento) => {
    try {

        if (typeof numero != "number") throw "Error en el tipo de dato ingresado en numero o está vacío"
        if (typeof descuento != "number") throw "Error en el tipo de dato ingresado en descuento o está vacío"
        
        return numero - (numero *(descuento*0.01));

    } catch (error) {
        return error;
    }
 }

/*

17) Programa una función que dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy, pe. 

miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020).

 */

 const cuantosAñosHanPasado = (anio, mes, dia) =>{
    try {

        if (typeof anio != "number" || anio % 1 != 0) throw "Error en el tipo de dato ingresado en numero o está vacío"
        if (typeof mes != "number" || mes % 1 != 0) throw "Error en el tipo de dato ingresado en numero o está vacío"
        if (typeof dia != "number" || dia % 1 != 0) throw "Error en el tipo de dato ingresado en numero o está vacío"

        if (mes > 12 || mes <= 0) throw "El mes ingresado no puede ser mayor a 12 o menor o igual a 0"
        if (dia > 31 || dia <= 0) throw "El mes ingresado no puede ser mayor a 31 o menor o igual a 0"
        if (anio <= 0) throw "El año ingresado no puede menor o igual a 0"

        fecha = new Date(anio,mes-1,dia);

        return Math.floor(((((((Date.now() - fecha.getTime())/1000)/60)/60)/24)/365))
    } catch (error) {
        return error;
    }
 }

/*  
18) Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, pe. 

miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */

const buscarVocalConsonante = texto =>{
    let consonantes = 0, 
        vocales = 0,
        existe = 0;
        regVocales = /[aeiouáéíóúäëïöüàèìòù]/g , 
        regConsonante = /[^aeiouáéíóúäëïöüàèìòù ]/g;

    try {
        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en patron o está vacío";
        
        do{
            existe = regConsonante.test(texto.toLocaleLowerCase()) ? 1 : 0;
            consonantes += existe;
        }while(existe);

        do {
            
            existe = regVocales.test(texto.toLocaleLowerCase()) ? 1 : 0;
            vocales += existe;

        } while (existe);

        return `Vocales: ${vocales}, Consonantes: ${consonantes}`;

    } catch (error) {
        return error;
    }
}

/* 
19) Programa una función que valide que un texto 
sea un nombre válido, pe. 

miFuncion("Jonathan MirCha") 
devolverá verdadero.
*/

const validarNombre = texto => {
    let reg = /[^ña-záéíóúäëïöüâêîôûàèìòù\s]/i;

    try {
        if (!texto || !texto.trim()) throw "Error: El tipo de dato ingresado es incorrecto o está vacío";
        if(reg.test(texto.toLocaleLowerCase())) return true;

        return false;;

    } catch (error) {
        return error;
    }
}

/* 

20) Programa una función que valide que un texto 
sea un email válido, pe. 

miFuncion("jonmircha@gmail.com") devolverá verdadero. 

*/

const validarEmail = texto =>{
    let reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        resultado;
    try {
        if (typeof texto != "string" || !texto || !texto.trim()) throw "Error en el tipo de dato ingresado en patron o está vacío";
        
        resultado = reg.test(texto.toLocaleLowerCase()) ? "Verdadero":"Falso";

        return resultado;

    } catch (error) {
        return error;
    }
}

/* 
21) Programa una función que dado un array numérico devuelve 
otro array con los números elevados al cuadrado, pe. 

mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */

const elevarAlCuadrado = array =>{
    let resultado =[];
    try {

        if (typeof array !== "object" || array.length === 0) throw "Error en el tipo de dato ingresado en numero o está vacío"

        array.forEach(element => {
            if (typeof element != "number") throw "Error: El tipo de dato dentro del array debe ser numerico"
        });

        array.forEach(element => {
            resultado.push(Math.pow(element,2))
        });

        return resultado;

    } catch (error) {
        return error;
    }

}


/* 
22) Programa una función que dado un array devuelva el 
número mas alto y el más bajo de dicho array, pe. 

miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */

const numeroMasBajoYMasAlto = array =>{
    let numeroMasBajo = 0,
        numeroMasAlto = 0;

    try {
        console.log(typeof array)
        if (typeof array !== "object" || array.length === 0) throw "Error en el tipo de dato ingresado en numero o está vacío"

        array.forEach(element => {
            if (typeof element != "number") throw "Error: El tipo de dato dentro del array debe ser numerico"
        });

        array.forEach(element => {
            if (element > numeroMasAlto) numeroMasAlto = element;
            if (element < numeroMasBajo) numeroMasBajo = element;
        });

        return [numeroMasAlto,numeroMasBajo];

    } catch (error) {
        return error;
    }
}

/* 
23) Programa una función que dado un array de 
números devuelva un objeto con 2 arreglos en el primero 
almacena los números pares y en el segundo los impares, pe. 

miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

const numerosParesImpares = array => {
    let numerosPares = [],
        numerosImpares = [];

    try {
        console.log(typeof array)
        if (typeof array !== "object" || array.length === 0) throw "Error en el tipo de dato ingresado en numero o está vacío"

        array.forEach(element => {
            if (typeof element != "number") throw "Error: El tipo de dato dentro del array debe ser numerico"
        });

        array.forEach(element => {
            if (element % 2 === 0) {
                numerosPares.push(element)
            }else{
                numerosImpares.push(element)
            }
        });

        return `Pares: ${numerosPares}, Impares ${numerosImpares}`;

    } catch (error) {
        return error;
    }
}

/* 
24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero tendrá 
los numeros ordenados en forma ascendente y el segundo de 
forma descendiente, pe. 

miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

const ordenarAscendenteDescendente = array => {
    try {
        if (typeof array !== "object" || array.length === 0) throw "Error en el tipo de dato ingresado en numero o está vacío"

        return `Ascendente: ${array.sort()}, Descendente ${array.sort().reverse()}`;

    } catch (error) {
        return error;
    }
}

/* 
25) Programa una función que dado un arreglo de elementos, 
elimine los duplicados, pe.

miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].
*/

const eliminarDuplicados = array => {
    let resultado = [];

    try {
        if (typeof array !== "object" || array.length === 0) throw "Error en el tipo de dato ingresado en numero o está vacío"
        
        array.forEach(element => {
            if (!resultado.includes(element)) resultado.push(element);
        });

        return resultado;

    } catch (error) {
        return error;
    }
}

/* 
26) Programa una función que dado un arreglo de 
números obtenga el promedio, pe. 

promedio([9,8,7,6,5,4,3,2,1,0]) 
devolverá 4.5.
 */

const obtenerPromedio = array =>{
    let resultado = 0;

    try {
        if (typeof array !== "object" || array.length === 0) throw "Error en el tipo de dato ingresado en numero o está vacío"
        
        array.forEach(element => {
            resultado += element;
        });

        return resultado / array.length;

    } catch (error) {
        return error;
    }
}


/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película. 
*/
const validarCaracterEspecial = (texto) => {
    return /[^ña-záéíóúäëïöüâêîôûàèìòù0-9\s]/i.test(texto.toLocaleLowerCase())
}


class Pelicula {
    constructor (id, titulo,director,anio,paises,generos,clasificacion){
        try {
            
            this.validarId(id);
            this.validarTitulo(titulo);
            this.validarDirector(director);
            this.validarAnio(anio);
            this.validarPaises(paises);
            this.validarGeneros(generos);
            this.validarClasificacion(clasificacion);
            this.anio = anio,
            this.paises = paises,
            this.generos = generos,
            this.clasificacion = clasificacion
            
        } catch (error) {
            return console.warn("Error: "+error);
        }
    }
    validarId(id){
        if (!id || !id.trim()) throw "El campo ID es obligatorio";
        if (validarCaracterEspecial(id)) throw "El campo ID no puede contener caracteres especiales";
        if (id.length != 9) throw "El Campo ID debe contener 9 caracteres";

        id.split("").slice(0,2).forEach(element => {
           if (!parseInt(element)) throw "Los primeros 2 Caracteres de ID deben ser numeros";
        });
        id.split("").slice(-7).forEach(element => {
            if (parseInt(element)) throw "Los ultimos 7 caracteres deben ser letras";
        });
    }
    validarTitulo(titulo){
        if (!titulo || !titulo.trim()) throw "El campo TITULO es obligatorio";
        if (titulo.length > 100) throw "La variable TITULO no puede tener mas de 100 caracteres";
        if (validarCaracterEspecial(titulo)) throw "El titulo no puede contener caracteres especiales";
    }
    validarDirector(director){
        if (!director || !director.trim()) throw "El campo DIRECTOR es obligatorio";
        if (director.length > 50) throw "La variable DIRECTOR no puede tener mas de 50 caracteres";
        if (validarNombre(director)) throw "En la variable DIRECTOR debe ingresar un nombre válido";
    }
    validarAnio(anio){
        if(!anio) throw "El campo AÑO es obligatorio"
        if (anio<1000) throw "El AÑO debe ser válido"
    }
    validarPaises(paises){
        if (typeof paises !== "object" || paises.length == 0) throw "El tipo de dato ingresado en PAISES es incorrecto o está vacío"

        paises.forEach(element => {
            if (parseInt(element)) throw "Debe ingresar un país válido"
        });
    }
    validarGeneros(generos){
        if (typeof generos !== "object" || generos.length == 0) throw "El tipo de dato ingresado en GENEROS es incorrecto o está vacío"
        generos.forEach(element => {
            if (!this.obtenerGenerosAceptados().includes(element)) throw "Los géneros cinematograficos ingresados deben ser válidos"
        });
    }
    validarClasificacion(clasificacion){
        if(typeof clasificacion != "number") throw "Debe ingresar una clasificación válida"
        if (clasificacion < 0 || clasificacion>10) throw "La clasificación debe ser un numero entre 0 y 10";
    }
    obtenerGenerosAceptados(){
        return ["Acción","Ciencia ficción","Comedia","Drama","Fantasía","Melodrama","Musical","Romance","Suspenso","Terror","Documental"]
    }
    get fichaTecnica(){
        return`
        ID: ${this.id}
        TITULO: ${this.titulo}
        DIRECTOR: ${this.director}
        AÑO: ${this.anio}
        PAISES: ${this.paises.toString()}
        GENEROS: ${this.generos.toString()}
        CLASIFICACIÓN: ${this.clasificacion}`
    }
}

let pelicula1 = new Pelicula("12aaaaaaa","Pelicula 1","Miguel Estrada",2000,["Chile"],["Acción","Comedia"],10);
let pelicula2 = new Pelicula("13aaaaaaa","Pelicula 2","Miguel Hernandez",2010,["EEUU"],["Ciencia ficción","Drama"],10);
let pelicula3 = new Pelicula("14aaaaaaa","Pelicula 3","Miguel Perez",2020,["Francia"],["Terror"],10);





