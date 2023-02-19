const menu = document.querySelector("#menu");
const navbar = document.querySelector("#navbar");

menu.addEventListener("click", ()=>{
    if(navbar.classList.contains("hidden")){
        navbar.classList.remove("hidden");
    }
    else{
        navbar.classList.add("hidden");
    }
})