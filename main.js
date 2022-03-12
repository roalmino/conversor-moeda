function Converter() {
  var valorInserido = document.querySelector('#valor').value
  var answer = document.querySelector('.answer')
  var currency = document.querySelector(
    'input[name = "currency"]:checked'
  ).value
  var valorBitcoin = (valorInserido / 198509.56).toFixed(6)
  if (currency == 'dolar') {
    var valorConvertido = (valorInserido / 5.08).toFixed(2)

    answer.textContent = `O valor convertido é de US${valorConvertido} ou ${valorBitcoin} bitcoins`
  } else {
    var valorConvertido = (valorInserido / 5.54).toFixed(2)
    answer.textContent = `O valor convertido é de €${valorConvertido} ou ${valorBitcoin} bitcoins`
  }
}
