function toggleEndereco() {
  const box = document.getElementById("endereco-box");

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

const menuCarrinho = document.getElementById("carrinho");

const abrir = document.getElementById("abrirCarrinho");

abrir.addEventListener("click", () => {
  menuCarrinho.classList.toggle("aberto");
});

document.getElementById("fecharCarrinho").addEventListener("click", () => {
  menuCarrinho.classList.remove("aberto");
});
