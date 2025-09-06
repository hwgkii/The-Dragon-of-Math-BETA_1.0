var floresta;
var bg;
var tela = 0;
var nome = "";
var angelpfp;
var fontMed;
var eu;
var fasesBG;
var bgSnd;
var sndClick;

var aquiles;
var orivaldo;

// var das cartas - f1
var a1, a2, a3; // pergunta
var back;
var b1, b2, b3; // respostas

// var das cartas - f2
var c1, c2, c3; // perguntas
var d1, d2, d3; // respostas

var life = 3;
var heart;

//tela 0 menu
//tela 1 iniciar
//tela 2 inicio da jordana
//tela 3 escolha sua fase parte 1
//tela 4 instruções
//tela 5 creditos
//tela 6 fase 1


function preload(){
  
  bg = loadImage("bg_jogo2.png");
  floresta = loadImage("floresta.jpg");
  angelpfp = loadImage("angel_pfp.png");
  
  fontMed = loadFont('UncialAntiqua-Regular.ttf');
  
  eu = loadImage("eu.png");
  fasesBG = loadImage("fases.png");
  aquiles = loadImage("aquiles.png");
  orivaldo = loadImage("orivaldo.jpg");
  
  
  soundFormats('mp3', 'wav');
  bgSnd = loadSound("medieval_opener.mp3");
  sndClick = loadSound("click.wav");
  
  heart = loadImage("heart.png");
  
  // cartas da fase 1
  a1 = loadImage('/cartas_1/a1.jpeg');
  a2 = loadImage('/cartas_1/1.jpeg');
  a3 = loadImage('/cartas_1/0.jpeg');
  back = loadImage('/cartas_1/back.jpeg');
  b1 = loadImage('/cartas_1/b_1.jpeg');
  b2 = loadImage('/cartas_1/b_2.jpeg');
  b3 = loadImage('/cartas_1/b_3.jpeg');
  
  // cartaas da fase 2
  c1 = loadImage('/cartas_2/c1.png');
  c2 = loadImage('/cartas_2/c2.png');
  c3 = loadImage('/cartas_2/c3.png');
  d1 = loadImage('/cartas_2/d1.png');
  d2 = loadImage('/cartas_2/d2.png');
  d3 = loadImage('/cartas_2/d3.png');
  
}

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  
  bgSnd.setVolume(0.2);
  bgSnd.play();
  bgSnd.onended(repitirSnd);
}

function repitirSnd(){
  bgSnd.play();
} 

function draw() {
  background("#38325e");
  
  
  if (tela == 0){
    background(bg);
    
    if (mouseX > 325 && mouseX < 475 && mouseY > 275 && mouseY < 325){
    fill(255); // branco sólido
  } else {
    fill(255, 255, 255, 200); // branco transparente
  }
  
  noStroke()
  rect(400, 300, 150, 50, 25); // botão "Iniciar"
  
  fill(0);
  textFont('Comic Sans MS');
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Iniciar", 400, 300);
  
 if (mouseX > 325 && mouseX < 475 && mouseY > 344 && mouseY < 395){
    fill(255); // branco sólido
  } else {
    fill(255, 255, 255, 200); // branco transparente
  }
    
  var ydois = (600/2) + (50/2) + 20 + (50 / 2);
    
  rect(800/2, ydois, 150, 50, 25);
  
  fill(0);
  textSize(20);
  text("Instruções", 800/2, ydois);
    
  
  if (mouseX > 325 && mouseX < 475 && mouseY > 416 && mouseY < 464){
    
    fill(255);
    
  }  else {
    
    fill(255, 255, 255, 200);
    
  }
    
  var ytres = ydois + (50 / 2) + 20 + (50/2);
    
  rect(400, ytres, 150, 50,  25);
  fill(0);
  textSize(20);
  text("Créditos", 800/2, ytres);
  
  fill(255)
  rect(70, 570, 60, 20, 25);
  textSize(15);
  fill(0);
  text("Som",70, 570);
    
    
  fill(0);
  textSize(10);
  text(mouseX + " " + mouseY, 20, 20);
    
  } else if (tela == 1){
   
    
    background("#38325e");
    fill(255);
    rect(750, 30, 80, 30, 25);
    textAlign(CENTER, CENTER);
    fill(0)
    textSize(20);
    text("Voltar", 750, 30);
    
    
    // tutorial
    
    fill(255);
    rect(800/2, 600/2, 700, 400, 50);
    textAlign(CENTER, CENTER);
    fill (0);
    textSize(30);
    text("Como jogar?", 400, 155);
    textSize(20);
    text("01 - Olhe as cartas do inimigo e perceba que há uma com pergunta" + "\n" + "02 - Calcule o valor que se pede na carta do inimigo" + "\n" + "03 - Escolha entre suas cartas o resultado referente a carta do inimigo", 400, 220);
    
    textSize(30);
    text("CUIDADO !", 400, 300);
    textSize(20)
    text("Se selecionar a carta errada, perderá uma vida (vida total = 3)." + "\n" + "Caso perca todas as vidas, voltará ao inicio.", 400, 340);
    
    // Continuar
    
    fill(0);
    rect(670, 470, 100, 30, 25);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Continuar", 670, 470);
    
    
    textSize(10);
    text(mouseX + " " + mouseY, 20, 20);
    
  } else if (tela == 2){
    imageMode(CORNER);
    
    background(floresta);
    fill(0, 0, 0, 200);
    rect(400,300, 800, 600);
    
    
    noStroke();
    fill("#363636");
    rect(400, 500, 800, 200);
    
     textAlign(CENTER, CENTER);
    fill(255);
    textSize(20);
    text("Angel", 232, 430);
    
    imageMode(CENTER);
    image(angelpfp,100, 500);
    
    textAlign(LEFT, CENTER);
    textSize(18);
    text("Antes de iniciar a jornada contra o Dragão da Matemática, preciso saber o nome de quem está disposto a seguir em frente. Então, como se chama?" , 405, 495, 400);
    textSize(22);
    text("→", 205, 560);
    textSize(18);
    text(nome, 235, 560);
    
    imageMode(CORNER);
    
  } else if (tela == 3){
 // distribuição das fases p. 1
  background("#38325e");
    
    fill(255);
    rect(750, 30, 80, 30, 25);
    textAlign(CENTER, CENTER);
    fill(0)
    textSize(20);
    text("Voltar", 750, 30);
    
    noStroke();
    fill("#363636");
    rect(400, 500, 800, 200);
    
    textFont('Comic Sans MS');
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(20);
    text("Angel", 232, 430);
    
    imageMode(CENTER);
    image(angelpfp,100, 500);
    
    textAlign(LEFT, CENTER);
    textSize(18);
    text("Certo, " + nome + ", agora vamos iniciar sua jordanada. Escolha a fase 1 para que toda a magia comece!" , 405, 495, 400);
    
    fill(255);
    rect(400, 200, 40, 40);
    fill("#d4af37");
    textAlign(CENTER, CENTER);
    textFont(fontMed);
    textSize(40);
    text("1", 400, 190);
    
    imageMode(CORNER);
    
    textFont('Comic Sans MS');
    fill(255);
    textSize(10);
    text(mouseX + " " + mouseY, 20 ,20)
  } else if (tela == 4){
    // instruções
    background("#38325e");
    fill(255, 255, 255, 255);
    rect(750, 30, 80, 30, 25);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    text("Voltar", 750, 30);
    
    fill(255);
    rect(800/2, 600/2, 700, 400, 50);
    textAlign(CENTER, CENTER);
    fill (0);
    textSize(30);
    text("Instruções", 400, 155);
    textSize(20);
    text("ANO: O jogo é recomendado para alunos do 1º ao 3º ano do ensino fundamental." + "\n" + "MATEMÁTICA: EF01MA08, EF02MA05, EF03MA05.", 400, 225, 500);
    
    textSize(30);
    text("RESUMO", 400, 320);
    textSize(20)
    text("O jogo tem como objetivo reforçar os cálulos de adição e subtração utilizando um sistema de batalha de cartas no estilo medieval.", 400, 390, 500);
    
} else if (tela == 5){
  // creditos
    background("#38325e");
    fill(255);
    rect(750, 30, 80, 30, 25);
    textAlign(CENTER, CENTER);
    textFont('Comic Sans MS');
    fill(0);
    textSize(20);
    text("Voltar", 750, 30);
  
    imageMode(CENTER);
  
    //eu
    textSize(35);
    textFont(fontMed);
    fill("#d4af37");
    text("PROGRAMADORA:", 250, 70);
    textAlign(LEFT, CENTER);
    fill(255);
    textSize(20);
    textFont("Comic Sans MS");
    text("Ylanna Lima" + "\n" + "- Estudadente de C&T" + "\n" + "- Tec. em Redes de Computadores" + "\n" + "Turma:03D", 270, 150, 400);
  
  //professores
    
    textAlign(CENTER, CENTER);
    textFont(fontMed);
    textSize(35);
    fill("#d4af37");
    text("EDUCADORES:", 400, 300);
  
    image(aquiles, 250, 440, 150, 200);
    textAlign(CENTER, CENTER);
    textSize(35);
    fill(255);
    textSize(15);
    textFont("Comic Sans MS");
    text("Prof. Dr. Aquiles Burlamaqui", 250, 555, 400);
  
    image(orivaldo, 550, 440, 150, 200);
    textAlign(CENTER, CENTER);
    textSize(35);
    fill(255);
    textSize(15);
    textFont("Comic Sans MS");
    text("Prof. Dr. Orivaldo Santana", 550, 555, 400);
  
  imageMode(CORNER);
  
} else if (tela == 6) {
  // fase 1
  
  if (life == 0){
    tela = 30; //tela de perdeu
  } else {
  
  imageMode(CORNER);
  background(fasesBG, 800, 600);
  imageMode(CENTER);
  
  image(a1, 400, 105, 150, 200);
  image(back, 240, 105, 150, 200);
  image(back, 560, 105, 150, 200);
  
  image(b1, 240, 495, 150, 200);
  image(b2, 400, 495, 150, 200);
  image(b3, 560, 495, 150, 200);
  
  if (life == 3){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
    image(heart, 709, 30);
  } else if (life == 2){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
  } else if (life == 1){
    imageMode(CORNER);
    image(heart, 665, 30);
  }
  
  
    fill(255);
    textSize(10);
    text(mouseX + " " + mouseY, 20 ,20)
  }
  
} else if (tela == 7){
// fase 1 parte 2
  
  if (life == 0){
    tela = 30;
  } else {
  imageMode(CORNER);
  background(fasesBG, 800, 600);
  imageMode(CENTER);
  
  //vilao
  image(a2, 240,105,150,200);
  image(back, 560, 105, 150, 200);
  
  //heroi
  image(b2, 400,495,150,200);
  image(b3, 560, 495, 150, 200);
    
    if (life == 3){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
    image(heart, 709, 30);
  } else if (life == 2){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
  } else if (life == 1){
    imageMode(CORNER);
    image(heart, 665, 30);
  }
  
  fill(255);
  textSize(10);
  text(mouseX + " " + mouseY, 20 ,20);
  }
} else if (tela == 8){
// fase 1 parte 3
  
  if (life == 0){
    tela = 30;
  } else {
  
  imageMode(CORNER);
  background(fasesBG, 800, 600);
  imageMode(CENTER);
  
  //vilao
  image(a3, 400,105,150,200);
  
  //heroi
  image(b2, 400,495,150,200);
    
  if (life == 3){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
    image(heart, 709, 30);
  } else if (life == 2){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
  } else if (life == 1){
    imageMode(CORNER);
    image(heart, 665, 30);
  }
  
  
  fill(255);
  textSize(10);
  text(mouseX + " " + mouseY, 20 ,20);
  
  }
} else if(tela == 9){
  //escolha de fase 2
  
  background("#38325e");
    
    fill(255);
    rect(750, 30, 80, 30, 25);
    textAlign(CENTER, CENTER);
    fill(0)
    textSize(20);
    text("Voltar", 750, 30);
    
    noStroke();
    fill("#363636");
    rect(400, 500, 800, 200);
    
  
    //angel
    textFont('Comic Sans MS');
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(20);
    text("Angel", 232, 430);
    
    imageMode(CENTER);
    image(angelpfp,100, 500);
    
    textAlign(LEFT, CENTER);
    textSize(18);
    text("Perfeito, " + nome + ", vi que você entendeu bem em como pecorrer essa jornanda. Continue assim!" , 405, 495, 400);
    
  
    //fases
    fill(255);
    rect(350, 200, 40, 40);
    fill("#d4af37");
    textAlign(CENTER, CENTER);
    textFont(fontMed);
    textSize(40);
    text("1", 350, 190);
  
    fill(255);
    rect(450, 200, 40, 40);
    fill("#d4af37");
    textAlign(CENTER, CENTER);
    textFont(fontMed);
    textSize(40);
    text("2", 450, 190);
    
    imageMode(CORNER);
    
    textFont('Comic Sans MS');
    fill(255);
    textSize(10);
    text(mouseX + " " + mouseY, 20 ,20)
  
} else if (tela == 10){
  //fase 2
  
  if (life == 0){
    tela = 30;
  } else {
    
    imageMode(CORNER);
    background(fasesBG, 800, 600);
    imageMode(CENTER);
  
    image(c1, 240, 105, 150, 200);
    image(back, 400, 105, 150, 200);
    image(back, 560, 105, 150, 200);
  
    image(d3, 240, 495, 150, 200);
    image(d1, 400, 495, 150, 200);
    image(d2, 560, 495, 150, 200);
  
    if (life == 3){
     imageMode(CORNER);
     image(heart, 665, 30);
     image(heart, 687, 30);
     image(heart, 709, 30);
   } else if (life == 2){
     imageMode(CORNER);
     image(heart, 665, 30);
     image(heart, 687, 30);
   } else if (life == 1){
     imageMode(CORNER);
     image(heart, 665, 30);
   }
  
  fill(255);
  textSize(10);
  text(mouseX + " " + mouseY, 20 ,20)
  }
} else if (tela == 11){
  // fase 2 parte 2
  
  if (life == 0){
    tela = 30;
  } else {
    
  imageMode(CORNER);
  background(fasesBG, 800, 600);
  imageMode(CENTER);
  
  //vilao
  image(back, 240,105,150,200);
  image(c3, 560, 105, 150, 200);
  
  //heroi
  image(d3, 400,495,150,200);
  image(d2, 560, 495, 150, 200);
    
  if (life == 3){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
    image(heart, 709, 30);
  } else if (life == 2){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
  } else if (life == 1){
    imageMode(CORNER);
    image(heart, 665, 30);
  }
  
  fill(255);
  textSize(10);
  text(mouseX + " " + mouseY, 20 ,20);
  }
} else if (tela == 12){
// fase 2 parte 3  
if (life == 0){
    tela = 30;
  } else {
  
  imageMode(CORNER);
  background(fasesBG, 800, 600);
  imageMode(CENTER);
  
  //vilao
  image(c2, 240,105,150,200);
  
  //heroi
  image(d2, 560,495,150,200);
    
  if (life == 3){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
    image(heart, 709, 30);
  } else if (life == 2){
    imageMode(CORNER);
    image(heart, 665, 30);
    image(heart, 687, 30);
  } else if (life == 1){
    imageMode(CORNER);
    image(heart, 665, 30);
  }
  
  
  fill(255);
  textSize(10);
  text(mouseX + " " + mouseY, 20 ,20);
  
  }
} else if (tela == 13){
  // escolha de fase p. 3
  background("#38325e")
} else if (tela == 30){
  //tela de perdeu
  background("#38325e")
    
  fill("#e14b4b");
  textSize(50);
  textFont(fontMed);
  text("VOCÊ PERDEU! :(", 400, 300);
  
  fill(255);
  textSize(20);
  textFont("Comic Sans MS");
  text("clique em ENTER pra continuar", 400, 370);

} else if (tela == 31){
  //tela de ganhou para fase 1
  
  background("#38325e")
    
  fill("#4ecb8f")
  textSize(50);
  textFont(fontMed);
  text("VOCÊ GANHOU!", 400, 300);
  
  fill(255);
  textSize(20);
  textFont("Comic Sans MS");
  text("clique em ENTER pra continuar", 400, 370);
  
} else if (tela == 32){
  // tela de ganhou para fase 2
  background("#38325e")
    
  fill("#4ecb8f")
  textSize(50);
  textFont(fontMed);
  text("VOCÊ GANHOU!", 400, 300);
  
  fill(255);
  textSize(20);
  textFont("Comic Sans MS");
  text("clique em ENTER pra continuar", 400, 370);
  
}
}
//funções dos cliques do mouse
function mouseClicked(){
   if (tela == 0){
    if (mouseX > 325 && mouseX < 475 && mouseY > 275 && mouseY < 325){
      console.log("clicou em INICIAR")
      tela = 1;
      sndClick.play()
    } else if (mouseX > 325 && mouseX < 475 && mouseY > 344 && mouseY < 395) {
      console.log("clicou em INSTRUÇÕES");
      tela = 4;
      sndClick.play()
    } else if (mouseX > 325 && mouseX < 475 && mouseY > 416 && mouseY < 464){
      console.log("clicou em CRÉDITOS");
      tela = 5;
      sndClick.play()
    } else if (mouseX > 40 && mouseX < 95 && mouseY > 560 && mouseY < 580){
      bgSnd.setVolume(0.0);
      sndClick.play()
    }
  } else if (tela == 1){   
    if (mouseX > 710 && mouseX < 790 && mouseY > 15 && mouseY < 45) {
      tela = 0; // botao de voltar
      sndClick.play()
    } else if (mouseX > 620 && mouseX < 720 && mouseY > 455 && mouseY < 483){
      tela = 2; // continuar
      sndClick.play()
    }
  } else if (tela == 3) {
    if (mouseX > 380 && mouseX < 420 && mouseY > 180 && mouseY < 220){
      tela = 6;
      sndClick.play()
    } else  if (mouseX > 710 && mouseX < 790 && mouseY > 15 && mouseY < 45) {
      tela = 0; // botao de voltar
      sndClick.play()
    }
  } else if (tela == 4){
    
     if (mouseX > 710 && mouseX < 790 && mouseY > 15 && mouseY < 45) {
      tela = 0; // botao de voltar
       sndClick.play()
    }
  } else if (tela == 5){
    
   if (mouseX > 710 && mouseX < 790 && mouseY > 15 && mouseY < 45) {
      tela = 0; // botao de voltar
     sndClick.play()
    }
  } else if (tela == 6){
    if (mouseX > 165 && mouseX < 315 && mouseY > 395 && mouseY < 595){
      tela = 7;
      sndClick.play()
    } else if (mouseX > 325 && mouseX < 475 && mouseY > 395 && mouseY < 595 || mouseX > 485 && mouseX < 635 && mouseY > 395 && mouseY < 595){
      life = life - 1;
      sndClick.play()
    }
  } else if (tela == 7){
    
    if (mouseX > 484 && mouseX < 635 && mouseY > 395 && mouseY < 596){
      tela = 8;
      sndClick.play();
      
    }else if (mouseX > 325 && mouseX < 475 && mouseY > 395 && mouseY < 595){
      life = life - 1;
      sndClick.play();
    }
    
  } else if (tela == 8){

    if(mouseX > 325 && mouseX < 475 && mouseY > 395 && mouseY < 595){
      
      tela = 31;
      sndClick.play();
      
    }
    
} else if (tela == 9){
  // escolha de fase p.2
  
  //fase 1
  if(mouseX > 330 && mouseX < 370 && mouseY > 180 && mouseY < 220){
    
    tela = 6;
    sndClick.play()
     
    // fase 2
  } else if (mouseX > 430 && mouseX < 470 && mouseY > 180 && mouseY < 220){
    
    tela = 10;
    sndClick.play();
    
  } else if (mouseX > 710 && mouseX < 790 && mouseY > 15 && mouseY < 45){
    
   tela = 0;   
   sndClick.play();
  
  }
  
} else if (tela == 10){
  
  if (mouseX > 325 && mouseX < 475 && mouseY > 395 && mouseY < 595){
    
    tela = 11
    sndClick.play();
    
  } else if (mouseX > 165 && mouseX < 315 && mouseY > 395 && mouseY < 595 || mouseX > 484 && mouseX < 635 && mouseY > 395 && mouseY < 596) {
    
    life = life -1;
    sndClick.play();
    
  }
  
} else if (tela == 11){
  
  if (mouseX > 325 && mouseX < 475 && mouseY > 395 && mouseY < 595){
    
    tela = 12;
    sndClick.play();
    
  } else if (mouseX > 484 && mouseX < 635 && mouseY > 395 && mouseY < 596){
    
    life = life - 1;
    sndClick.play();
    
  }
  
} else if (tela == 12){
  
  if (mouseX > 484 && mouseX < 635 && mouseY > 395 && mouseY < 596){
    
    tela = 32;
    sndClick.play();
  }
  
}
  
}


function keyPressed() {
  if (tela == 2){
    if(keyCode == BACKSPACE){
      
      nome = nome.slice(0, -1);
      
    } else if (key.length === 1){
      
      nome = nome + key;
      
    } else if (keyCode == ENTER){
      
      tela = 3;
      
    }
  } else if (tela == 30){
    if(keyCode == ENTER){
      life = 3;
      tela = 3;
    }
    
  } else if (tela == 31){
    if(keyCode == ENTER){
      tela = 9;
    }
  
  } else if (tela == 32){
    if(keyCode == ENTER){
      tela = 13;
    }
  }

}
