const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const numero_de_pulos = 12;

const jump = () => {
    mario.classList.add('jump-mario');

    setTimeout(() => {

        mario.classList.remove('jump-mario')

    },500)
}


const loop = setInterval(()=>{

    const pipe_position = pipe.offsetLeft;
    const mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');
    alert(numero_de_pulos)
    
    if(pipe_position <= 120 && pipe_position > 0 && mario_position < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_position}px`;
        

        mario.style.animation = 'none';
        mario.style.bottom = `${mario_position}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

       
        clearInterval(loop);
    }

},10)


document.addEventListener('keydown', jump);