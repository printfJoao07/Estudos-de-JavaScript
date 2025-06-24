const frases = [
    'A vida é o que acontece enquanto você está ocupado',
    'Menos foco e mais ansiedade!',
    'Desista hoje pra não perder amanhã',
    'O que é a vida?',
    'Nada que tenha valor',
    'Perca seu tempo lendo frases motivacionais',
    'Você teve azar hoje.',
];

console.log(frases[1]);

function mostrarFraseDoDia(){
    const hoje = new Date();
    console.log(hoje);

    const dataFormatada = hoje.toLocaleDateString('pt-BR', {
        weekday: 'long', /* short */ 
        year: 'numeric', /* 2-digit */ 
        month: 'long', /* numeric, 2-digit, short */ 
        day: 'numeric', /* 2-digit */ 


    });

    document.getElementById('data').innerText = `Hoje é:  ${dataFormatada}`;

    const indice = Math.floor(frases.length * Math.random());

    document.getElementById('frase').innerText = frases[indice];

};

window.onload = mostrarFraseDoDia();