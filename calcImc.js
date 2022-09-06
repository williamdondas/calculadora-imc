

var resultado = document.getElementById("resultado");
var botao = document.getElementById("botao");

botao.addEventListener("click",function(event) { 
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if(peso=="" || altura=="" || nome==""){
        resultado.textContent="um ou mais campos não foram preenchidos corretamente, tente novamente";
    }else{
        var imc = peso/(altura*altura);

    resultado.textContent = `Olá ${nome}, o resultado do seu imc é: ${imc.toFixed(2)} `;
    }

     

})


