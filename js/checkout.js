const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const numero = document.getElementById("numero");
const complemento = document.getElementById("complemento");
const observacoes = document.getElementById("observacoes");
const pagamento = document.getElementById("pagamento");
const botaoFinalizar = document.getElementById("finalizar-pedido");

const listaCheckout = document.getElementById("lista-checkout");
const totalCheckout = document.getElementById("total-checkout");
const subtotalCheckout = document.getElementById("subtotal-checkout");
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});
}

function carregarCheckout(){
listaCheckout.innerHTML = "";
carrinho.forEach(produto => {
    listaCheckout.innerHTML += `
    <div class="produto-checkout">
        <h3>${produto.nome}</h3>
        <p>Quantidade: ${produto.quantidade}</p>
        <p>${formatarPreco(produto.preco * produto.quantidade)}</p>
    </div>
    `;
});
}

function atualizarTotalCheckout(){
    let total = 0;
carrinho.forEach(produto => {
    total += produto.preco * produto.quantidade;
});

subtotalCheckout.textContent =
formatarPreco(total);
totalCheckout.textContent =
formatarPreco(total);
}

function gerarMensagem(){
    let mensagem =
    `🍰 NOVO PEDIDO - FASTFOOD SANGELAL

    Olá!

    Gostaria de fazer o seguinte pedido:
    `;

    carrinho.forEach(produto => {
        mensagem +=
        `🍰 ${produto.nome}
        Quantidade: ${produto.quantidade}
        Subtotal: ${formatarPreco(produto.preco * produto.quantidade)}
        `;
    });

    let total = 0;
    carrinho.forEach(produto => {
        total += produto.preco * produto.quantidade;
    });

    mensagem +=
    `----------------------------
    💰 Total: ${formatarPreco(total)}
    `;

    mensagem +=
    `👤 Nome:
    ${nome.value}
    📞 Telefone:
    ${telefone.value}
    📍 Endereço:
    ${endereco.value}, ${numero.value}
    CEP:
    ${cep.value}
    Complemento:
    ${complemento.value}
    💳 Pagamento:
    ${pagamento.value}
    📝 Observações:
    ${observacoes.value}
    `;
}

carregarCheckout();
atualizarTotalCheckout();