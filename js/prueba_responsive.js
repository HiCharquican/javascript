const d = document;

function responsiveTester(id){
    const $form = d.getElementById(id);
    let tester;
    
    d.addEventListener("submit", e =>{
        if(e.target.id == id){
            e.preventDefault();
            tester = window.open($form.direccion.value, "tester",`innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    })

    d.addEventListener("click", e =>{
        if (e.target == $form.cerrar && tester) tester.close();
    })
}


export {responsiveTester};