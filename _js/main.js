//FUNÇOES QUE ALTERAM AS CORES DO LAYOUT
function layoutCor1() {
    document.getElementById('conteiner').style.backgroundColor = "#ffffff"
    document.getElementById('titulo-inicial').style.color = "#060606"
    var arrayButtons = document.getElementsByClassName('botao')
    arrayButtons[0].style.color = "#060606"
    arrayButtons[1].style.color = "#060606"
    arrayButtons[2].style.color = "#060606"

    var arrayLabels = document.getElementsByClassName('label-formulario')
    arrayLabels[0].style.color = "#060606"
    arrayLabels[1].style.color = "#060606"

    var botaoAdicionar = document.getElementById('botao-add')
    botaoAdicionar.style.backgroundColor = "#008479"

    var titlecomentario = document.getElementsByClassName('comentario')
    titlecomentario[0].style.color = "#060606"
    titlecomentario[1].style.color = "#060606"

    var rodape = document.getElementById('rodape')   
    rodape.style.backgroundColor = "#008479"
    rodape.style.color = "#fff"

    var btnDevs = document.getElementById('btn-devs')
    btnDevs.style.background = "#132347"
}

function layoutCor2() {
    document.getElementById('conteiner').style.backgroundColor = "#008479"
    document.getElementById('titulo-inicial').style.color = "#ffffff"
    var arrayButtons = document.getElementsByClassName('botao')
    arrayButtons[0].style.color = "#ffffff"
    arrayButtons[1].style.color = "#ffffff"
    arrayButtons[2].style.color = "#ffffff"
    var arrayLabels = document.getElementsByClassName('label-formulario')
    arrayLabels[0].style.color = "#ffffff"
    arrayLabels[1].style.color = "#ffffff"

    var botaoAdicionar = document.getElementById('botao-add')
    botaoAdicionar.style.backgroundColor = "#132347"

    var titlecomentario = document.getElementsByClassName('comentario')
    titlecomentario[0].style.color = "#ffffff"
    titlecomentario[1].style.color = "#ffffff"

    var rodape = document.getElementById('rodape')   
    rodape.style.backgroundColor = "#fff"
    rodape.style.color = "#060606"

    var btnDevs = document.getElementById('btn-devs')
    btnDevs.style.background = "#008479"

}

function layoutCor3() {
    document.getElementById('conteiner').style.backgroundColor = "#132347"
    document.getElementById('titulo-inicial').style.color = "#ffffff"
    var arrayButtons = document.getElementsByClassName('botao')
    arrayButtons[0].style.color = "#ffffff"
    arrayButtons[1].style.color = "#ffffff"
    arrayButtons[2].style.color = "#ffffff"
    var arrayLabels = document.getElementsByClassName('label-formulario')
    arrayLabels[0].style.color = "#ffffff"
    arrayLabels[1].style.color = "#ffffff"

    var botaoAdicionar = document.getElementById('botao-add')
    botaoAdicionar.style.backgroundColor = "#008479"

    var titlecomentario = document.getElementsByClassName('comentario')
    titlecomentario[0].style.color = "#ffffff"
    titlecomentario[1].style.color = "#ffffff"

    var rodape = document.getElementById('rodape')   
    rodape.style.backgroundColor = "#fff"
    rodape.style.color = "#060606"

    var btnDevs = document.getElementById('btn-devs')
    btnDevs.style.background = "#008479"

}

//COMANDOS DO -- TODO LIST
var id_dinamico = 1

function addElemento(){
    //Texto do topo da div - Elemento X
    var nome        = document.createTextNode(document.getElementById("nome").value)
    var qubraLinha  = document.createElement('br')

    //Texto da mensagem
    var paragrafo = document.createElement('p')
    paragrafo.style.fontFamily = 'Roboto'
    paragrafo.style.paddingTop = '15px'
    var mensagem  = document.createTextNode(document.getElementById("mensagem").value)
    paragrafo.appendChild(mensagem)
    
    if(mensagem.length >= 3 && nome.length >= 3){
           
        //Cria elemento novo(div) e seta os atributos
        var elemento = document.createElement('div')
        elemento.setAttribute('id',   'elemento'+ id_dinamico.toString())//***
        elemento.setAttribute('class','elemento')

        //Cria o botão REMOVER que será acoplado aquele elemento
        var botao     = document.createElement('button')
        var textBotao = document.createTextNode('Remover')
        botao.setAttribute('id', id_dinamico.toString())//***
        botao.setAttribute('class', 'button-rem')//***
        botao.appendChild(textBotao)

        //Função anônima do botão remover
        //***Como botao tem mesmo id da div, usa ele pra remover o elemento de id X
        botao.onclick = function(){
            document.querySelector('#elemento'+ this.id.toString()).remove()
        }

        elemento.appendChild(nome)
        elemento.appendChild(qubraLinha)
        elemento.appendChild(paragrafo)
        elemento.appendChild(qubraLinha)
        elemento.appendChild(botao)

        //Adicionando elemento 
        var divPrincipal = document.querySelector('#principal')
        divPrincipal.appendChild(elemento)

        id_dinamico++

        //Limpando campos
        var areaDeTexto = document.getElementById('mensagem')
        var areaNome = document.getElementById("nome")
        areaDeTexto.value = ""
        areaNome.value = ""
    } else {
            alert("O nome ou a mensagem estão incompletos.");
    }
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

/* COLORS
Verde: #008479
Blue: #132347
Black: #060606
Laranja: #feb14d
White
*/