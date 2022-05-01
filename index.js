//Funçao com todo o script
function start() {

    //Pegando o elemento canvas
    var c = document.getElementById("canvasId")
    var ctx = c.getContext("2d")

    //Pegando a tela do dispositivo
    c.height = window.innerHeight
    c.width = window.innerWidth

    //Definindo as letras q vao está percorrendo a tela
    var matrix = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%^&*()*&^%.,"

    //Transformando a string em um array de caracteres unicos
    matrix = matrix.split("")

    //Numero de colunas na tela para a chuva
    var font_size = 20
    var columns = c.width / font_size

    //Uma matriz com as gotas que vao cair, uma a uma. OBS: as gotas sao as letras q vao cair na tela 
    var drops = []

    //x é a coordenada x
    //1 = coordenada y da gota (inicialmente, todas as gotas começam em 1) 
    for (var x = 0; x < columns; x++)
        drops[x] = 1

    //Funçao q desenha os caracteres
    function draw() {

        ctx.fillStyle = "rgba(0, 0, 0, 0.04)"//Bg black para o canvas
        ctx.fillRect(0, 0, c.width, c.height)//Bg translucido para mostrar o caminho das gotas

        ctx.fillStyle = "#0f0"//Texto verde
        ctx.font = font_size + "px verdana"//fonte do texto

        //Looping para as gotas
        for (var i = 0; i < drops.length; i++) {

            //Pegando um caracter aleatorio para imprimir
            var text = matrix[Math.floor(Math.random() * matrix.length)]

            //x = i * font_size, y = valor do drops[i] * font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size)

            //Enviando a gota de volta para o topo aleatoriamente depois de cruzar a tela
            //Colocando uma aleatoriedade no reset das gotas, para fazer as gotas ficarem espalhadas no eixo Y
            if (drops[i] * font_size > c.height && Math.random() > 0.974)
                drops[i] = 0

            //Incrementando a coordenada Y
            drops[i]++
        }
    }
    setInterval(draw, 34)//Tempo de excuçao da funçao
}
window.addEventListener("load", start)//Chamando todo o script, quando a pag carregar
