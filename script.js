let botao = document.getElementById("botao")
let select = document.getElementById("select")


function conversor(){
    let Resposta = document.getElementById("resultado")
    let inputValor = Number(document.getElementById("input").value)
    let ValorFinal
    console.log(inputValor)
    if(select.value === "Binário"){

     ValorFinal = parseInt(inputValor.toString(2),10)
    }
   else if(select.value === "Decimal")
   ValorFinal = parseInt(inputValor,2)

  if( Number.isNaN(ValorFinal) == true)
  ValorFinal = inputValor

  if(Number.isNaN(inputValor) == true)
  ValorFinal = "Não é um número. <br> Favor digitar um valor válido!"

   Resposta.innerHTML = ValorFinal
}

botao.addEventListener("click",conversor)
