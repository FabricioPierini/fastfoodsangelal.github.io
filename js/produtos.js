const principal = document.getElementById("imagemPrincipal");

const miniaturas =
document.querySelectorAll(".miniatura");
miniaturas.forEach((foto)=>{
    foto.addEventListener("click",()=>{
        imagemPrincipal.classList.remove("fadeIn");

        void imagemPrincipal.offsetWidth;

        imagemPrincipal.src = foto.src;

        imagemPrincipal.classList.add("fadeIn");

        miniaturas.forEach(item=>{
    item.classList.remove("ativa");


});


foto.classList.add("ativa");
    });
});




