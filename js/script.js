const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump-mario');

    setTimeout(() => {

        mario.classList.remove('jump-mario')

    },500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    

},10)


document.addEventListener('keydown', jump);