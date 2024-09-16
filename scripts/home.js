function removeActive() {
  //Seleciona o elemento da navbar que está ativo e remove a classe ativo dele
  const activeNavBar = document.querySelector(".active-navbar");
  activeNavBar.classList.remove("active-navbar");
  activeNavBar.classList.add("inactive-navbar");

  //Scrolla para o topo
  window.scrollTo(0, 0);
}

function toggleAll() {
  //Remove a classe ativa do elemento ativo
  removeActive();

  //Adiciona a classe ativa ao elemento "Todos" da navbar
  const allNavBar = document.getElementById("allNavBar");
  allNavBar.classList.remove("inactive-navbar");
  allNavBar.classList.add("active-navbar");

  //Mostra todos os elementos
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.classList.add("itens-container");
  productsContainer.classList.remove("hidden");

  const horizontalLine = document.getElementById("hr");
  horizontalLine.classList.remove("hidden");

  const servicesContainer = document.getElementById("servicesContainer");
  servicesContainer.classList.add("itens-container");
  servicesContainer.classList.remove("hidden");

  //Atribui o valor correspondente no SessionStorage do que foi selecionado
  sessionStorage.setItem("selectedContent", "all");
}

function toggleProducts() {
  //Remove a classe ativa do elemento ativo
  removeActive();

  //Adiciona a classe ativa ao elemento "Produtos" da navbar
  const productsNavBar = document.getElementById("productsNavBar");
  productsNavBar.classList.remove("inactive-navbar");
  productsNavBar.classList.add("active-navbar");

  //Esconde o que não é produto
  const servicesContainer = document.getElementById("servicesContainer");
  servicesContainer.classList.remove("itens-container");
  servicesContainer.classList.add("hidden");

  const horizontalLine = document.getElementById("hr");
  horizontalLine.classList.add("hidden");

  const productsContainer = document.getElementById("productsContainer");
  productsContainer.classList.add("itens-container");
  productsContainer.classList.remove("hidden");

  //Atribui o valor correspondente no SessionStorage do que foi selecionado
  sessionStorage.setItem("selectedContent", "products");
}

function toggleServices() {
  //Remove a classe ativa do elemento ativo
  removeActive();

  //Adiciona a classe ativa ao elemento "Serviços" da navbar
  const servicesNavBar = document.getElementById("servicesNavBar");
  servicesNavBar.classList.remove("inactive-navbar");
  servicesNavBar.classList.add("active-navbar");

  //Esconde o que não é serviço
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.classList.remove("itens-container");
  productsContainer.classList.add("hidden");

  const horizontalLine = document.getElementById("hr");
  horizontalLine.classList.add("hidden");

  const servicesContainer = document.getElementById("servicesContainer");
  servicesContainer.classList.add("itens-container");
  servicesContainer.classList.remove("hidden");

  //Atribui o valor correspondente no SessionStorage do que foi selecionado
  sessionStorage.setItem("selectedContent", "services");
}

//Carrega o conteúdo conforme a seleção do usuário no footer
function loadSelectedContent() {
  const selectedContent = sessionStorage.getItem("selectedContent");

  if (selectedContent === "products") {
    toggleProducts();
  } else if (selectedContent === "services") {
    toggleServices();
  } else {
    toggleAll();
  }
}
