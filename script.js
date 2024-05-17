
function armazenaValor() {

    var userInput = document.getElementById("userInput").value; 

    var yearResult = (2024 - userInput)
        document.getElementById("valorInserido").innerText = "O ano é: " + yearResult;

 
}

function armazenaValor2() {

    var userInput = document.getElementById("userInput2").value; 

    if (userInput < 500 ) {
        document.getElementById("valorInput").innerText = "O val inserido é MENOR que 500! ";

    }else if (userInput > 100) {
        document.getElementById("valorInput").innerText = "O val inserido é MAIOR que 500";
    }
}