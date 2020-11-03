console.log('Inicio de Jogo');
const dino = document.querySelector('.dino');
// console.log(dino);
let dinoPosition = 0;
let estaPulando = false;

//verificar se a tecla espaço esta fucionando//
document.addEventListener('keydown', (event)=> {
  if(event.code === 'Space')
      if(!estaPulando) pular();
});

function pular(){
    let intervaloPulo = setInterval (()=>{
        estaPulando = true;
        if (dinoPosition>= 250){
            console.log('Topo!');
            clearInterval(intervaloPulo);
            let intervaloQueda = setInterval(()=>{
                if (dinoPosition <= 0) {
                    console.log('chão');
                    estaPulando = false;
                    clearInterval(intervaloQueda);

                } else {
                    //Decrementar a posição do Dino 
                    dinoPosition -= 20;
                    //Atualizar a posição na tela
                    dino.style.bottom = dinoPosition + 'px';
                }
            },20);

        }else{
            //Incrementar a posição do dino
        dinoPosition += 200;
        //Atualizar a posição
        dino.style.bottom = dinoPosition + 'px';
        }
    }  ,20);
};

//Criação de Cactos
const background = document.querySelector('.background');

let cactoPosition = 1000;
function criarCacto () {
    const cacto = document.createElement('div');
    let tempoRandom = Math.random() * 6000 + 100; 
    cacto.classList.add('cacto');
    cacto.style.left = 1000 + 'px';
    // aparece o cacto na tela 
    background.appendChild(cacto);

    let intervaloEsquerda = setInterval(()=>{
        if (cactoPosition <= -60) {
            clearInterval(intervaloEsquerda);
            //Remover da tela
            background.removeChild(cacto);
        } else if(cactoPosition >0 &&
            cactoPosition <= 60 &&
            dinoPosition <= 60) {
                clearTimeout(tempoCacto);
                document.body.innerHTML = '<h1 class="fim-de-jogo"> Fim de jogo</h1>';

        }

        
        else{  
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + 'px';
        }
    },20);
    let tempoCacto = setTimeout(criarCacto, tempoRandom);
}
criarCacto();