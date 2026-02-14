window.onload = function() {
    const popup = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('close-popup');
    const entendidoBtn = document.getElementById('entendido-btn');

    // Abre o popup automaticamente após 1 segundo (opcional)
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 1000);

    // Função para fechar o popup
    const fecharPopup = () => {
        popup.style.display = 'none';
    };

    closeBtn.onclick = fecharPopup;
    entendidoBtn.onclick = fecharPopup;

    // Fecha se o usuário clicar fora da caixa branca
    window.onclick = function(event) {
        if (event.target == popup) {
            fecharPopup();
        }
    }
};