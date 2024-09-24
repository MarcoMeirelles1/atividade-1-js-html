let numeros = [1, 2, 3, 4, 5];
        
function atualizarDisplay() {
    document.getElementById('ArrayMassa').innerText = numeros.join(', ');
}
function adicionarElemento() {
    const input = document.getElementById('ElementoMassa');
    const novoNumero = Number(input.value);
    if (!isNaN(novoNumero)) {
        numeros.push(novoNumero);
        input.value = ''; // Limpa o campo de entrada
        atualizarDisplay(); // Atualiza a exibição
    } else {
        alert('Por favor, insira um número válido.');
    }
}
function deletarElemento() {
    if (numeros.length > 0) {
        numeros.pop();
        atualizarDisplay(); 
    } else {
        alert('O array já está vazio.');
    }
}
atualizarDisplay();
