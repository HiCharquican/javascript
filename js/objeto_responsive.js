const d = document,
    w = window;

function responsiveMedia(id, mediaQuery, mobileContent, desktopContent){
    let breakPoint = w.matchMedia(mediaQuery);

    const responsive = (e) => {
        if (e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
    }
    breakPoint.addListener(responsive);

    responsive(breakPoint);
}



export {responsiveMedia};