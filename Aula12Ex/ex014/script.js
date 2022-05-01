function carregar()
{
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')

    var data = new Date()
    //var hora = data.getHours()
    var hora = 18

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) 
    {
        document.body.style.background = '#5c7b90'
        imagem.src = 'images/manha.png'
    }
    else if(hora >= 12 && hora < 18)
    {
        document.body.style.background = '#ce7d3e'
        imagem.src = 'images/tarde.png'
    }
    else
    {
        document.body.style.background = '#033d7a'
        imagem.src = 'images/noite.png'
    }
}



