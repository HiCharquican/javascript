const $btnIniciarReloj = document.getElementById("btn-iniciar-reloj"),
    $btnDetenerReloj = document.getElementById("btn-detener-reloj"),
    $btnIniciarAlarma = document.getElementById("btn-iniciar-alarma"),
    $btnDetenerAlarma = document.getElementById("btn-detener-alarma"),
    $reloj = document.getElementById("reloj"),
    sonidoAlarma = new Audio('http://www.sonidosmp3gratis.com/sounds/alarm-clock.mp3')

let intervaloReloj;

function iniciarReloj(){
    let hora, minuto, segundo;
        intervaloReloj = setInterval(() => {
            let time = new Date();
            hora = time.getHours() < 10 ? 0 + "" +time.getHours() : "" + time.getHours();
            minuto = time.getMinutes() < 10 ? 0 + ""+time.getMinutes() : ""+(time).getMinutes();
            segundo= time.getSeconds() < 10 ? 0 + ""+time.getSeconds() : ""+time.getSeconds();
            
            $reloj.textContent= `${hora}:${minuto}:${segundo}`;
        },0);;

    $btnIniciarReloj.disabled = true;
    $btnDetenerReloj.disabled = false;
}

function detenerReloj(){
    clearInterval(intervaloReloj);
    $reloj.textContent = "00:00:00";
    $btnDetenerReloj.disabled = true;
    $btnIniciarReloj.disabled = false;
}

function iniciarAlarma(){
    sonidoAlarma.play();
    $btnIniciarAlarma.disabled = true;
    $btnDetenerAlarma.disabled = false;
}

function detenerAlarma(){
    sonidoAlarma.pause();
    sonidoAlarma.currentTime = 0;
    $btnIniciarAlarma.disabled = false;
    $btnDetenerAlarma.disabled = true;
}

export {iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma};
    
    