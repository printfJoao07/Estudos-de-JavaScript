function mostrarResultados(){
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "";

    let texto = `       JavaScipt é uma linguagem poderosa <br> e versátil! `;

     resultadosDiv.innerHTML = texto;

    let textoConcat = texto.concat(' E muito popular ');
    resultadosDiv.innerHTML += `<br><br> ${textoConcat}`;

    let textoSubs = texto.replace('poderosa', 'incrível');
    resultadosDiv.innerHTML += `<br><br> ${textoSubs}`;

    let posicao = texto.indexOf('linguagem');
    resultadosDiv.innerHTML += `<br><br> A posicao de limguagem é ${posicao}`;

    let textoTrim = texto.trim();
    let posicao2 = textoTrim.indexOf('linguagem')
    resultadosDiv.innerHTML += `<br><br> A posicao de limguagem é ${posicao2}`;

    let textoExt = textoTrim.substring(0, 10);
    resultadosDiv.innerHTML += `<br><br> ${textoExt}`;

    let partes = textoTrim.split(' ');
    resultadosDiv.innerHTML += `<br><br> ${partes.join('/')}`;

    let contem = textoTrim.includes('versátil');
    resultadosDiv.innerHTML += `<br><br> ${contem}`;

    let minuscula = textoTrim.toLowerCase();
    resultadosDiv.innerHTML += `<br><br> ${minuscula}`;

    let maiuscula = textoTrim.toUpperCase();
    resultadosDiv.innerHTML += `<br><br> ${maiuscula}`;

    let textoRepetido = 'João'.repeat(3);
    resultadosDiv.innerHTML += `<br><br> ${textoRepetido}`;

    let tam = textoTrim.length;
    resultadosDiv.innerHTML += `<br><br> Tamanho do Texto: ${tam}`;

    let caractere = textoTrim.charAt(5);
    resultadosDiv.innerHTML += `<br><br> Posição 5: ${caractere}`;

}