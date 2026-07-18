const principal = document.getElementById("imagemPrincipal");

const miniaturas =
document.querySelectorAll(".miniatura");
miniaturas.forEach((foto)=>{
    foto.addEventListener("click",()=>{
        imagemPrincipal.src = foto.src;

        miniaturas.forEach(item=>{
    item.classList.remove("ativa");
});

foto.classList.add("ativa");
    });
});


