
let carrinho = [];


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
  atualizarTotal();
  salvarCarrinho();
  atualizarContador();
}

function aumentarQuantidade(id){
  const produto = carrinho.find(item => item.id === id);
  produto.quantidade++;
  atualizarTudo()
}

function diminuirQuantidade(id){
  const produto = carrinho.find(item => item.id === id);
  produto.quantidade--;
  if (produto.quantidade <= 0){
    carrinho = carrinho.filter(item => item.quantidade > 0);
  }
  atualizarTudo();
}

function limparCarrinho(){
  carrinho = [];
  atualizarTudo();
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
  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = `
      <p class="carrinho-vazio">
      🛒<br><br>
      Seu carrinho está vazio.
      </p>
    `;
    atualizarTotal();
    return;
  }
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

function atualizarContador(){
  let quantidade = 0;
  carrinho.forEach(produto =>{
    quantidade += produto.quantidade;
  });
  contadorCarrinho.textContent = quantidade;

  if (quantidade === 0) {
    contadorCarrinho.style.display = "none";
  } else {
    contadorCarrinho.style.display = "inline-block";
  }
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

const contadorCarrinho =
document.getElementById("contador-carrinho");

  const botaoLimpar = document.getElementById("limpar-carrinho");
  botaoLimpar.addEventListener("click", () => {
    limparCarrinho();
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

const carrinhoSalvo = localStorage.getItem("carrinho");

if (carrinhoSalvo) {
  carrinho = JSON.parse(carrinhoSalvo);
}
atualizarTudo();



