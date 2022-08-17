'use strict'

function ordenar (){

    const num1 = parseFloat(document.getElementById('numero1').value)
    const num2 = parseFloat(document.getElementById('numero2').value)
    const num3 = parseFloat(document.getElementById('numero3').value)
    const num4 = parseFloat(document.getElementById('numero4').value)
    const num5 = parseFloat(document.getElementById('numero5').value)
    const exiForm = document.getElementById('exi-form')
    let maior;
    let menor;
    let resultado = document.getElementById('result')

    if (exiForm.reportValidity()) {
        maior = Math.max(num1, num2, num3, num4, num5)
        menor = Math.min(num1, num2, num3, num4, num5)

        result.innerHTML = `esse é o maior número: ${maior} e esse é o menor: ${menor}`
    }
}
const calcular = document.getElementById('calc').addEventListener('click', ordenar)