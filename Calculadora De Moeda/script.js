function limpar() {

    alert("Conteudo limpo com sucesso!");
}

function calcCinco(){
    //Pegando o valor inserido dentro do input
    var valorTotal = document.getElementById("valorAtual").value;
    var qtdPessoas = document.getElementById("qtdPessoas").value;
    console.log("Pegando o valor total: " + valorTotal);
    console.log("Pegando o valor de pessoas: " + qtdPessoas);

    var calculoPessoa = (valorTotal * 5 / 100) / qtdPessoas;
    var calculoTotal = (valorTotal * 5 / 100) ;
    console.log("Valor final da conta: " + calculoTotal);
    console.log("Valor Calculado por pessoa" + calculoPessoa);

    document.getElementById("valorPorPessoaFinal").innerHTML = "R$ " + calculoPessoa;
    document.getElementById("ValorTotal").innerHTML = "R$ " + calculoTotal;
}

function calcDez(){
    //Pegando o valor inserido dentro do input
    var valorTotal = document.getElementById("valorAtual").value;
    var qtdPessoas = document.getElementById("qtdPessoas").value;
    console.log("Pegando o valor total: " + valorTotal);
    console.log("Pegando o valor de pessoas: " + qtdPessoas);

    var calculoPessoa = (valorTotal * 10 / 100) / qtdPessoas;
    var calculoTotal = (valorTotal * 10 / 100) ;
    console.log("Valor final da conta: " + calculoTotal);
    console.log("Valor Calculado por pessoa" + calculoPessoa);

    document.getElementById("valorPorPessoaFinal").innerHTML = "R$ " + calculoPessoa;
    document.getElementById("ValorTotal").innerHTML = "R$ " + calculoTotal;
}