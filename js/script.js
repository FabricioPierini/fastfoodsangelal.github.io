function toggleEndereco() {
  const box = document.getElementById("endereco-box");

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

const carrinho = document.getElementById("carrinho");

const abrir = document.getElementById("abrirCarrinho");

abrir.addEventListener("click", () => {
  carrinho.classList.toggle("aberto");
});

document.getElementById("fecharCarrinho").addEventListener("click", () => {
  carrinho.classList.remove("aberto");
});
