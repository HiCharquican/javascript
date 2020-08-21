/* let temporizadorOut = setTimeout(() => {
    console.log("Ejecutanto set time out, esto se escuta una sola vez");
}, 1000);

clearTimeout(temporizadorOut);

let temporizadorInterval = setInterval(() => {
    console.log("Ejecutanto set time interval, indefinidinamente cada cierto intervalo de tiempo");
}, 1000);

clearInterval(temporizadorInterval)

console.clear(); */

//CODIGO SINCRONO BLOQUEANTE

/* (()=>{
    console.log("Código síncrono")
    console.log("Inicio")

    function uno(){
        console.log("Uno")
        dos();
        console.log("Tres")
    }

    function dos(){
        console.log("Dos")
    }

    uno()
    console.log("Fin")
})();
console.clear(); */


//*****************************************
//CÓDIGO ASINCRONO NO BOQUEANTO 
//*****************************************


/* (() =>{
    console.log("Código asíncrono")
    console.log("Inicio")

    function uno(){
        setTimeout(() => {
            console.log("Uno")
        }, 0);
        dos();
        console.log("Tres")
    }

    function dos(){
        setTimeout(() => {
            console.log("Dos")
        },1000);
    }

    uno()
    console.log("Fin")
})();


console.clear(); */


//***************************************
//CALLBACKS CALLBACKS CALLBACKS CALLBACKS
//***************************************


/* 
function cuadradoCallBack(value, callback){
    setTimeout(() => {
        callback(value, value*value)
    }, 0 || Math.random() * 1000);
}

cuadradoCallBack(0, (value, result)=>{
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`)
    cuadradoCallBack(1, (value, result)=>{
        console.log(`Callback: ${value}, ${result}`)
        cuadradoCallBack(2, (value, result)=>{
            console.log(`Callback: ${value}, ${result}`)
            cuadradoCallBack(3, (value, result)=>{
                console.log(`Callback: ${value}, ${result}`)
                cuadradoCallBack(4, (value, result)=>{
                    console.log(`Callback: ${value}, ${result}`)
                    cuadradoCallBack(5, (value, result)=>{
                        console.log(`Callback: ${value}, ${result}`)
                    } )
                } )
            } )
        } )
    } )
} ) 
*/


//********************************************
//PROMESAS PROMESAS PROMESAS PROMESAS PROMESAS
//********************************************

/* function cuadradoPromise(value){
    if(typeof value != "number") return Promise.reject(`Error el valor ${value} no es un número`);

    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 || Math.random() * 1000);
    })
}


cuadradoPromise(0)
    .then(obj=>{
        console.log("Inicia promise");
        console.log(obj)
        return cuadradoPromise(1)
    })
    .then(obj =>{
        console.log(obj)
        return cuadradoPromise(2)
    })
    .then(obj =>{
        console.log(obj)
        return cuadradoPromise(3)
    })
    .then(obj =>{
        console.log(obj)
        return cuadradoPromise(4)
    })
    .then(obj =>{
        console.log(obj)
        return cuadradoPromise(5)
    })
    .then(obj =>{
        console.log("Fin promise");
    })
    .catch(err =>{ console.error(err)}); */

//***********************************************
//ASYNC - AWAIT ASYNC - AWAIT ASYNC - AWAIT ASYNC
//***********************************************

/* function cuadradoPromise(value){
    if(typeof value != "number") return Promise.reject(`Error el valor ${value} no es un número`);

    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 || Math.random() * 1000);
    })
}


async function funcionAsyncronaDeclarada (){
    try {
        console.log("Inicio Async function");

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
    } catch (error) {
        return console.log(error)
    }
}


const funcionAsyncronaExpresada = async () =>{
    try {
        console.log("Inicio Async function");

        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
    } catch (error) {
        return console.log(error)
    }
} */
