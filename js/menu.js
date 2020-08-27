function mostrarMenu(){
    const $ulNav = document.querySelector("nav ul"),
        $btnNav = document.querySelector("#btn-nav");

    document.addEventListener("click", e =>{
        if (e.target.id == "btn-nav" || e.target.classList.contains("hamburger-inner") || e.target.classList.contains("hamburger-box") || e.target.classList.contains("nav-item-link")){
            $ulNav.classList.toggle("nav-show");
            $btnNav.classList.toggle("is-active");
            if ($btnNav.textContent == "➕"){
                $btnNav.textContent = "✖️"
            }else{
                $btnNav.textContent = "➕"
            }
        }
    })
}

export {mostrarMenu};








