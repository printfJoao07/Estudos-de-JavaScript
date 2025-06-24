const resultado = document.getElementById('resultado');
const resultado2 = document.getElementById('resultado2');

let hoje =  new Date(); // função para pegar data e hora atual do sistema

resultado.innerHTML = `<p> ${hoje} </p>`;

document.getElementById('btnAno').addEventListener('click', () => {
    resultado.innerHTML += `<p> Ano: ${hoje.getFullYear()} </p>`;
});

document.getElementById('btnMes').addEventListener('click', () => {

    resultado.innerHTML += `<p> Mês: ${hoje.getMonth() + 1} </p>`;
});

document.getElementById('btnDia').addEventListener('click', () => {
    resultado.innerHTML += `<p> Dia: ${hoje.getDate()} </p>`;
});

document.getElementById('btnDiaSemana').addEventListener('click', () => {
    const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    resultado.innerHTML += `<p> Dia da semana: ${diasSemana[hoje.getDay()]} </p>`;
});

document.getElementById('btnProxSemana').addEventListener('click', () => {
    let proxSem = new Date(hoje);
    proxSem.setDate(hoje.getDate() + 7);
    
    resultado.innerHTML += `<p> Daqui a 7 dias: ${proxSem.toDateString()} </p>`;
});

document.getElementById('btnDiferenca').addEventListener('click', () => {
    let dataFutura = new Date(2025, 11, 31);
    let difTempo = dataFutura - hoje;
    let dias = (difTempo / (24 * 60 * 60 * 1000));
    resultado.innerHTML += `<p> Dias até 31/12/2025: ${Math.ceil(dias)} </p>`;
});

document.getElementById('btnFormatada').addEventListener('click', () => {
    let dia = hoje.getDate();
    let mes = String(hoje.getMonth() + 1).padStart(2, '0');
    let ano = hoje.getFullYear();
    let dataFormatada = `${dia}/${mes}/${ano}`;
    resultado.innerHTML += `<p> Data formatada: ${dataFormatada} </p>`;
})

document.getElementById('btnHora').addEventListener('click', () => {
    
    resultado.innerHTML += `<p>Hora: ${hoje.getHours()} </p>`
})

document.getElementById('btnMinutos').addEventListener('click', () => {
    
    resultado.innerHTML += `<p>Minutos: ${hoje.getMinutes()} </p>`
})

document.getElementById('btnSegundos').addEventListener('click', () => {
    
    resultado.innerHTML += `<p>Segundos: ${hoje.getSeconds()} </p>`
})

document.getElementById('btnMilisegundos').addEventListener('click', () => {
    
    resultado.innerHTML += `<p>Milisegundos: ${hoje.getMilliseconds()} </p>`
})

document.getElementById('btnHoraFormatada').addEventListener('click', () => {
    let seg = hoje.getSeconds();
    let min = hoje.getMinutes();
    let hora = String(hoje.getHours()).padStart(2, '0'); 
    let horaFormatada = `${hora}:${min}:${seg}`
    resultado.innerHTML += `<p>Hoara formatada: ${horaFormatada} </p>`
})

function atualizaData(){
    hoje = new Date();
    let seg = String(hoje.getSeconds()).padStart(2,'0');
    let min = String(hoje.getMinutes()).padStart(2,'0');
    let hora = String(hoje.getHours()).padStart(2, '0'); 
    let horaFormatada = `${hora}:${min}:${seg}`
    resultado2.innerHTML = `<p>Hoara formatada: ${horaFormatada} </p>`
}

setInterval(atualizaData, 1000);

atualizaData();