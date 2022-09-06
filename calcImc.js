

var resultado = document.getElementById("resultado");
var botao = document.getElementById("botao");

botao.addEventListener("click",function(event) { 
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var classificacao = "";

    if(peso=="" || altura=="" || nome==""){
        resultado.textContent="um ou mais campos não foram preenchidos corretamente, tente novamente";
    }else{
        var imc = peso/(altura*altura);

        if(imc <18.5){
            classificacao = "voce está abaixo do seu peso ideal!."
        }else{
            classificacao = "você está dentro do seu peso ideal!"
        }

        resultado.textContent = `Olá ${nome}, o resultado do seu imc é: ${imc.toFixed(2)} , ${classificacao}`;
    }

    
    

})
