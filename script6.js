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

    // Formatar data conforme o local setado e apresentando apenas o que deseja
    const dataFormatada = hoje.toLocaleDateString('pt-BR', {
        weekday: 'long', /* short */ 
        year: 'numeric', /* 2-digit */ 
        month: 'long', /* numeric, 2-digit, short */ 
        day: 'numeric', /* 2-digit */ 


    });

    document.getElementById('data').innerText = `Hoje é:  ${dataFormatada}`;

    /*
    Math.floor() vai arredondar para baixo o número resultante da conta
    frases.length pega o tamanho do array
    Math.random() sorteia um número aleatório de 0 a 1, incluindo as casas decimais
    */
    const indice = Math.floor(frases.length * Math.random());

    document.getElementById('frase').innerText = frases[indice];

};

// Quando a página for carregada a função será executada
window.onload = mostrarFraseDoDia();
