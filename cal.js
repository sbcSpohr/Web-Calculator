
var janela = document.getElementById("janela");

function insert(numero) {
   
    var ultimoDigito = janela.value.slice(-1);
    var naoRepetir = ["/", "*", "-", "+", "."];
    var string1 = "Infinity";
    var string2 = "NaN";
    var string3 = "Error";

    
    //naoRepetir.includes(ultimoDigito) se ultimoDigito é um dos caracteres na lista naoRepetir, esta parte da condição retorna true
    //naoRepetir.includes(numero) se numero é um dos caracteres na lista naoRepetir esta parte da condição retorna true
    if (naoRepetir.includes(ultimoDigito) && naoRepetir.includes(numero)) {
        return;
    }

    if (janela.value === "0") {
        janela.value = numero;
    } else if(janela.value == string1 || janela.value == string2 || janela.value == string3){
        janela.value = numero;
    } else {
        janela.value += numero;
    }
}


function clearC() {

    janela.value = "0";

    }


function calculate() {

    try {
        janela.value = eval(janela.value);
    }
    catch (error) {
        janela.value = "Error";
    }
}

function clearOne() {

    janela.value = janela.value.slice(0, -1);

}

function mudarTema() {
    var calculadoraTema = document.getElementById("calculadora");
   

    if (calculadoraTema.classList.contains("calculadora")) {
        calculadoraTema.classList.remove("calculadora");
        calculadoraTema.classList.add("calculadoraLight");
    } else {
        calculadoraTema.classList.remove("calculadoraLight");
        calculadoraTema.classList.add("calculadora");
    }
}

function mudarTemaBotao() {
    var botoes = document.querySelectorAll(".botao,.botaoLight");

botoes.forEach(function(botao) {
    if (botao.classList.contains("botao")) {
        botao.classList.remove("botao");
        botao.classList.add("botaoLight");
    } else if (botao.classList.contains("botaoLight")) {
        botao.classList.remove("botaoLight");
        botao.classList.add("botao");
    }
});
}

function mudarTemaOperador(){
    var operadores = document.querySelectorAll(".operador,.operadorLight");

operadores.forEach(function(operador) {
    if (operador.classList.contains("operador")){
        operador.classList.remove("operador");
        operador.classList.add("operadorLight");
    } else if (operador.classList.contains("operadorLight")){
        operador.classList.remove("operadorLight");
        operador.classList.add("operador");
    }
    });
}


function mudarTemaBody(){
    var body = document.getElementById("corpo");

    if (body.classList.contains("corpo")) {
        body.classList.remove("corpo");
        body.classList.add("corpoLight");
    } else if (body.classList.contains("corpoLight")) {
        body.classList.remove("corpoLight");
        body.classList.add("corpo");
    }
}

function mudarJanela(){
    var janela = document.getElementById("janela");

    if(janela.classList.contains("janela")){
        janela.classList.remove("janela");
        janela.classList.add("janelaLight");
    }
    else {
        janela.classList.remove("janelaLight");
        janela.classList.add("janela");
    }
}






