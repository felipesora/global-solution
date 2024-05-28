function calcularImpacto() {
    const garrafasPetInput = document.getElementById('garrafasPet');
    const reciclagemInput = document.getElementById('reciclagem');
    const resultadoDiv = document.getElementById('resultado');
    const erroMensagem = document.getElementById('erro-garrafas');
    
    const garrafasPet = garrafasPetInput.value;
    const reciclagem = reciclagemInput.value;

    // Limpar mensagens anteriores
    erroMensagem.style.display = 'none';
    erroMensagem.textContent = '';

    if (garrafasPet === '') {
        erroMensagem.textContent = 'Por favor, insira a quantidade de garrafas PET que você consome.';
        erroMensagem.style.display = 'block';
        return;
    }

    const garrafasPorAno = garrafasPet * 52;

    let impacto;
    if (reciclagem === 'pouco') {
        impacto = garrafasPorAno * 0.9; // 90% de impacto se recicla pouco
    } else if (reciclagem === 'medio') {
        impacto = garrafasPorAno * 0.5; // 50% de impacto se recicla médio
    } else {
        impacto = garrafasPorAno * 0.1; // 10% de impacto se recicla muito
    }

    resultadoDiv.textContent = `Você consome aproximadamente ${garrafasPorAno} garrafas PET por ano, e seu impacto ambiental é de aproximadamente ${impacto.toFixed(1)} garrafas não recicladas.`;
}