const d = document;

function searchFilters(input, selector){
    d.addEventListener("keyup", e =>{

        if (e.key == "Escape") e.target.value == "";

        if (e.target.matches(input)){
            d.querySelectorAll(selector).forEach(el => 
                el.textContent.toLowerCase().includes(e.target.value) 
                    ? el.classList.remove("filter") 
                    : el.classList.add("filter"))
        }
    });
}

export {searchFilters};
