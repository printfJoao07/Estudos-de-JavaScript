function adivinhaCor(){
    let corEscolhida = document.getElementById('corSelect').value;
    let resultado = "";

    switch (corEscolhida) {
        case 'vermelho':
            resultado = "Vermelho é a cor da paixão! Você é alguem com muita energia e está sempre pronto para a ação.";
            break;
        case 'azul':
            resultado = "Azul é a cor da tranquilidade! Você é calmo, racional e gosta de paz e serenidade.";
            break;
        case 'verde':
            resultado = "Verde é a cor da natureza! Você é equilibrado, ana o ar livre e se preocupa com o meio ambiente.";
            break;
        case 'amarelo':
            resultado = "Amarelo é a cor da alegria! Você é uma pessoa otimista, criativa e sempre espalhando boas vibrações.";
            break;
        case 'roxo':
            resultado = "Roxo é a cor do mistério! Você é profundo, gosta de pensar fora da caixa e tem uma conexão espiritual única.";
            break;
        case 'laranja':
            resultado = "Laranja é a cor da diversão! Você é extrovertido, energetico e adora aventura.";
            break;
        default:
            resultado = "Escolha uma cor para descobrir o significado!";
            break;
    }

    document.getElementById('resultado').innerText = resultado;
}