//Carne - 400gr por pessoa, porém se for + de 6 horas de festa - 650
//Cerveja = 1200 ml por pessoa, porém se for + de 6 horas de festa - 2000ml
//Refrigerante/agua - 1000ml por pessoa, porém se for + de 6 horas de festa - 1500ml
//Crianças valem por 0,5 ou 1/2

let inputAdultos = document.getElementById("adultos");

let inputCriancas = document.getElementById("criancas");

let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular (){

    console.log("calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qtdTotalCerveja = cervejaPP(duracao) * adultos
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} Pet's 2 litros de Bebidas</p>`


    console.log(qtdTotalCarne)
    console.log(qtdTotalCerveja)
    console.log(qtdTotalBebida)
}

function carnePP (duracao) {

    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }

}
    function cervejaPP (duracao) {

        if (duracao >= 6) {
            return 2000;
        }
        else {
            return 1200;
        }
    }

    function bebidaPP (duracao) {

        if (duracao >= 6) {
            return 1500;
        }
        else {
            return 1000;
        }
    }