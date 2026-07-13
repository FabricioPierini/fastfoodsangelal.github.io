
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

function aumentarQuantidade(id){
  const produto = carrinho.find(item => item.id === id);
  produto.quantidade++;
  atualizarTudo()
}

function adicionarProduto(produto){
  const produtoExistente = carrinho.find(item => item.id === produto.id);
  if(produtoExistente){
    produtoExistente.quantidade++;
  }else{
    carrinho.push(produto);
  }
  atualizarTudo();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById("lista-carrinho");
  listaCarrinho.innerHTML = "";
  carrinho.forEach(produto => {
    const subtotal = produto.preco * produto.quantidade;
    listaCarrinho.innerHTML += `
    <div class="item-carrinho">
      <h4>${produto.nome}</h4>
      <div class="controle-quantidade">
        <button class="diminuir" data-id="${produto.id}">
          -
        </button>
        <span>${produto.quantidade}</span>
        <button class="aumentar" data-id="${produto.id}">
          +
        </button>
      </div>
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

const listaCarrinho = document.getElementById("lista-carrinho");
listaCarrinho.addEventListener("click", (evento) => {
  console.log(evento.target);

  if(evento.target.classList.contains("aumentar")){
  aumentarQuantidade(evento.target.dataset.id);
}

if(evento.target.classList.contains("diminuir")){
  diminuirQuantidade(evento.target.dataset.id);
}
});



