function Converter() {
  var valorInserido = document.querySelector('#valor').value
  var answer = document.querySelector('.answer')
  var currency = document.querySelector(
    'input[name = "currency"]:checked'
  ).value

  if (currency == 'dolar') {
    var valorConvertido = valorInserido * 5
    answer.textContent = 'O valor convertido é de R$' + valorConvertido
  } else {
    var valorConvertido = valorInserido * 10
    answer.textContent = 'O valor convertido é de R$' + valorConvertido
  }
}
