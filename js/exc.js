'use strict'

function media (){

    const nota1 = parseFloat(document.getElementById('numero1').value)
    const nota2 = parseFloat(document.getElementById('numero2').value)
    const nota3 = parseFloat(document.getElementById('numero3').value)
    const nota4 = parseFloat(document.getElementById('numero4').value)
    const excForm = document.getElementById('exc-form')
    let resultado = document.getElementById('result')

    if (excForm.reportValidity()) {
        
        let media = (nota1 + nota2 + nota3 + nota4 )/ 4
        if (media < 5) {
            resultado = 'reprovado'
        }
        else{
            resultado = 'aprovado'
        }

        result.innerHTML = `${resultado} media final: ${media}`
    }


}
const calcular = document.getElementById('calc').addEventListener('click', media)