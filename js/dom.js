function nodosElemenetosSelectores(){
    console.log(document.getElementsByTagName("li"))
    console.log(document.getElementsByClassName("card"))
    console.log(document.getElementsByName("nombre"))
    console.log(document.getElementById("menu"))

    console.log(document.querySelector("#menu"))
    console.log(document.querySelector("a"))
    console.log(document.querySelectorAll("a"))
    console.log(document.querySelectorAll("a").length)
    document.querySelectorAll("a").forEach(el =>{console.log(el)})

    console.log(document.querySelector(".card"))
    console.log(document.querySelectorAll(".card")[2])

    console.log(document.querySelectorAll("#menu li"))
    console.log(document.querySelector("#menu li"))
}

function atributeDataYAtribute(){
    console.log(document.documentElement.lang)
    console.log(document.documentElement.getAttribute("lang"))

    console.log(document.querySelector(".link-dom").href)
    console.log(document.querySelector(".link-dom").getAttribute("href"))

    document.documentElement.lang = "en";
    console.log(document.documentElement.lang)
    document.documentElement.setAttribute("lang","es-MX")
    console.log(document.documentElement.lang)


    const $linkDOM = document.querySelector(".link-dom");

    $linkDOM.setAttribute("target","_blank");
    console.log($linkDOM.hasAttribute("target"));
    $linkDOM.removeAttribute("target");
    console.log($linkDOM.hasAttribute("target"));


    //Data Atribute

    console.log($linkDOM.getAttribute("data-description"))
    console.log($linkDOM.dataset)
    console.log($linkDOM.dataset.description)
    $linkDOM.setAttribute("data-description","Modelo de objeto del Documento")
    console.log($linkDOM.dataset.description)

    $linkDOM.dataset.description = "Cambie otra vez la vaina"
    console.log($linkDOM.dataset.description)
}

function estiloVariablesCss(){
    const $linkDOM = document.querySelector(".link-dom");

    console.log($linkDOM.style)
    console.log($linkDOM.getAttribute("style"))

    console.log($linkDOM.style.backgroundColor)
    console.log($linkDOM.style.color)
    console.log(window.getComputedStyle($linkDOM))


    $linkDOM.style.setProperty("text-decoration","none")
    $linkDOM.style.setProperty("display","block")
    $linkDOM.style.width = "50%"
    $linkDOM.style.textAlign = "center"
    $linkDOM.style.marginRight = "auto"
    $linkDOM.style.marginLeft = "auto"
    $linkDOM.style.padding = "1rem"
    $linkDOM.style.borderRadius = ".5rem"


    const $html = document.documentElement,
        $body = document.body;

    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
        varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

    console.log(varDarkColor,varYellowColor);


    $body.style.backgroundColor = varDarkColor;
    $body.style.color = varYellowColor;

    $html.style.setProperty("--dark-color","#000");
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

    $body.style.setProperty("background-color",varDarkColor);
}

function textoHTML(){
    const $card = document.querySelector(".card");
    console.log($card);
    console.log($card.classList);

    console.log($card.classList.contains("rotate-45"));

    $card.classList.add("rotate-45")

    console.log($card.classList.contains("rotate-45"));
    console.log($card);
    console.log($card.classList);

    $card.classList.remove("rotate-45");
    $card.classList.toggle("rotate-45");
    $card.classList.replace("rotate-45","rotate-135");
    $card.classList.add("opacity-80","sepia");

    $card.classList.remove("opacity-80","sepia");
    $card.classList.toggle("opacity-80","sepia");
}

function DOMtraversing(){
    const $cards = document.querySelector(".cards");

    console.log($cards);
    console.log($cards.children);
    console.log($cards.children[2]);
    console.log($cards.parentElement);
    console.log($cards.firstElementChild);
    console.log($cards.lastElementChild);
    console.log($cards.previousElementSibling);
    console.log($cards.nextElementSibling);
    console.log($cards.closest("body"));
    console.log($cards.children[3].closest("section"));
}

function elementosFragmentos(){
    const $figure = document.createElement("figure"),
    $image = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

    $image.setAttribute("src","http://placeimg.com/200/200/animals");
    $image.setAttribute("alt","Animals");
    $figcaption.appendChild($figcaptionText);
    $figure.appendChild($image);
    $figure.appendChild($figcaption);
    $figure.classList.add("card");
    $cards.appendChild($figure);

const $ul = document.createElement("ul"),
    $fragment = document.createDocumentFragment();
}

function templateHTML(){
    const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "http://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img: "http://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img: "http://placeimg.com/200/200/arch"
        },
        {
            title: "Personas",
            img: "http://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img: "http://placeimg.com/200/200/nature"
        },
    ];

    cardContent.forEach(el=>{
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title;
        
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment);
}

function modificacionElementos(){
    const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

    let $contententCard =`
        <img src="http://placeimg.com/200/200/any" alt="Arch">
        <figcaption></figcaption> 
    `

    $newCard.classList.add("card");

    $newCard.insertAdjacentHTML("afterbegin",$contententCard);
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
    /* $cards.insertAdjacentElement("afterbegin",$newCard); */

    $cards.prepend($newCard);
    $cards.append($newCard);
    $cards.before($newCard)
    $cards.after($newCard)
}


/***********************************

EVENTOS - EVENTOS - EVENTOS - EVENTOS

************************************/

function hola(){
    alert("Hola");

    console.log(event);
}
function saludar(nombre = "Desconoci@"){
    alert(`Hola ${nombre}`)
}
const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple");
    $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = (e) =>{
    alert("Hola manejador semántico");
    console.log(e);
    console.log(event);
};

$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola manejador múltiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

$eventoMultiple.addEventListener("click", () => {
    saludar()
    saludar("Miguel")
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo: ${e.type}`);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled = true;
}
$eventoRemover.addEventListener("dblclick",removerDobleClick)

/***********************************

FLUJO DE EVENTOS - FLUJO DE EVENTOS

************************************/

function flujoEventos(e){
    console.log(
        `Hola te saluda ${this}, el click lo originó ${e.target.className}`
    );
}

document.addEventListener("click", (e)=>{

    if (e.target.matches(".eventos-flujo a")){
        alert("Hola Soy Miguel Estrada");
        e.preventDefault();
    }

    if (e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
})

window.addEventListener("DOMContentLoaded",(e) =>{
    //console.log("Cargo");
})


























