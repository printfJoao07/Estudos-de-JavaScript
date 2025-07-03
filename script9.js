function mostrarResultados(){
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "";

    let texto = `       JavaScipt é uma linguagem poderosa <br> e versátil! `;

     resultadosDiv.innerHTML = texto;

    // .concat (concatenar): adiciona no final da String
    let textoConcat = texto.concat(' E muito popular ');
    resultadosDiv.innerHTML += `<br><br> ${textoConcat}`;

    // .replace: troca uma palavra, caractere ou frase por outra
    let textoSubs = texto.replace('poderosa', 'incrível');
    resultadosDiv.innerHTML += `<br><br> ${textoSubs}`;

    // .indexOf: identifica a posição na string
    let posicao = texto.indexOf('linguagem');
    resultadosDiv.innerHTML += `<br><br> A posicao de limguagem é ${posicao}`;

    // .trim: remove os espaços do texto
    let textoTrim = texto.trim();
    let posicao2 = textoTrim.indexOf('linguagem')
    resultadosDiv.innerHTML += `<br><br> A posicao de limguagem é ${posicao2}`;

    // .subsring: pega apenas um pedaço da string
    let textoExt = textoTrim.substring(0, 10);
    resultadosDiv.innerHTML += `<br><br> ${textoExt}`;

    // .split: transforma a string em um array a partir de um parâmetro
    let partes = textoTrim.split(' ');
    // .join: adiciona o parâmetro passado enre os elementos de um array e transforma em uma string
    resultadosDiv.innerHTML += `<br><br> ${partes.join('/')}`;

    // .includes: verifica se um array ou string contem um determinado parâmetro e retorna verdadeiro ou falso
    let contem = textoTrim.includes('versátil');
    resultadosDiv.innerHTML += `<br><br> ${contem}`;

    // .toLowerCase: transforma todas os caracteres em minusculos
    let minuscula = textoTrim.toLowerCase();
    resultadosDiv.innerHTML += `<br><br> ${minuscula}`;

    // .toUpperCase: transforma todas os caracteres em maiusculos
    let maiuscula = textoTrim.toUpperCase();
    resultadosDiv.innerHTML += `<br><br> ${maiuscula}`;

    // .repeat: repete uma string um determinado número de vezes
    let textoRepetido = 'João'.repeat(3);
    resultadosDiv.innerHTML += `<br><br> ${textoRepetido}`;

    let tam = textoTrim.length;
    resultadosDiv.innerHTML += `<br><br> Tamanho do Texto: ${tam}`;

    // .charAt: caractere de uma posição da string
    let caractere = textoTrim.charAt(5);
    resultadosDiv.innerHTML += `<br><br> Posição 5: ${caractere}`;

}
