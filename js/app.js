'use strict'

function mostrarResultado (){

    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    const exaForm = document.getElementById('exa-form')
    let resultado = document.getElementById('result')

    if(exaForm.reportValidity()){
        if(numero1 < numero2){
            resultado = numero2 - numero1;
        } else {
            resultado = numero1 - numero2;
        }
        result.innerHTML = `${resultado}`
    }
}

const calcular = document.getElementById('calc').addEventListener('click', mostrarResultado)
// document.getElementById('calcular').addEventListener('click', mostrarResultado)