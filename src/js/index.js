
const botaotrailer = document.querySelector(".botao-trailer");

const modal = document.querySelector(".modal");

botaotrailer.addEventListener("click", () => {  modal.classList.add("aberto");
  
})

const botaofecharmodal = document.querySelector(".fechar-modal");

botaofecharmodal.addEventListener("click", () => {
    modal.classList.remove("aberto");
} )