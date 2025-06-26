const arrayAtual = document.getElementById('arrayAtual');
const inputFruta = document.getElementById('inputFruta');
const resultados = document.getElementById('resultados');

let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango'];

function exibirResultados(mensagem){
    // a função map pega cada posição do array, chama de fruta e adiciona ela entre as tags li
    arrayAtual.innerHTML = `Array: 
    <ul>
        ${frutas.map(fruta => `<li>${fruta}</li>`).join('')}
    </ul>`;

    // verifica se alguma mensagem foi passada como parâmetro, e se sim adiciona ela a página html
    if(mensagem){
        resultados.innerHTML = `<p>${mensagem}</p>`;
    }
}

function validarInput(mensagem){
    let fruta = inputFruta.value.trim(); // o trim remove todos os espaços 

    // se nada for digitado uma mensagem será mostrada na tela e a função retorna vazio
    if (!fruta){
        alert(mensagem);
        return null;
    }
    return fruta;
}

function resetInput(){
    // limpa o input mantem ele selecionado 
    inputFruta.value = '';
    inputFruta.focus();
}

document.getElementById('btnAdd').addEventListener('click', () => {
    let fruta = validarInput('Digite uma fruta para adicionar');
    // caso fruta esteja vazio a função é finalizada antes da adição no html 
    if(!fruta) return;

    // push adiciona no final do array
    frutas.push(fruta);
    exibirResultados(`Adicionado no final: ${fruta}`);
    resetInput();
})

exibirResultados();