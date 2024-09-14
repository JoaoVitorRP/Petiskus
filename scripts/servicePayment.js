function loadServiceSelected() {
  //Obtém o item em sessionStorage que diz qual serviço foi contratado
  const service = sessionStorage.getItem("service");

  if (service === "bath") {
    //Muda a imagem
    const image = document.getElementById("serviceImage");
    image.src = "../images/banho_pet.jpg";

    //Muda o nome do serviço contratado
    const serviceType = document.getElementById("serviceType");
    serviceType.innerHTML = "Banho";

    //Muda o preço do serviço contratado
    const servicePrice = document.getElementById("servicePrice");
    servicePrice.innerHTML = "R$30.00";

    //Muda o preço total
    const totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = "R$30.00";
  }

  if (service === "grooming") {
    //Muda a imagem
    const image = document.getElementById("serviceImage");
    image.src = "../images/tosa_pet.jpeg";

    //Muda o nome do serviço contratado
    const serviceType = document.getElementById("serviceType");
    serviceType.innerHTML = "Tosa";

    //Muda o preço do serviço contratado
    const servicePrice = document.getElementById("servicePrice");
    servicePrice.innerHTML = "R$70.00";

    //Muda o preço total
    const totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = "R$70.00";
  }
}
