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
    let resultado_binario = 0, resultado_decimal;

    try {
        if (typeof binario != "number" || binario % 1 != 0) throw "Error en el tipo de dato ingresado en binario o está vacío"
        if (typeof decimal != "number" || decimal % 1 != 0) throw "Error en el tipo de dato ingresado en decimal o está vacío"
        
        binario = binario.toString().split("")
        binario.reverse();

        console.log(binario)
        for (let index = 0; index < binario.length; index++) {
            if(binario[index] != 0 ) resultado_binario += Math.pow(parseInt(decimal),index);
        }

        return resultado_binario;

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