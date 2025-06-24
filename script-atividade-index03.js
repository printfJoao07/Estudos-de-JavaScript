
    let n1 = parseInt(prompt("Digite um número: "));
    document.write(typeof n1 + "<br>");

    let n2 = parseInt(prompt("Digite um número: "));
    document.write(typeof n2);

    let soma, sub, mult, divs;

    soma = n1 + n2;
    document.write("<h1 style='color:blue;'>A soma entre " + n1 + " e " + n2 + " é = " + soma + "</h1>")

    sub = n1 - n2;
    document.write("<h2 style='color:green;'>A subtração entre " + n1 + " e " + n2 + " é = " + sub + "</h2>")

    mult = n1 * n2;
    document.write("<h3 style='color:purple;'>A multiplicação entre " + n1 + " e " + n2 + " é = " + mult + "</h3>")

    divs = n1 / n2;
    document.write("<h4 style='color:orange;'>A divisão entre " + n1 + " e " + n2 + " é = " + divs + "</h4>")
