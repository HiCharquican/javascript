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

function funcionTHIS(){
    console.log(this);
    console.log(window);

    this.nombre = "Contexto Global";

    console.log(this.nombre);

    function imprimir (){
        console.log(this.nombre);
    }

    imprimir();

    const obj ={
        nombre:"Contexto Objeto",
        imprimir(){
            console.log(this.nombre);
        }
    }

    obj.imprimir();

    const obj2 ={
        nombre: "Contexto Objeto 2",
        imprimir
    }

    obj2.imprimir();

    const obj3 ={
        nombre:"Contexto Objeto 3",
        imprimir: () =>{
            console.log(this.nombre)
        }
    }

    obj3.imprimir();

    function Persona(nombre){
        this.nombre = nombre;
        //return console.log(this.nombre);
        return () => console.log(this.nombre,222);
    }
    let jon = new Persona("Jon");

    jon();
}

function callApllyBind(){
    console.log(this);
    this.lugar = "Contexto Global";

    function saludar(saludo, nombre){
        console.log(`${saludo} ${nombre} desde el ${this.lugar}`);
    }

    saludar();

    const obj={
        lugar: "Contexto Objeto"
    }

    saludar.call(obj,"Hola","Miguel");
    saludar.call(null,"Hola","Nulo call");
    saludar.apply(obj, ["Adios","Pendic"]);
    saludar.apply(null, ["Adios","Nulo apply"]);

    this.nombre = "Windows";
    const persona = {
        nombre: "Miguel",
        saludar(){
            console.log(`Hola ${this.nombre}`);
        }
    }

    persona.saludar();

    const otraPersona = {
        saludar: persona.saludar.bind(this)
    }

    otraPersona.saludar();

}

function json(){
    const json = {
        cadena: "Miguel",
        numero: 22,
        booleano: true,
        arreglo: ["Volar","Correr","Nadar"],
        objeto: {
            twitter: "@indefinido",
            email: "email@email.com"
        },
        nulo: null
    }

    console.log(json);

    console.log(JSON);
    console.log("{}");
    console.log(JSON.parse("{}"))

    console.log(JSON.stringify(json));
}

