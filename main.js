
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

const translations = {
  pt: {
    slogan: "Tornando o digital mais <br><strong>humano,</strong><br>um pixel de cada vez.",
    sobre: "Olá! Meu nome é Gabriel Castilho, tenho 22 anos e sou de Guarulhos, São Paulo, Brasil. Sou um desenvolvedor FrontEnd em busca de novos desafios. Meu foco é em HTML5, CSS3 e JavaScript e você pode conferir meus projetos logo ao lado."
  },
  en: {
    slogan: "Making digital more <br><strong>human,</strong><br>one pixel at a time.",
    sobre: "Hello! My name is Gabriel Castilho, I'm 22 years Front-End Developer from Guarulhos, São Paulo, Brazil. I'm looking for new challenges. My focus is on HTML5, CSS3, and JavaScript, and you can check out my projects right next to this section."
  }
};

function setLanguage(lang) {
  // Atualiza o texto
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.innerHTML = translations[lang][key];
  });

  // Atualiza o destaque dos botões
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("ativo");
  });

  const btnAtivo = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (btnAtivo) {
    btnAtivo.classList.add("ativo");
  }
}
