
let carrinho = [];
const carrinhoSalvo = localStorage.getItem("carrinho");

if (carrinhoSalvo) {
  carrinho = JSON.parse(carrinhoSalvo);
}
atualizarCarrinho();

const botoes = document.querySelectorAll(".btn-produto");

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function salvarCarrinho(){
    localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );
}

function atualizarTudo(){
  atualizarCarrinho();
  salvarCarrinho();
}

function adicionarProduto(produto){
  const produtoExistente = carrinho.find(item => item.id === produto.id);
  if(produtoExistente){
    produtoExistente.quantidade++;
  }else{
    carrinho.push(produto);
  }
  atualizarCarrinho();
  salvarCarrinho();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById("lista-carrinho");
  listaCarrinho.innerHTML = "";
  carrinho.forEach(produto => {
    const subtotal = produto.preco * produto.quantidade;
    listaCarrinho.innerHTML += `
    <div class="item-carrinho">
      <h4>${produto.nome}</h4>
      <p>Quantidade: ${produto.quantidade}</p>
      <p>${formatarPreco(subtotal)}</p>
    </div>
    <hr>
    `;
  });
  atualizarTotal();
}

function atualizarTotal(){
  const total = document.getElementById("total");
  let soma = 0;
  carrinho.forEach(produto => {
    soma += produto.preco * produto.quantidade;
  });
  total.textContent = formatarPreco(soma);
}

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const produto = {
      id: botao.dataset.id,
      nome: botao.dataset.nome,
      preco: Number(botao.dataset.preco),
      quantidade:1
    };
    adicionarProduto(produto);
  });
});
