const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConverted = document.querySelector(".currency-select-converted")



 async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor "Converter de"
    const currencyValueConverted = document.querySelector(".currency-value");  // Valor "Converter para"



 
   const data = await fetch(  " https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response =>response.json())
   const dolarToday = data.USDBRL.high
   const euroToday = data.EURBRL.high
   const bitcoinToday = data.BTCBRL.high
   const libraToday = data.GBPBRL.high
console.log(data)
    // Definir moeda de origem ("Converter de")
    let conversionRateFrom = 1; // Assumimos que seja Real (BRL) por padrão
    let currencyFrom = "BRL";

    if (currencySelectConverted.value == "dolar") {
        currencyFrom = "USD";
        conversionRateFrom = dolarToday;
    }
    if (currencySelectConverted.value == "euro") {
        currencyFrom = "EUR";
        conversionRateFrom = euroToday;
    }
    if (currencySelectConverted.value == "libra") {
        currencyFrom = "GBP";
        conversionRateFrom = libraToday;
    }
    if (currencySelectConverted.value == "bitcoin") {
        currencyFrom = "BTC";
        conversionRateFrom = bitcoinToday;
    }

    // Definir moeda de destino ("Converter para")
    let conversionRateTo = 1;
    let currencyTo = "BRL";

    if (currencySelect.value == "dolar") {
        currencyTo = "USD";
        conversionRateTo = dolarToday;
    }
    if (currencySelect.value == "euro") {
        currencyTo = "EUR";
        conversionRateTo = euroToday;
    }
    if (currencySelect.value == "libra") {
        currencyTo = "GBP";
        conversionRateTo = libraToday;
    }
    if (currencySelect.value == "bitcoin") {
        currencyTo = "BTC";
        conversionRateTo = bitcoinToday;
    }

    // 🔥 Se a moeda de origem for diferente de Real, primeiro convertemos para BRL
    let valueInReal = inputCurrencyValue;
    if (currencyFrom !== "BRL") {
        valueInReal = inputCurrencyValue * conversionRateFrom;
    }

    // 🔥 Atualiza o valor "Converter de" com a moeda correta
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyFrom
    }).format(inputCurrencyValue);

    // 🔥 Converte o valor para a moeda destino
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyTo
    }).format(valueInReal / conversionRateTo);
}









function changeCurrencyToConvert() {

    const currencyNameToConvert = document.querySelector(".currency-box:first-child .currency"); // Nome da moeda na aba "Converter de"
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert"); // Imagem da moeda na aba "Converter de"












    if (currencySelectConverted.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar Americano";
        currencyImageToConvert.src = "assets/estados-unidos (1) 1.png";
    }

    if (currencySelectConverted.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro";
        currencyImageToConvert.src = "assets/euro.png";
    }

    if (currencySelectConverted.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra";
        currencyImageToConvert.src = "assets/libra 1.png";
    }

    if (currencySelectConverted.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "Bitcoin";
        currencyImageToConvert.src = "assets/bitcoin 1.png";
    }

    if (currencySelectConverted.value == "real") {
        currencyNameToConvert.innerHTML = "Real";
        currencyImageToConvert.src = "assets/brasil 2.png";

    }





    convertValues();



}














function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano "
        currencyImage.src = "assets/estados-unidos (1) 1.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/euro.png"
    }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "assets/bitcoin 1.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "assets/brasil 2.png"
    }


    convertValues()




}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
currencySelectConverted.addEventListener("change", changeCurrencyToConvert)




