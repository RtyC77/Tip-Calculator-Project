
function limpar() {
    //Setando valor por valor = ""
    document.getElementById("valorAtual").value = "";
    document.getElementById("qtdPessoas").value = "";
    document.getElementById("valorPorPessoaFinal").innerHTML = "";
    document.getElementById("valorTotal").innerHTML = "";
    document.getElementById("valorCustom").value = "";

    alert("Conteudo limpo com sucesso!");
}
//(escolha) vai pegar o valor da %, ex: 5%
function calc(escolha){
    //Pegando o valor inserido dentro do input
    var valorTotal = document.getElementById("valorAtual").value;

    //Fazendo o replace da virgula com o ponto
    valorTotal = valorTotal.replace(",", ".");

    var qtdPessoas = document.getElementById("qtdPessoas").value;
    //console.log("Pegando o valor total: " + valorTotal);
    //console.log("Pegando o valor de pessoas: " + qtdPessoas);

    var calculoPessoa = ((valorTotal * escolha / 100) / qtdPessoas).toFixed(2);
    var calculoTotal = (valorTotal * escolha / 100).toFixed(2) ;
    //console.log("Valor final da conta: " + calculoTotal);
    //console.log("Valor Calculado por pessoa" + calculoPessoa);

    document.getElementById("valorPorPessoaFinal").innerHTML = calculoPessoa;
    document.getElementById("valorTotal").innerHTML = calculoTotal;
}

function calcCustom() {
    //pegando as infos básicas
    var varvalorCustom = document.getElementById("valorCustom").value;
    var valorCustomInt = parseInt(varvalorCustom);
    console.log(valorCustomInt);

    var valorTotal = document.getElementById("valorAtual").value;
    valorTotal = valorTotal.replace(",", ".");

    var qtdPessoas = document.getElementById("qtdPessoas").value;

    var calculoPessoa = ((valorTotal * valorCustomInt / 100) / qtdPessoas).toFixed(2);
    var calculoTotal = (valorTotal * valorCustomInt / 100).toFixed(2) ;

    document.getElementById("valorPorPessoaFinal").innerHTML = calculoPessoa;
    document.getElementById("valorTotal").innerHTML = calculoTotal;
}
