function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()

    var txtAno = document.getElementById('txtAno')
    var resultado = document.querySelector('div#resultado')

    if (txtAno.value.length == 0 || txtAno.value > ano) 
    {
        alert(`[Error] Verifique os dados e tente novamente`)
    }
    else
    {
        var radSexo = document.getElementsByName('radSexo')
        var idade = ano - Number(txtAno.value)

        var imgFoto = document.createElement('img')
        imgFoto.setAttribute('id','imgFoto')

        if (radSexo[0].checked) 
        {
            genero = 'Homem'

            if (idade > 0 && idade < 10) 
            {
                imgFoto.src = 'images/crianca-masculino.png'
            }
            else if (idade < 21) 
            {
                imgFoto.src = 'images/jovem-masculino.png'
            }
            else if (idade < 50) 
            {
                imgFoto.src = 'images/adulto-masculino.png'
            }
            else
            {
                imgFoto.src = 'images/idoso-masculino.png'
            }
        }
        else if (radSexo[1].checked) 
        {
            genero = 'Mulher'

            if (idade > 0 && idade < 10) 
            {
                imgFoto.src = 'images/crianca-feminino.png'
            }
            else if (idade < 21) 
            {
                imgFoto.src = 'images/jovem-feminino.png'
            }
            else if (idade < 50) 
            {
                imgFoto.src = 'images/adulto-feminino.png'
            }
            else
            {
                imgFoto.src = 'images/idoso-feminino.png'
            }
        }
        
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(imgFoto)
    }
}