const btnCapturar = document.getElementById('capturar-btn');
const formContainer = document.getElementById('form-container');
const emailInput = document.getElementById('email-input');
const btnEnviar = document.getElementById('enviar-btn');
const menssagem = document.getElementById('menssagem');
const iconeBTN = document.getElementById('icone-btn');
const REG= document.getElementById('reg');

btnCapturar.addEventListener('click', () => {
    formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
    if (formContainer.style.display === 'block') emailInput.focus();
});

btnEnviar.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email) {
        menssagem.style.display = 'block';
        iconeBTN.src = "../Icon_/pngwing.com(7).png";//Icone após o clique
        REG.textContent='';
        menssagem.textContent='Join our newsletters';
        formContainer.style.display = 'none';
    }
    

    emailInput.value = '';
})

/*Data atual */
//obtem a data atual
//const agora = new Date();
//Formata a data DD/MM/AAAA
//const dataFormatada= agora.toLocaleDateString('pt-BR');

//Insere no Html
//document.getElementById('data_actual').innerText= dataFormatada;
//=================se quiser apenas o ano=========================
document.getElementById('data_actual').innerText= new Date().getFullYear();