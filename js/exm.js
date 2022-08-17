'use strict'

function ordenar (){

    const nome = document.getElementById('nome').value
    const sexo = document.getElementById('sexo').value.toUpperCase()
    const exiForm = document.getElementById('exm-form')

    let resultado = document.getElementById('result')

    if (exiForm.reportValidity()) {
        
        if (sexo == 'M' || sexo == 'F') {
            if (sexo == 'M') {
                result.innerHTML = `Iilmo. Sr. ${nome}`
            }else{
                result.innerHTML = `Iilma. Sra. ${nome}`
            }
        }else{
            result.innerHTML = `O sexo ${sexo} é inválido`
        }

    
    }
}
const calcular = document.getElementById('calc').addEventListener('click', ordenar)