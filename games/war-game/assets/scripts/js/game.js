function start() { // Inicio da função start()

    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador'></div>");
    $("#fundoGame").append("<div id='inimigo1'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo'></div>");

} // Fim da função start

class='anima1'
class='anima2'
class='anima3'

    ***** js.js ****

//Principais variáveis do jogo

var jogo = {}

//Game Loop

jogo.timer = setInterval(loop,30);

function loop() {

    movefundo();

} // Fim da funÁ„o loop()



//Função que movimenta o fundo do jogo

function movefundo() {

    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position",esquerda-1);

} // fim da função movefundo()

