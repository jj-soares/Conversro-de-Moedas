

let select = document.getElementById("select-moedas")
let botao = document.getElementById("botao")



async function converterMoedas() {

    let moedas = await fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL`).then(function (resposta) {
        return resposta.json()

    })
let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high
console.log (dolar)
console.log (euro)



    let inputValorEmReal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-Moedas")
    let textoReal = document.getElementById("testo-real")

    if (select.value === "U$ Dolar Americano") {
        let valorEmDolares = inputValorEmReal / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    }
    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReal / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: `EUR` })



    }


    textoReal.innerHTML = inputValorEmReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
//essa funçao e responsavel por trocar bandeira e nome das moedas.
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-Moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if (select.value === "U$ Dolar Americano") {
        textoMoedas.innerHTML = ("Dolar Americano")
        bandeiraMoedas.src = "./IMG/estados-unidos (1) 1.png"

    }


    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = ("Euro")
        bandeiraMoedas.src = "./IMG/Design sem nome 2.png"

    }

    converterMoedas()


}


botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)








