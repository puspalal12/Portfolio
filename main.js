const menu = document.querySelector(".nav-menu");
const openmenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-btn");


openmenu.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    openmenu.style.display=("none");
    closeMenu.style.display=("block");

    
})

closeMenu.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    openmenu.style.display=("block");
    closeMenu.style.display=("none");

    
})


