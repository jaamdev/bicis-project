window.addEventListener('scroll', function(){

    let scroll = document.documentElement.scrollTop

    let infoHeader = document.getElementById('info__header')

    let arrowUp = document.getElementById('arrow_up_ctn')

    if (scroll > 300){
        infoHeader.classList.add('activar_barra')
        arrowUp.style.transform = 'scale(1)'
    }else if (scroll < 300){
        infoHeader.classList.remove('activar_barra')
        arrowUp.style.transform = 'scale(0)'
    }
})

document.getElementById('arrow_up_ctn').addEventListener("click", scrollUp)

function scrollUp(){
    let scroll = document.documentElement.scrollTop || document.body.scrollTop
    if(scroll > 0){
        window.requestAnimationFrame(scrollUp)
        window.scrollTo (0, scroll - (scroll / 10))
    }
}