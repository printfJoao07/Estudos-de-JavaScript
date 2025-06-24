const saida = document.getElementById('saida');
saida.innerHTML="";

const botaoOnClick = document.getElementById('botaoOnClick'); 
botaoOnClick.onclick = function () {
    saida.innerHTML += `<div class="menssagem"> O botão foi clicado pela primeira vez</div>`;
    
};

botaoOnClick.onclick = function () {
    saida.innerHTML += `<div class="menssagem"> O botão foi clicado pela segunda vez vez. O primeito click foi sobreescrito!</div>`;
    
};

const botaoAdd = document.getElementById('botaoAddEvent');

botaoAdd.addEventListener('click', function(){
    saida.innerHTML += `<div class="menssagem"> O evento Add foi clicado pela primeira vez!</div>`
});

botaoAdd.addEventListener('click', function(){
    saida.innerHTML += `<div class="menssagem"> O evento Add foi clicado pela segunda vez!</div>`
});