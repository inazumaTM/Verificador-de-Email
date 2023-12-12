let botao = document.querySelector('.verificar')
let audio = new Audio('som/click.mp3')
botao.addEventListener('click', function() {
    audio.play();
});

function validar(){
    const validacao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const email = document.querySelector('.mail').value
    const texto = document.querySelector('.texto')
    
    if(validacao.test(email)){
        texto.style.color = '#00FF00'
        return texto.textContent = 'E-mail válido!!!'
    } else{
        texto.style.color = 'red'
        return texto.textContent = 'E-mail invalido!!!'
    }
}