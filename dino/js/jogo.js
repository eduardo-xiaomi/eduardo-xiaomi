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