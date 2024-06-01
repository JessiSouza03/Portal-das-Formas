function calcularAreaCirculo() {
    const raio = document.getElementById("raio").value;
    const area = Math.PI * Math.pow(raio, 2);
    document.getElementById("resultado").innerText = `Área do círculo: ${area.toFixed(2)}`;
}

function calcularAreaCubo() {
    const lado = document.getElementById("ladoCubo").value;
    const area = 6 * Math.pow(lado, 2);
    document.getElementById("resultadoCubo").innerText = `Área do cubo: ${area.toFixed(2)}`;
}

function calcularAreaRetangulo() {
    const base = document.getElementById("baseRetangulo").value;
    const altura = document.getElementById("alturaRetangulo").value;
    const area = base * altura;
    document.getElementById("resultadoRetangulo").innerText = `Área do retângulo: ${area.toFixed(2)}`;
}

function calcularAreaRomboedro() {
    const diagonalMaior = document.getElementById("diagonalMaiorRomboedro").value;
    const diagonalMenor = document.getElementById("diagonalMenorRomboedro").value;
    const area = (diagonalMaior * diagonalMenor) / 2;
    document.getElementById("resultadoRomboedro").innerText = `Área do romboedro: ${area.toFixed(2)}`;
}

function calcularAreaTrapezoideIrregular() {
    const baseMaior = document.getElementById("baseMaiorTrapezoide").value;
    const baseMenor = document.getElementById("baseMenorTrapezoide").value;
    const altura = document.getElementById("alturaTrapezoide").value;
    const area = ((parseFloat(baseMaior) + parseFloat(baseMenor)) * altura) / 2;
    document.getElementById("resultadoTrapezoide").innerText = `Área do trapézio irregular: ${area.toFixed(2)}`;
}

function calcularAreaPoligonoRegular() {
    const lado = document.getElementById("ladoPoligono").value;
    const nLados = document.getElementById("nLados").value;
    const apotema = document.getElementById("apotema").value;
    const perimetro = lado * nLados;
    const area = (perimetro * apotema) / 2;
    document.getElementById("resultadoPoligono").innerText = `Área do polígono regular: ${area.toFixed(2)}`;
}

function calcularAreaQuadrado() {
    const lado = document.getElementById("ladoQuadrado").value;
    const area = Math.pow(lado, 2);
    document.getElementById("resultadoQuadrado").innerText = `Área do quadrado: ${area.toFixed(2)}`;
}

function calcularAreaCuboide() {
    const comprimento = document.getElementById("comprimentoCuboid").value;
    const largura = document.getElementById("larguraCuboid").value;
    const altura = document.getElementById("alturaCuboid").value;
    const area = 2 * ((comprimento * largura) + (comprimento * altura) + (largura * altura));
    document.getElementById("resultadoCuboid").innerText = `Área do cubóide: ${area.toFixed(2)}`;
}