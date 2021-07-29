import pageLoad from "./page-load";
import aboutTab from "./about";
import menuTab from "./menu";
import contactTab from "./contact";
import "./style.css";

pageLoad()
aboutTab();

// Menu Evt List
const content = [...document.getElementById("content").childNodes];
content.forEach(e => {
    e.addEventListener("click", (i) => {
        sectionManager(i.target.dataset.section);
    });
});

function sectionManager(option) {
    const tab = [...document.getElementById("tabs").childNodes];
     tab[0].parentNode.removeChild(tab[0]);
 
     switch (option) {
         case "About Us": aboutTab()
         break;
         case "Menu": menuTab()
         break;
         case "Contact Us": contactTab()
         break;
         default:aboutTab()
         break;
     }
 }

