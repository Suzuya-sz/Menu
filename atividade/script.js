let carrinho = [];
let total = 0;

const botoes = document.querySelectorAll(".add-to-cart");
const listaCarrinho = document.getElementById("carrinho-itens");
const totalCarrinho = document.getElementById("total");
const contador = document.getElementById("conta");

// Função para adicionar item
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const item = botao.parentElement;
        const nome = item.querySelector("h3").innerText;
        const precoTexto = item.querySelector("p").innerText;
        const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

        carrinho.push({ nome, preco });
        atualizarCarrinho();
    });
});

// Função para atualizar carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";
    total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}`;

        // Botão remover
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.style.marginLeft = "10px";
        btnRemover.style.background = "red";
        btnRemover.style.color = "white";
        btnRemover.style.border = "none";
        btnRemover.style.borderRadius = "5px";
        btnRemover.style.cursor = "pointer";

        btnRemover.addEventListener("click", () => {
            removerItem(index);
        });

        li.appendChild(btnRemover);
        listaCarrinho.appendChild(li);
    });

    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
    contador.textContent = carrinho.length;
}

// Função para remover item
function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}
