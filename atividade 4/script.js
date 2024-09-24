function verificarVelocidade() {
    const velocidade = parseFloat(document.getElementById("velocidade").value);
    const resultado = document.getElementById("resultado");
    if (isNaN(velocidade)) {
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }
    if (velocidade <= 80) {
        resultado.textContent = "Você está dentro do limite de velocidade. Sem multa.";
    } else if (velocidade <= 120) {
        resultado.textContent = "Infração média: multa aplicada.";
    } else if (velocidade > 120){
        resultado.textContent = "Infração grave: multa aplicada.";
    }
}