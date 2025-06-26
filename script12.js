const arrayAtual = document.getElementById('arrayAtual');
const inputFruta = document.getElementById('inputFruta');
const resultados = document.getElementById('resultados');

let frutas = ['Maçã', 'Banana', 'Laranja', 'Morango'];

function exibirResultados(mensagem){
    arrayAtual.innerHTML = `Array: 
    <ul>
        ${frutas.map(fruta => `<li>${fruta}</li>`).join('')}
    </ul>`;

    if(mensagem){
        resultados.innerHTML = `<p>${mensagem}</p>`;
    }
}

function validarInput(mensagem){
    let fruta = inputFruta.value.trim();
    if (!fruta){
        alert(mensagem);
        return null;
    }
    return fruta;
}

function resetInput(){
    inputFruta.value = '';
    inputFruta.focus();
}

document.getElementById('btnAdd').addEventListener('click', () => {
    let fruta = validarInput('Digite uma fruta para adicionar');
    if(!fruta) return;
    frutas.push(fruta);
    exibirResultados(`Adicionado no final: ${fruta}`);
    resetInput();
})

exibirResultados();