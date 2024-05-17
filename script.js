
function armazenaValor() {

    var userInput = document.getElementById("userInput").value; 

    if (userInput % 2 === 0 ) {
        document.getElementById("valorInserido").innerText = "O val inserido é PAR! ";

    }else {
        document.getElementById("valorInserido").innerText = "O val inserido é IMPAR";
    }
}


function armazenaValor2() {

    var userInput = document.getElementById("userInput2").value; 

    if (userInput < 100 ) {
        document.getElementById("valorInput").innerText = "O val inserido é MENOR que 100! ";

    }else if (userInput > 100) {
        document.getElementById("valorInput").innerText = "O val inserido é MAIOR que 100";
    }
}