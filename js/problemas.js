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







