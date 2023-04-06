displayOrderId();
displayUserData();
const userData = document.querySelector('.contact');
const price = document.querySelector('.price');

const priceInStorage = localStorage.getItem('totalPrice');

price.textContent = `${priceInStorage}€`;

function displayUserData() {
  const firstName = document.querySelector('.firstName');
  const Name = document.querySelector('.Name');
  const address = document.querySelector('.address');

  const mail = document.querySelector('.mail');
  const phone = document.querySelector('.phone');

  const userDataInStorage = JSON.parse(localStorage.getItem('contact'));

  firstName.textContent = `${userDataInStorage.firstName}`;
  Name.textContent = `${userDataInStorage.lastName}`;
  address.textContent = `${userDataInStorage.address}, ${userDataInStorage.city}`;
  mail.textContent = `${userDataInStorage.mail}`;
  phone.textContent = `${userDataInStorage.phone}`;
  mail.textContent = `${userDataInStorage.email}`;
}

function displayOrderId() {
  const orderId = document.querySelector('#orderId');
  const params = new URLSearchParams(window.location.search);
  const idUrl = params.get('orderId');

  orderId.textContent = `${idUrl}`;
}
