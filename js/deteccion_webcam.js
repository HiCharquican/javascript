const d = document,
    n = navigator;

function webCam(id){
    const $video = d.getElementById(id);
    
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true,audio:true})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch((e) => {
            $video.insertAdjacentHTML("beforebegin",`<br><br><p>Sucedio el siguiente error:<mark>${e}</mark></p>`)
            console.log(`Sucedio el siguiente error: ${e}`)
        });
    }
}

export {webCam}