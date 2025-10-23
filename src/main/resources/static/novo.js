const API_URL = "http://localhost:8080/investimentos";

document.getElementById("form-investimento").addEventListener("submit", async (e) => {
  e.preventDefault();

  const investimento = {
    nome: document.getElementById("nome").value,
    tipo: document.getElementById("tipo").value,
    valorInvestido: parseFloat(document.getElementById("valorInvestido").value),
    rentabilidade: parseFloat(document.getElementById("rentabilidade").value),
    dataAplicacao: document.getElementById("dataAplicacao").value,
    status: document.getElementById("status").value
  };

  try {
    const resposta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(investimento)
    });

    if (resposta.ok) {
      alert("Investimento cadastrado com sucesso!");
      window.location.href = "index.html";
    } else {
      alert("Erro ao cadastrar investimento.");
    }
  } catch (erro) {
    console.error("Erro:", erro);
    alert("Não foi possível conectar ao servidor.");
  }
});
