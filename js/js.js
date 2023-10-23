let panel = document.querySelector(".panel");
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
 
btn.addEventListener("click", () => {
    if(input == "perro"){
        panel.innerHTML = "El animal es un perro";
    }else{
        panel.innerHTML = "La palabra no se encontro";
    }
})
 

