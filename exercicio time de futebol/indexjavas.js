function clicar() {
    var time = document.getElementById('time').value;
    var timem = time.toLowerCase();
    var res = document.getElementById('res');
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    switch (timem) {
        case 'vasco':
            res.innerHTML = 'Bem-vindo, vascaíno!'
            document.body.style.background = '#0D0D0D'
            img.setAttribute('src', 'imagens/vasco.png')
            break
        case 'flamengo':
            res.innerHTML = 'Bem-vindo, flamenguista!'
            document.body.style.background = '#C00009'
            img.setAttribute('src', 'imagens/flamengo.png')
            break
        case 'botafogo':
            res.innerHTML = 'Bem-vindo, botafoguense!'
            document.body.style.background = '#0D0D0D'
            img.setAttribute('src', 'imagens/botafogo.png')
            break
        case 'fluminense':
            res.innerHTML = 'Bem-vindo, fluminense!'
            document.body.style.background = '#9F022F'
            img.setAttribute('src', 'imagens/fluminense.png')
            break
        default:
            window.alert('[ERRO] Time inválido, tente novamente!')
            break
    }
    res.appendChild(img)
}

/* comentarios
1 - se no seu html tiver uma imagem src pode colocar apenas a var img = getelementbyid e nas alternativas o img.src = 'nome do arquivo.png' - VIDE EXERCICIO SITE 15
2 - se no seu arquivo html n tiver, vc tera que criar var img = document.createElement('img')
    img.setAttribute('id', 'foto') e nas opções colocar img.setattribute('src', 'nome do arquivo.png') e no final colocar o id.appendChild(img) - VIDE EXERCICIO SITE IDADE 16 */