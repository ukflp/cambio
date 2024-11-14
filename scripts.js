const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-img");
const inputCurrencyElement = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

const dolarToday = 5.81;
const euroToday = 6.13;

function convertValues() {
   // Garantir que o valor da moeda de entrada seja convertido para número
   const inputCurrencyValue = parseFloat(inputCurrencyElement.value);

   // Verificar se o valor de entrada é um número válido
   if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
   }

   // Exibição do valor original em Real
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue);

   // Conversão para Dólar ou Euro
   let convertedValue = 0;
   let currencyStyle = {};
   let currencyCode = "";

   if (currencySelect.value === "dolar") {
      convertedValue = inputCurrencyValue / dolarToday;
      currencyStyle = { style: "currency", currency: "USD" };
      currencyCode = "USD";
   } else if (currencySelect.value === "euro") {
      convertedValue = inputCurrencyValue / euroToday;
      currencyStyle = { style: "currency", currency: "EUR" };
      currencyCode = "EUR";
   }

   // Exibição do valor convertido
   currencyValueConverted.innerHTML = new Intl.NumberFormat(currencyCode === "USD" ? "en-US" : "de-DE", currencyStyle).format(convertedValue);
}

function changeCurrency() {
   if (currencySelect.value === "dolar") {
      currencyName.innerHTML = "Dólar americano";
      currencyImage.src = "./assets/estados-unidos (1) 1.png";
   } else if (currencySelect.value === "euro") {
      currencyName.innerHTML = "Euro";
      currencyImage.src = "./assets/euro.png";
   }

   // Chama a função de conversão quando o tipo de moeda é alterado
   convertValues();
}

// Adicionar os eventos de 'change' para o seletor de moeda e 'click' para o botão de conversão
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

// Inicializa a página com a moeda e valores padrão
document.addEventListener("DOMContentLoaded", changeCurrency);
