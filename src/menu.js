import argollinas from './assets/argollinas.jpg';
import penneringo from './assets/penneringo.jpg';
import testicutoros from './assets/testicutoros.jpg';
import tetasmonja from './assets/tetasmonja.jpg';

export default function menuTab() {
    const body = document.getElementById("tabs");
    const menu = document.createElement("div");

    menu.classList.add("menu");

    //imgs
    menu.appendChild(createImage("Argollinas", "Shells with delicious whale vaginal flux"));
    menu.appendChild(createImage("Penneringo","House specialty. An orgasmic volcano of flavours"));
    menu.appendChild(createImage("Testicutoros", "Big Balls from a Big Bull, with lots of Semen inside"));
    menu.appendChild(createImage("Tetasmonja", "God´s breast, filled with lot of milk"));

    body.appendChild(menu);
}

function createImage(name,description){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    let foodImg = new Image();
    switch (name) {
        case "Argollinas": foodImg.src = argollinas;
            break;
            case "Penneringo": foodImg.src = penneringo;
            break;
            case "Testicutoros": foodImg.src = testicutoros;
            break;
            case "Tetasmonja": foodImg.src = tetasmonja;
            break;
        default:
            break;
    }

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}