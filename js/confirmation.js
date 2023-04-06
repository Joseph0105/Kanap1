function displayOrderId() {
  const orderId = document.querySelector('#orderId');
  const params = new URLSearchParams(window.location.search);
  const idUrl = params.get('orderId');
  orderId.textContent = idUrl;
}

function displayUserData() {
  const firstName = document.querySelector('.firstName');
  const Name = document.querySelector('.Name');
  const address = document.querySelector('.address');
  const mail = document.querySelector('.mail');
  const phone = document.querySelector('.phone');

  const userDataInStorage = JSON.parse(localStorage.getItem('contact'));

  firstName.textContent = userDataInStorage.firstName;
  Name.textContent = userDataInStorage.lastName;
  address.textContent = `${userDataInStorage.address}, ${userDataInStorage.city}`;
  mail.textContent = userDataInStorage.email;
  phone.textContent = userDataInStorage.phone;
}

function displayProducts() {
  const products = document.querySelector('.products');

  const userValue = JSON.parse(localStorage.getItem('userValue'));

  userValue.forEach((product) => {
    const productDiv = document.createElement('div');
    const productQte = document.createElement('p');
    const productName = document.createElement('p');
    const productColor = document.createElement('p');

    const productImg = document.createElement('img');

    productQte.textContent = 'Quantité: ' + product.quantity;
    productName.textContent = product.productName;
    productColor.textContent = product.colors;

    productImg.src = product.imageUrl;
    productImg.alt = "photographie d'un canapé";

    productDiv.classList.add('product');
    productQte.classList.add('product-qte');
    productName.classList.add('product-name');
    productColor.classList.add('product-color');
    productImg.classList.add('product-img');

    productDiv.appendChild(productName);
    productDiv.appendChild(productColor);
    productDiv.appendChild(productQte);
    productDiv.appendChild(productImg);
    products.appendChild(productDiv);
  });
}

function displayPrice() {
  const price = document.querySelector('.price');
  const priceInLocalStorage = localStorage.getItem('totalPrice');
  price.textContent = `${priceInLocalStorage}€`;
}

displayOrderId();
displayUserData();
displayProducts();
displayPrice();
