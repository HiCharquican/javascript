function iterableIterador(){
    const iterable = [1,2,3,4,5,6];

    const iterador = iterable[Symbol.iterator]();

    console.log(iterable);
    console.log(iterador);

    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());

    let next = iterador.next();

    while (!next.done){
        console.log(next.value);
        next = iterador.next();
    }
}


function generadores(){
    function* iterable(){

        yield "Hola";

        console.log("Hola 1");

        yield "Hola 2";

        console.log("Hola 3");

        yield "Hola 4";

        yield "Hola 5";
    }


    let iterador = iterable();

    /* console.log(iterador.next());
    console.log(iterador.next());

    console.log(iterador.next());
    console.log(iterador.next()); */

    for (const y of iterador) {
        console.log(y)
    }

    const array = [...iterable()];
    console.log(array);


    function cuadrado(valor){
        setTimeout(() => {
            console.log({
                valor, 
                resultado: valor*valor
            });
        }, Math.random * 1000);
    }

    function* generador(){
        console.log("Inicia Generator");

        yield cuadrado(0);
        yield cuadrado(1);
        yield cuadrado(2);
        yield cuadrado(3);
        yield cuadrado(4);

        console.log("Termina Generator");

    }

    let gen = generador();

    for (const y of gen) {
        console.log(y);
    }
}

function proxys(){
    const persona = {
        nombre: "",
        apellido: "",
        edad: 0,
    }
    
    const manejador = {
        set(obj, prop, valor){
            if(Object.keys(obj).indexOf(prop)=== -1) {
                return console.error("La propiedad no existe")
            }
    
            if(
                (prop === "nombre" || prop === "apellido") && (/^[A-Za-zÑñ\s]+$/ig.test(prop))){
                return console.error("La propiedad nombre o apellido solo acepta letras y espacios")
            }
            obj[prop] = valor;
        }
    }
    
    const miguel = new Proxy(persona, manejador);
    
    miguel.nombre = "Miguel";
    miguel.apellido = "Estrada";
    miguel.edad = 22;
    
    console.log(miguel);
    console.log(persona);
}

function propiedadesDinamicas(){
    const objUsuarios ={
        [`id_${Math.round(Math.random()*100+5)}`]: "Valor Aleatorio"
    }
    console.log(objUsuarios);
    
    const usuarios = ["Miguel","Irma","Kenai","Grindo"];
    usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`]= usuario)
    
    console.log(objUsuarios);
}

