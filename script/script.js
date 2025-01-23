function trackObject(event) {
    event.preventDefault();
    const trackingCode = document.getElementById('trackingCode').value.trim();
    const resultDiv = document.getElementById('trackingResult');

    if (!trackingCode) {
        alert('Por favor, preencha o campo de rastreamento.');
        return;
    }

    // Dados fictícios para exibição
    const trackingInfo = {
        codigo: trackingCode,
        status: "Objeto em trânsito",
        data: "2025-01-22 10:00",
        origem: "Rua do Giz, Nº445, Centro. São Luis - MA. CEP: 65.010-620.",
        destino: "Rua 9 - Maria Aparecida de Lucena Andrade, Nº 34, Jardim Paulista, Monte Mor, CEP: 13198432"
    };

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h2>Informações de Rastreamento</h2>
        <p><strong>Código:</strong> ${trackingInfo.codigo}</p>
        <p><strong>Status:</strong> ${trackingInfo.status}</p>
        <p><strong>Data:</strong> ${trackingInfo.data}</p>
        <p><strong>Origem:</strong> ${trackingInfo.origem}</p>
        <p><strong>Destino:</strong> ${trackingInfo.destino}</p>
    `;
}