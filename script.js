var  variavelGlobal = 0




function calcular(){

    var a = 60 //preço do manga
    var b = 50 //taxa
    calculo = a + b
    document.getElementById('din2').innerHTML=`aumento de taxa: ${b.toFixed(2)} `
    document.getElementById('din1').innerHTML=`preço a pagar: R$ ${calculo.toFixed(2)}`
    variavelGlobal=variavelGlobal+calculo
    document.getElementById('resultado').innerHTML=` R$ ${variavelGlobal.toFixed(2)}  `
}
function calcular2(){

    var a = 69 //preço do manga
    var b = 50 //taxa
    calculo = a + b
    document.getElementById('din22').innerHTML=`aumento de taxa: ${b.toFixed(2)} `
    document.getElementById('din11').innerHTML=`preço a pagar: R$ ${calculo.toFixed(2)}`
    variavelGlobal=variavelGlobal+calculo
    document.getElementById('resultado').innerHTML=`R$ ${variavelGlobal.toFixed(2)}  `
}
function calcular3(){

    var a = 90 //preço do manga
    var b = 50 //taxa
    calculo = a + b
    document.getElementById('din222').innerHTML=`aumento de taxa: ${b.toFixed(2)} `
    document.getElementById('din111').innerHTML=`preço a pagar: R$ ${calculo.toFixed(2)}`
    variavelGlobal=variavelGlobal+calculo
    document.getElementById('resultado').innerHTML=` R$ ${variavelGlobal.toFixed(2)}  `
}

//pagamento



function apertar(){
    cartaoo.style.display='block'
    pixx.style.display='none'
}
function apertar1(){
    pixx.style.display='block'
    cartaoo.style.display='none'
}