import { mostrarMenu } from '/js/menu.js';
import { iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma } from '/js/reloj.js';
import { subir } from '/js/boton_subir.js';
import { darkMode } from '/js/dark_mode.js';
import { responsiveMedia } from '/js/objeto_responsive.js';
import { responsiveTester } from '/js/prueba_responsive.js';
import { detectarDispositivo } from '/js/deteccion_dispositivos.js';
import { networkStatus } from '/js/estado_conexion.js';
import { webCam } from '/js/deteccion_webcam.js'
import { getGeolocation } from './gelocalizacion.js';
import { searchFilters } from './filtro_busqueda.js';

let $btnSubir = document.getElementById("btn-subir");

document.addEventListener("DOMContentLoaded", e =>{
    document.getElementById("btn-detener-reloj").disabled = true;
    document.getElementById("btn-detener-alarma").disabled = true;

    if (document.documentElement.scrollTop > 100){
        $btnSubir.style.visibility = "visible";
    }else{
        $btnSubir.style.visibility = "hidden";
    }

    mostrarMenu();
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=qRUThviHWzQ">Video youtube</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/qRUThviHWzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );

    responsiveMedia(
        "gmapa",
        "(min-width: 1024px)",
        `<a target="_blank" rel="noopener" href="https://www.google.com/maps/place/Chile/@-35.4136367,-106.2002608,4z/data=!3m1!4b1!4m5!3m4!1s0x9662c5410425af2f:0x505e1131102b91d!8m2!3d-35.675147!4d-71.542969">Google Maps</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26627834.14592753!2d-106.2422428448643!3d-35.4432056793914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x505e1131102b91d!2sChile!5e0!3m2!1ses!2scl!4v1598407211728!5m2!1ses!2scl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );

    responsiveTester("reponsive-tester");
    detectarDispositivo("user-device");
    webCam("webcam");
    getGeolocation("geolocation")
    searchFilters(".card-filter", ".card");
})

darkMode("#btn-darkmode","data-dark");
networkStatus();

document.addEventListener("click", e =>{
    if(e.target.id == "btn-iniciar-reloj"){
        iniciarReloj();
    }

    if(e.target.id == "btn-detener-reloj"){
        detenerReloj();
    }

    if(e.target.id == "btn-iniciar-alarma"){
        iniciarAlarma();
    }

    if(e.target.id == "btn-detener-alarma"){
        detenerAlarma();
    }

    if(e.target.id == "btn-subir"){
        subir();
    }
})

window.addEventListener("scroll", e =>{
    if (document.documentElement.scrollTop > 100){
        $btnSubir.style.visibility = "visible";
    }else{
        $btnSubir.style.visibility = "hidden";
    }
})