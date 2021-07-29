import img from './assets/templo.png';

export default function contactTab() {
    const body = document.getElementById("tabs");
    const contact = document.createElement("div");

    contact.classList.add("contact");

    let reservation = document.createElement("h2");
    reservation.innerText = "Make your reservation to Puttanesca@morinigo.com";

    let imagen = new Image();
    imagen.src = img;

    body.appendChild(contact);
    contact.appendChild(reservation);
    contact.appendChild(imagen);
}