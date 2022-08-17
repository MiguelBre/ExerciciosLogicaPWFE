'use strict'

function mostrarPositivo (){

    const numero1 = parseFloat(document.getElementById('numero1').value)
    const exbForm = document.getElementById('exb-form')
    let resultado = document.getElementById('result')

    if (exbForm.reportValidity()){
        if(numero1 < 0){
            resultado = numero1 * -1
        } else {
            resultado = numero1
        }
        result.innerHTML = `${resultado}`
    }
}

const calcular = document.getElementById('calc').addEventListener('click', mostrarPositivo)