const principal = document.getElementById("imagemPrincipal");

const miniaturas =
document.querySelectorAll(".miniaturas img");
miniaturas.forEach((foto)=>{
    foto.addEventListener("click",()=>{
        principal.src = foto.src;
    });
});