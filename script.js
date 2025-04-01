function conversor() {


    let escolhaUmaMoeda = prompt("escolha uma moeda 1 Dolar ,2 Euro ,3 Real ");
    let valorWons = undefined
    let dolar = 0.00068;
    let euro = 0.00063;
    let real = 0.0040;
    let valorWonNumerico = undefined
    let resultado = undefined


    switch (escolhaUmaMoeda) {

        case "1":
            valorWons = prompt("digite um valor em wons");
            valorWonNumerico = parseFloat(valorWons);


            resultado = valorWonNumerico * dolar;

            alert("o valor e $ " + resultado);

            break
        case "2":
            valorWons = prompt("digite um valor em wons");
            valorWonNumerico = parseFloat(valorWons);
            resultado = valorWonNumerico * euro;

            alert("o valor e €" + resultado);

            break

        case "3":
            valorWons = prompt("digite um valor em wons");
            valorWonNumerico = parseFloat(valorWons);

            resultado = valorWonNumerico * real;

            alert("o valor e R$" + resultado);

            break

        default:
            return alert("escola um valor certo burro ");



    }



}
