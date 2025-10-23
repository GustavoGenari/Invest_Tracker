const API_URL = "http://localhost:8080/investimentos";

async function carregarInvestimentos() {
  const resposta = await fetch(API_URL);
  const investimentos = await resposta.json();

  const container = document.getElementById("investimentos-container");
  container.innerHTML = "";

  if (investimentos.length === 0) {
    // Mostra mensagem centralizada
    const msg = document.createElement("div");
    msg.className = "card empty-card";
    msg.innerHTML = `
      <p>Você ainda não possui investimentos cadastrados.</p>
      <button onclick="window.location.href='novo.html'">Adicionar Novo Investimento</button>
    `;
    container.appendChild(msg);
    return;
  }

  investimentos.forEach(inv => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <p><strong>Nome:</strong> ${inv.nome}</p>
      <p><strong>Tipo:</strong> ${inv.tipo}</p>
      <p><strong>Valor Investido:</strong> R$ ${inv.valorInvestido.toFixed(2)}</p>
      <p><strong>Status:</strong> ${inv.status}</p>
      <div class="container-buttons">
        <button onclick="verDetalhes(${inv.id})">Ver</button>
        <button onclick="editar(${inv.id})">Editar</button>
        <button class="delete" onclick="excluir(${inv.id})">Excluir</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function verDetalhes(id) {
  window.location.href = `detalhes.html?id=${id}`;
}

function editar(id) {
  window.location.href = `editar.html?id=${id}`;
}

async function excluir(id) {
  if (confirm("Tem certeza que deseja excluir este investimento?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    carregarInvestimentos();
  }
}

// Carrega os investimentos quando a página abrir
carregarInvestimentos();
