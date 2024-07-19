const continuar = ()=>{
  var alt = window.document.getElementById("alt").value /100
  var peso = window.document.getElementById("peso").value
  var alt1 = window.document.getElementById("alt")
  var peso1 = window.document.getElementById("peso")
  var res = window.document.getElementById("res")
  var calculo = (peso/(alt*alt)).toFixed(2)
  if(isNaN(calculo)){
    res.innerHTML = `<p>Por favor, digite seus dados corretamente.</p>`
    alt1.style.border = "1px solid red"
    peso1.style.border = "1px solid red"
  }else if (calculo < 18.5){
    res.innerHTML = `<p>Desnutrição</p><br><p>IMC = ${calculo}</p><br><p>IMC ideal é entre 18.5 e 24.9</p>`
  }else if(calculo >= 18.5 && calculo <24.9 ){
    res.innerHTML = `<p>Normal</p><br><p>IMC = ${calculo}</p><br><p>Seu peso está de acordo com o recomendado, parabéns!</p>`
  } else if (calculo >= 24.9 && calculo <= 30){
    res.innerHTML = `<p>Sobrepeso</p><br><p>IMC = ${calculo}</p><br><p>Seu IMC ideal é entre 18,5 a 24,9</p>`
  }else{
    res.innerHTML = `<p>Obesidade</p><br><p>IMC = ${calculo}</p><br><p>Seu IMC ideal é entre 18,5 a 24,9</p>`
}}
