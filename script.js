const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".header_menu-list");

btn.addEventListener("click",()=>{
    nav.classList.toggle("menu-open")
});