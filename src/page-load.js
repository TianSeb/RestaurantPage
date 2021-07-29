export default function pageLoad() {
   //dom
      const content = document.getElementById("content");
      const titles = ["About Us", "Menu", "Contact Us"];

   //Create Elements
      for(let i=0; i < 3; i++){
         let e = document.createElement("div");
         e.classList.add("menu-tab");
         e.dataset.section = titles[i];
         e.innerHTML = titles[i];
         content.appendChild(e);
      }
}

