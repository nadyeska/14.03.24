const posicaoSuperioInicial = 70,
      posicaoEsquerdaInicial = 70,
      posicaoSuperioFinal = 70,
      posicaoEsquerdaFinal = 500,
      anguloInicial = 0,
      anguloFinal = 360,
      imgAvatar = document.getElementById('imgAvatar'),
      styleAvatar = window.getComputedStyle(imgAvatar);

var posicaoSuperior = 50,
    posicaoEsquerda = 50,
    topAvatar,
    leftAvatar;
    anguloAvatar = 0,

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";
imgAvatar.style.transform = "rotate("+ anguloAvatar +"deg)";

function getTopStyle(elementToGet){
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(stleElement.getPropertyValue('top').replace("px",''));
}

function getLeftStyle(elementToGet){
    let styleElement = window.getComputedStyle(element);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda(){
    console.clear();
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
        posicaoEsquerda -= parseInt(txtPixel.value)
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda.Tente outro botão.");
    }
    console.log("Posição do avatar á esquerda:", imgAvatar.style.left);
}

function moverParaDireita() {
    console.clear();
    console.log("Posição do avatar à direita antes:",imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if(leftAvatar < posicaoEsquerdaFinal) {
      posicaoEsquerda += parseInt(txtPixel.value);
      if (posicaoEsquerda > posicaoEsquerda) {
          posicaoEsquerda = posicaoEsquerdaFinal;
      }
      imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
      console.error("Ops! Chegou ao limite não é possível mais mover para direita.Tente outro botão.");
    }
    console.log("Posicao do avatar á esquerda depois:", imgAvatar.style.left);
    }
    
    function moverParaCima() {
    console.clear();
    console.log("Posição superior do avatar antes:", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar > posicaoSuperioInicial) {
      posicaoSuperior -= parseInt(txtPixel.value);
      if (posicaoSuperior < posicaoSuperioInicial) {
          posicaoSuperior = posicaoSuperioInicial;
      }
      imgAvatar.style.top =posicaoSuperior + "px";
    } else {
      console.error("Ops! Chegou ao limite e não é possível mais mover para cima.Tente outro botão.");
    }
    console.log("Posição superior do avatar depois:", imgAvatar.style.top);
    }
    
    function moverParaBaixo(){
    console.clear();
    console.log("Posição superior do avatar antes:", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar < posicaoSuperioFinal) {
      posicaoSuperior += parseInt(txtPixel.value);
      if (posicaoSuperior > posicaoSuperioFinal) {
          posicaoSuperior = posicaoSuperioFinal;
      } imgAvatar.style.top = posicaoSuperior + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para baixo.Tente outro botão.");
    }
    console.log("Posição superior do avatar depois:", imgAvatar.style.top);
    }
    
    function girarHorario(){
    console.clear();
    console.log("Ângulo do avatar antes:", anguloAvatar + "deg");
    if (anguloAvatar < anguloFinal) {
      anguloAvatar += parseInt(txtPixel.value);
      if (anguloAvatar > anguloFinal) {
          anguloAvatar = anguloFinal;
      }
      imgAvatar.style,transform = "rotate("+ anguloAvatar +" deg)";
    } else {
      console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.");
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
    }
    
    function girarAntiHorario(){
    console.clear();
    console.log("Ângulo do avatar antes:", anguloAvatar + "deg");
    if (anguloAvatar > anguloInicial) {
      anguloAvatar -= parseInt(txtPixel.value);
      if (anguloAvatar < anguloInicial) {
          anguloAvatar = anguloInicial;
      }
      imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
      console.error("Ops! Chegou ao limite e não é possível mais girar no sentido anti-horário. Tente outro botão.");
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
    }
     function deslizar() {
        var image = document.getElementById('slideImage');
        var containerWidth = document.querySelector('.container').offsetWidth;
      
        // Iniciar a imagem fora da tela
        image.style.left = '-100%';
      
        // Função para animar o slide
        function slideImage() {
          // Animação da esquerda para a direita
          image.style.left = (containerWidth - image.width) + 'px';
      
          // Reverter para a posição inicial após um atraso
          setTimeout(function() {
            image.style.left = '-100%';
          }, 2000); // ajuste conforme necessário
        }
      
        // Chamar a função de animação quando a página carregar
        slideImage();
      
        // Chamar a função de animação novamente após um intervalo
        setInterval(slideImage, 4000); // ajuste conforme necessário
      }