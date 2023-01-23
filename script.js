function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno =  document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fSex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        //res.innerHTML = `idade calculada: ${idade}`
        var genero = ""
        if(fSex[0].checked){
            genero = "Homen"
            if(idade>=0 && idade<=10){
                imagem.setAttribute('src','img/criançaH.jpg' )
            }else if(idade<21){
                imagem.setAttribute('src', 'img/JovemH.jpg')
            }else if(idade < 50){
                imagem.setAttribute('src', 'img/AdultoH.png')
            }else{
                imagem.setAttribute('src', 'img/Senhor.jpg')
            }
        }else if(fSex[1].checked){
            genero = "Mulher"
            if(idade>=0 && idade<=10){
                imagem.setAttribute('src','img/criançaM.jpg' )
            }else if(idade<21){
                imagem.setAttribute('src', 'img/JovemM.PNG')
            }else if(idade < 50){
                imagem.setAttribute('src', 'img/AdultoM.jpg')
            }else{
                imagem.setAttribute('src', 'img/Senhora.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(imagem)//Adiciona um nó ao final da lista de filhos de um nó pai especificado. 
    }
}