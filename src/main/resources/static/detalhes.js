const API_URL = "http://localhost:8080/investimentos";

// Função para pegar o ID da URL
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Carregar detalhes do investimento
async function carregarDetalhes() {
  const id = getIdFromUrl();
  const resposta = await fetch(`${API_URL}/${id}`);
  const investimento = await resposta.json();

  document.getElementById("nome").textContent = investimento.nome;
  document.getElementById("tipo").textContent = investimento.tipo;
  document.getElementById("valorInvestido").textContent = investimento.valorInvestido.toFixed(2);
  document.getElementById("rentabilidade").textContent = investimento.rentabilidade.toFixed(2);
  document.getElementById("dataAplicacao").textContent = investimento.dataAplicacao;
  document.getElementById("status").textContent = investimento.status;
}


carregarDetalhes();
