function darkMode(btn, classList){
    const $btnDarkMode = document.querySelector(btn),
        $elementos = document.querySelectorAll("["+classList+"]")

    if (localStorage.getItem("darkmode") == "true"){
        $btnDarkMode.textContent = "☀️";
        $elementos.forEach(el => el.classList.add("dark-mode"))
        localStorage.setItem("darkmode","true");
    }

    document.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if ($btnDarkMode.textContent == "🌙"){
                $btnDarkMode.textContent = "☀️";
                $elementos.forEach(el => el.classList.add("dark-mode"))
                localStorage.setItem("darkmode","true");
                
            }else{
                $elementos.forEach(el => el.classList.remove("dark-mode"))
                $btnDarkMode.textContent = "🌙";
                localStorage.setItem("darkmode","false");
            }
            
        }
    })
}

export {darkMode}