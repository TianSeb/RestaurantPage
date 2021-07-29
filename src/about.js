import img from './assets/Sanji_and_Zeff.png';

export default function aboutTab() {
    const body = document.getElementById("tabs");

    const about = document.createElement("div");
    about.classList.add("about");

    let imagen = new Image();
    imagen.src = img;

    about.appendChild(createParagraph("I wanted to create the perfect food."));
    about.appendChild(imagen);
    about.appendChild(createParagraph("Thats why in dont believe in biology, I believe in Love"));
    body.appendChild(about);
}

function createParagraph(text){
    let e = document.createElement("p");
    e.textContent = text;
    e.classList.add("about");

    return e;
}
