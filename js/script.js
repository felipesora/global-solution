const openModal = document.querySelector("#openModal1");
const modal = document.querySelector("#Modal1");

//Atrelando um evento de click no botão de abertura do MODAL.
openModal.addEventListener("click", ()=>{
  //Utilizando o modal para abrir.
  modal.showModal();
});

//Encerrando a janela de Modal.
const closeModal = document.querySelector("#closeModal");
closeModal.addEventListener("click", ()=>{
  //Utilizando o modal para abrir.
  modal.close();
});

// botão 2

const openModal2 = document.querySelector("#openModal2");
const modal2 = document.querySelector("#Modal2");

openModal2.addEventListener("click", ()=>{
  modal2.showModal();
});

const closeModal2 = document.querySelector("#closeModal2");
closeModal2.addEventListener("click", ()=>{
  modal2.close();
});

// botao 3

const openModal3 = document.querySelector("#openModal3");
const modal3 = document.querySelector("#Modal3");

openModal3.addEventListener("click", ()=>{
  modal3.showModal();
});

const closeModal3 = document.querySelector("#closeModal3");
closeModal3.addEventListener("click", ()=>{
  modal3.close();
});

// botao 4

const openModal4 = document.querySelector("#openModal4");
const modal4 = document.querySelector("#Modal4");

openModal4.addEventListener("click", ()=>{
  modal4.showModal();
});

const closeModal4 = document.querySelector("#closeModal4");
closeModal4.addEventListener("click", ()=>{
  modal4.close();
});

