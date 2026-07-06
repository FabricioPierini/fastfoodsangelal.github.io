
let carrinho = [];

const botoes = document.querySelectorAll(".btn-produto");
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const produto = {
      id: botao.dataset.id,
      nome: botao.dataset.nome,
      preco: Number(botao.dataset.preco),
      quantidade: 1
    };
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    if (produtoExistente) {
      produtoExistente.quantidade++;
    }
    else {
      carrinho.push(produto);
    }
    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById("lista-carrinho");
  listaCarrinho.innerHTML = "";
  carrinho.forEach(produto => {
    listaCarrinho.innerHTML += `
    <div class="item-carrinho">
      <h4>${produto.nome}</h4>
      <p>Quantidade: ${produto.quantidade}</p>
      <p>R$ ${(produto.preco * produto.quantidade).toFixed(2)}</p>
    </div>
    <hr>
    `;
  });
}
