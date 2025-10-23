const API_URL = "http://localhost:8080/investimentos";

// Função para pegar o ID da URL
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Carregar os dados do investimento
async function carregarDados() {
  const id = getIdFromUrl();
  const resposta = await fetch(`${API_URL}/${id}`);
  const investimento = await resposta.json();

  document.getElementById("nome").value = investimento.nome;
  document.getElementById("tipo").value = investimento.tipo;
  document.getElementById("valorInvestido").value = investimento.valorInvestido;
  document.getElementById("rentabilidade").value = investimento.rentabilidade;
  document.getElementById("dataAplicacao").value = investimento.dataAplicacao;
  document.getElementById("status").value = investimento.status;
}

// Atualizar investimento
document.getElementById("form-editar").addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = getIdFromUrl();
  const investimentoAtualizado = {
    nome: document.getElementById("nome").value,
    tipo: document.getElementById("tipo").value,
    valorInvestido: parseFloat(document.getElementById("valorInvestido").value),
    rentabilidade: parseFloat(document.getElementById("rentabilidade").value),
    dataAplicacao: document.getElementById("dataAplicacao").value,
    status: document.getElementById("status").value
  };

  const resposta = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(investimentoAtualizado)
  });

  if (resposta.ok) {
    alert("Investimento atualizado com sucesso!");
    window.location.href = "index.html";
  } else {
    alert("Erro ao atualizar o investimento.");
  }
});

// Carrega os dados assim que a página abrir
carregarDados();
