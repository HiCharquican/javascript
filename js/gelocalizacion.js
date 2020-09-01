const d = document,
    n = navigator;
function getGeolocation(id){
    const $id = document.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

    const success = position => {
        console.log(position);
        console.log(position.coords.latitude)
        $id.innerHTML = `
        <span>Precision: <b>${position.coords.accuracy}</b><span>
        <br>
        <span>Latitud: <b>${position.coords.latitude}</b><span>
        <br>
        <span>Longitud: <b>${position.coords.longitude}</b><span>
        <br>
        <a href="https://www.google.cl/maps/place/${position.coords.latitude},${position.coords.longitude}" target="_blank" rel="noopener">Google Maps</a>
        `
    }

    const error = err => {
        console.log(`Error ${err.code}: ${err.message}`);
        $id.innerHTML = `Error ${err.code}: ${err.message}`;
    }

    n.geolocation.getCurrentPosition(success,error,options);
    
}

export {getGeolocation};