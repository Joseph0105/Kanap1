displayOrderId();
displayUserData();
getProductsApi();
getLocalStorage();
const userData = document.querySelector('.contact');
const price = document.querySelector('.price');

const products = document.querySelector('.products');
const productImg = document.querySelector('.product-img');

function getLocalStorage() {
  const productId = JSON.parse(localStorage.getItem('products'));

  if (productId) {
    getProductsApi(productId);
  } else {
    alert('No product found in local storage');
  }
}

function getProductsApi(productId) {
  if (!productId) {
    return;
  }
  const queryString = productId.join('&id=');

  return fetch(`http://localhost:3000/api/products?id=${queryString}`)
    .then((response) => {
      return response.json();
    })
    .then((article) => {
      const filteredArticles = article.filter((article) =>
        productId.includes(article._id)
      );
      console.log(filteredArticles);
      filteredArticles.forEach((article) => {
        const product = document.createElement('div');
        const productName = document.createElement('p');

        const productImg = document.createElement('img');

        productName.textContent = article.name;

        productImg.src = article.imageUrl;
        productImg.alt = article.altTxt;

        product.appendChild(productName);
        product.appendChild(productImg);
        products.appendChild(product);
      });
      return article;
    })
    .catch((error) => {
      alert(error);
    });
}

const priceInStorage = localStorage.getItem('totalPrice');

price.textContent = `${priceInStorage}€`;

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
  mail.textContent = userDataInStorage.mail;
  phone.textContent = userDataInStorage.phone;
  mail.textContent = userDataInStorage.email;
}

function displayOrderId() {
  const orderId = document.querySelector('#orderId');
  const params = new URLSearchParams(window.location.search);
  const idUrl = params.get('orderId');
  orderId.textContent = idUrl;
}
