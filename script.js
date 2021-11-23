//pra so funcionar quando estiver tudo carregado na tela
document.addEventListener('DOMContentLoaded', () => {


    //criando o pincel -> mouse
    const pincel = {
        mouseAtivo: false,
        movendo: false,
        posicao: { x: 0, y: 0 },
        posicaoAnterior: null
    }
    //selecionando o canvas
    const tela = document.querySelector('#tela');
    //criando o contexto
    const contexto = tela.getContext('2d');

    const canvass = document.getElementById('tela')


    //definindo altura e largura
    tela.width = 750;
    tela.height = 550;


    var espessura = document.getElementById("espessura");
    espessura.oninput = function () {
        contexto.lineWidth = this.value;
    }

    var opacidade = document.getElementById("opacidade");
    opacidade.oninput = function () {
        contexto.globalAlpha = this.value;
    }

    const vermelho = document.querySelector('#vermelho');
    vermelho.addEventListener('click', corVermelho);

    const azul = document.querySelector('#azul');
    azul.addEventListener('click', corAzul);

    const verde = document.querySelector('#verde');
    verde.addEventListener('click', corVerde);

    const preto = document.querySelector('#preto');
    preto.addEventListener('click', corPreto);

    const cinza = document.querySelector('#cinza');
    cinza.addEventListener('click', corCinza);

    const branco = document.querySelector('#branco');
    branco.addEventListener('click', corBranco);

    const azulClaro = document.querySelector('#azulClaro');
    azulClaro.addEventListener('click', corAzulClaro);

    const verdeClaro = document.querySelector('#verdeClaro');
    verdeClaro.addEventListener('click', corVerdeClaro);

    const marrom = document.querySelector('#marrom');
    marrom.addEventListener('click', corMarrom);

    const laranja = document.querySelector('#laranja');
    laranja.addEventListener('click', corLaranja);

    const amarelo = document.querySelector('#amarelo');
    amarelo.addEventListener('click', corAmarelo);

    const roxo = document.querySelector('#roxo');
    roxo.addEventListener('click', corRoxo);

    const rosa = document.querySelector('#rosa');
    rosa.addEventListener('click', corRosa);

    const rosaClaro = document.querySelector('#rosaClaro');
    rosaClaro.addEventListener('click', corRosaClaro);

    const indigo = document.querySelector('#indigo');
    indigo.addEventListener('click', corindigo);


    const borracha = document.querySelector('#borracha');
    borracha.addEventListener('click', eraser);



    function download() {
        const image = canvass.toDataURL();
        const link = document.createElement('a');
        link.href = image;
        link.download = "image.jpeg";
        link.click();
    }

    const baixando = document.querySelector("#download");
    baixando.addEventListener('click', download);

  

    contexto.lineWidth = 5;
    contexto.strokeStyle = "black";


    const desenharLinha = (linha) => {
        contexto.beginPath();
        contexto.lineJoin = 'round';
        contexto.moveTo(linha.posicaoAnterior.x, linha.posicaoAnterior.y);
        contexto.lineTo(linha.posicao.x, linha.posicao.y);
        contexto.closePath();
        contexto.stroke();
    }

    tela.onmousedown = (evento) => { pincel.mouseAtivo = true };
    tela.onmouseup = (evento) => { pincel.mouseAtivo = false };

    tela.onmousemove = (evento) => {
        pincel.posicao.x = evento.offsetX;
        pincel.posicao.y = evento.offsetY;
        pincel.movendo = true;
    }

    const ciclo = () => {
        if (pincel.mouseAtivo && pincel.movendo && pincel.posicaoAnterior) {
            desenharLinha({ posicao: pincel.posicao, posicaoAnterior: pincel.posicaoAnterior })
            pincel.movendo = false;

        }
        pincel.posicaoAnterior = { x: pincel.posicao.x, y: pincel.posicao.y }

        setTimeout(ciclo, 10);
    }

    ciclo()

    /////Definindo Cores e borracha

    function eraser() {
        contexto.strokeStyle = "white"
    }

    function corVermelho() {
        if (vermelho.value == 'Vermelho') {
            contexto.strokeStyle = "#FF0000";
        }
    }

    function corVerde() {
        if (verde.value == 'Verde') {
            contexto.strokeStyle = "#228B22";
        }
    }

    function corAzul() {
        if (azul.value == 'Azul') {
            contexto.strokeStyle = "#0000FF";
        }
    }

    function corPreto() {
        if (preto.value == 'Preto') {
            contexto.strokeStyle = "#000000";
        }
    }

    function corCinza() {
        if (cinza.value == 'Cinza') {
            contexto.strokeStyle = "#808080";
        }
    }

    function corBranco() {
        if (branco.value == 'Branco') {
            contexto.strokeStyle = "#FFFFFF";
        }
    }

    function corMarrom() {
        if (marrom.value == 'Marrom') {
            contexto.strokeStyle = "#A52A2A";
        }
    }

    function corLaranja() {
        if (laranja.value == 'Laranja') {
            contexto.strokeStyle = "#FF8C00";
        }
    }

    function corAmarelo() {
        if (amarelo.value == 'Amarelo') {
            contexto.strokeStyle = "#FFFF00";
        }
    }

    function corRoxo() {
        if (roxo.value == 'Roxo') {
            contexto.strokeStyle = "#A020F0";
        }
    }

    function corRosa() {
        if (rosa.value == 'Rosa') {
            contexto.strokeStyle = "#FF1493";
        }
    }

    function corRosaClaro() {
        if (rosaClaro.value == 'Rosa Claro') {
            contexto.strokeStyle = "#FF69B4";
        }
    }

    function corAzulClaro() {
        if (azulClaro.value == 'Azul Claro') {
            contexto.strokeStyle = "#00BFFF";
        }
    }

    function corVerdeClaro() {
        if (verdeClaro.value == 'Verde Claro') {
            contexto.strokeStyle = "#90EE90";
        }
    }

    function corindigo() {
        if (indigo.value == 'indigo') {
            contexto.strokeStyle = "#4B0082";
        }
    }

})