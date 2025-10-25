
let txtSlider = document.querySelectorAll('.slider-container .slider-box'); 
let btnProx = document.querySelector('#proximo');
let btnAnter = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav'); 


let contadorTxt = txtSlider.length; 
let txtAtivo = 0;

btnProx.addEventListener('click', () => {
    txtAtivo++;
    if (txtAtivo >= contadorTxt) {
        txtAtivo = 0;
    }
    mostrarSlider();
});

btnAnter.addEventListener('click', () => {
    txtAtivo--;
    if (txtAtivo < 0) {
        txtAtivo = contadorTxt - 1;
    }
    mostrarSlider();
});

function mostrarSlider() {

    let antigoTxt = document.querySelector('.slider-container .slider-box.ativo');
    

    let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo'); 

    
    if (antigoTxt) {
        antigoTxt.classList.remove('ativo');
    }
    if (antigoBtnNav) {
        antigoBtnNav.classList.remove('ativo');
    }

    txtSlider[txtAtivo].classList.add('ativo'); 
    btnNav[txtAtivo].classList.add('ativo');
}

btnNav.forEach((btn, indice)=>{
    btn.addEventListener('click', ()=>{
        txtAtivo = indice;
        mostrarSlider()
    })
})
