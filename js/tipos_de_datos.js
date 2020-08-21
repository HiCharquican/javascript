/*****************************************************/
/*****************************************************/

function symbols(){
    let id = Symbol("id");
    id2 = Symbol("id2");


    console.log(id === id2);
    console.log(id, id2);
    console.log(typeof id, typeof id2);


    const NOMBRE = Symbol("nombre");
    const SALUDAR = Symbol("saludar");

    const persona = {
        [NOMBRE] : "Jon"
    }

    console.log(persona);

    persona.NOMBRE = "Jonathan MirCha"
    persona.NOMBRE = "Jonathan MirCha"


    console.log(persona);
    console.log(persona.NOMBRE);
    console.log(persona[NOMBRE]);
    persona[SALUDAR] = function(){
        console.log("Hola");
    }

    console.log(persona);

    persona[SALUDAR]();

    for (const propiedad in persona) {
        console.log(propiedad)
        console.log(persona[propiedad])
    }

    console.log(Object.getOwnPropertySymbols(persona));
}


/*****************************************************/
/*****************************************************/

function sets(){
    const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","Hola"]);

    console.log(set);
    console.log(set.size);

    const set2 = new Set();

    set2.add(1);
    set2.add(2);
    set2.add(2);
    set2.add(3);
    set2.add(true);
    set2.add(false);
    set2.add(true);
    set2.add({});

    console.log(set2);

    console.log("Elementos set");

    for (item of set) {
        console.log(item);
    }

    console.log("Elementos set 2");

    set2.forEach(element => {
        console.log(element);
    });
    console.clear();

    console.log(set[0])
    console.log(Array.from(set)[0])

    set.delete("Hola");

    console.log(set)
}

/*****************************************************/
/*****************************************************/

function maps(){
    const mapa = new Map();

    mapa.set("nombre","Miguel");
    mapa.set("apellido","Estrada");
    mapa.set("edad",22);

    console.log(mapa);
    console.log(mapa.size);
    console.log(mapa.has("apellido"));
    console.log(mapa.has("correo"));

    console.log(mapa.get("nombre"));
    mapa.set("nombre","Miguel P.");
    console.log(mapa);

    mapa.delete("apellido")
    console.log(mapa);

    for (let [key, value] of mapa) {
        console.log(`Llave: ${key}, Valor: ${value}`);
    }

    const mapa2 = new Map([
        ["nombre","Kenai"],
        ["edad",7],
        ["animal","perro"]
    ])

    console.log(mapa2);

    for (const [key, value] of mapa2) {
        console.log(`Llave: ${key}, Valor: ${value}`);
    }


    const llavesMapa2 =[...mapa2.keys()];
    const valoresMapara2 = [...mapa2.values()];

    console.log(llavesMapa2);
    console.log(valoresMapara2)
}

/*****************************************************/
/*****************************************************/

function weakSet(){
    const ws = new WeakSet();

    let valor1 = {"valor 1":1};
    let valor2 = {"valor 2":2};
    let valor3 = {"valor 3":3};

    ws.add(valor1);
    ws.add(valor2);
    ws.add(valor3);

    console.log(ws);

    console.log(ws.has(valor1))

    ws.delete(valor1);
    console.log(ws);

    ws.add(valor1);
    setInterval(() => {
        console.log(ws);
    }, 1000);

    setInterval(() => {
        valor1 = null;
        valor2 = null;
        valor3 = null;
    }, 5000);
}

/*****************************************************/
/*****************************************************/

function weakMap(){
    const wm = new WeakMap();
    let llave1 = {};
    let llave2 = {};
    let llave3 = {};

    wm.set(llave1, 1)
    wm.set(llave2, 2)

    console.log(wm)

    console.log(wm.has(llave1));
    console.log(wm.has(llave3));

    console.log(wm.get(llave1))
    console.log(wm.get(llave2))
    console.log(wm.get(llave3))


    wm.delete(llave2);
    console.log(wm);

    wm.set(llave2, 2);
    wm.set(llave3, 3);
    console.log(wm)

    setInterval(() => {
        console.log(wm);
    }, 1000);


    setTimeout(() => {
        llave1 = null;
        llave2 = null;
        llave3 = null;
    }, 5000);
}











