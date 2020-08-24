
/* window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("**** EVENTO RESIZE ****")
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
});

window.addEventListener("scroll", (e) =>{
    console.clear();
    console.log("**** EVENTO SCROLL ****");
    console.log(window.scrollY);
    console.log(window.scrollX);
})

window.addEventListener("load", (e) =>{
    console.log("**** EVENTO LOAD ****");
    console.log(window.screenX)
    console.log(window.screenY)
})

document.addEventListener("DOMContentLoaded", e =>{
    console.log("**** EVENTO DOMContentLoaded ****");
    console.log(window.screenX)
    console.log(window.screenY)
}) */


//window.alert();
//window.confirm();
//window.prompt();



const $btnAbrirVentana = document.getElementById("abrir-ventana"),
    $btnImprimirVentana = document.getElementById("imprimir-ventana");
    $btnCerrarVentana = document.getElementById("cerrar-ventana");

let ventana;

$btnAbrirVentana.addEventListener("click", e =>{
    ventana = open("https://www.google.com.mx/")
});

$btnImprimirVentana.addEventListener("click", e =>{
    window.print();
});
$btnCerrarVentana.addEventListener("click", e =>{
    ventana.close();
});


/***********************************

- URL - URL - URL - URL - URL - URL -

************************************/

/* console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);
console.log(location.search); */

/************************************

HISTORY - HISTORY - HISTORY - HISTORY

*************************************/

/* console.log(history);
console.log(history.length); */

/************************************

   NAVIGATOR - NAVIGATOR - NAVIGATOR

*************************************/

/* console.log(navigator);
console.log(navigator.connection);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */

