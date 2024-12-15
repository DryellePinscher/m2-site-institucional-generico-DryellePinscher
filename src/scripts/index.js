function handleModal() {
    const botaoCadastro = document.querySelector('.button__1');
    const modalController = document.querySelector('.modalController');
    const botaoCadastro2 = document.querySelector('.button__2')

    botaoCadastro.addEventListener('click', function() {
        modalController.showModal();
        closeModal();
    })

    botaoCadastro2.addEventListener('click', function() {
        modalController.showModal();
        closeModal();
    })
}

function closeModal() {
    const botaoFechar = document.querySelector('.button__3');
    const modalController = document.querySelector('.modalController');
    botaoFechar.addEventListener('click', function() {
        modalController.close();
    })
}

handleModal() 