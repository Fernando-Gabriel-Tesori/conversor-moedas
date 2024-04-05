const convertButton = document.querySelector(".convert-button");

const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValue = document.querySelector(".currency-value");

  console.log(currencySelect.value);
  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value === "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value === "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValue.innerHTML = inputCurrencyValue;
  currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue);

  console.log(convertValues);
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  
  const currencyImg = document.querySelector(".currency-img")
  
  if (currencySelect.value =="dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = "./img/dolar.jpg"
  }
  
  if (currencySelect.value =="euro"){
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./img/euro.jpg"
    
    convertValues()
  }
}

currencySelect.addEventListener("change",
changeCurrency)

convertButton.addEventListener("click", convertValues) 