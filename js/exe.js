'use strict'

function bhaskara (){

    const num1 = parseFloat(document.getElementById('numero1').value)
    const num2 = parseFloat(document.getElementById('numero2').value)
    const num3 = parseFloat(document.getElementById('numero3').value)
    const exeForm = document.getElementById('exe-form')
    let resultado = document.getElementById('result')

    if (exeForm.reportValidity()) {
        
        let delta = num2 ** 2 - 4 * num1 * num3

        if (delta < 0) {
            resultado = 'Não há solução'
            result.innerHTML = `${resultado}`
        }
        else if (delta > 0){
            resultado = 'Há duas possíveis soluções.'
            let formulama = ((num2 * -1) + Math.sqrt(delta))/ (2*num1)
            let formulame = ((num2 * -1) - Math.sqrt(delta))/ (2*num1)
            result.innerHTML = `${resultado} Raízes: ${formulama}, ${formulame} `
        } else{
            resultado = 'Existe apenas uma solução.'
            let formula = (num2 * -1) / (2*num1)
            result.innerHTML = `${resultado} Raíz: ${formula}`
        }

        console.log(resultado)
    }


}
const calcular = document.getElementById('calc').addEventListener('click', bhaskara)