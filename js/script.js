function converterTemperatura() {
  var temperaturaInput = document.getElementById('temperature');
  var unidadeSelect = document.getElementById('unit');
  var resultadoLabel = document.getElementById('result');

  var temperatura = parseFloat(temperaturaInput.value);

  if (isNaN(temperatura)) {
    resultadoLabel.textContent = 'Por favor, insira um valor válido.';
    return;
  }

  var unidadeOrigem = unidadeSelect.value;
  var unidadeDestino = (unidadeOrigem === 'celsius') ? 'fahrenheit' : 'celsius';

  var resultado = (unidadeOrigem === 'celsius') ? celsiusParaFahrenheit(temperatura) : fahrenheitParaCelsius(temperatura);

  resultadoLabel.textContent = `Resultado em ${unidadeDestino}: ${resultado.toFixed(2)} º`;
}

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
