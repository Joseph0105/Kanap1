main();

async function main() {
  const articleId = getArticleId();
  const article = await getArticle(articleId);

  hydrateArticle(article);
}

function getArticleId() {
  return new URL(location.href).searchParams.get('id');
}

function getArticle(articleId) {
  return fetch(
    `https://kanapjosephschneider.herokuapp.com/api/products/${articleId}`
  )
    .then((response) => {
      return response.json();
    })
    .then((articles) => {
      return articles;
    })
    .catch((error) => {
      alert(error);
    });
}

function hydrateImage(article) {
  const image = document.getElementById('img');
  image.src = article.imageUrl;
}

function hydrateTitle(article) {
  document.getElementById('title').textContent = article.name;
}

function hydratePrice(article) {
  document.getElementById('price').textContent = article.price;
}

function hydrateDescription(article) {
  document.getElementById('description').textContent = article.description;
}

function hydrateColors(article) {
  const colors = document.getElementById('colors');
  article.colors.forEach((color) => {
    let option = document.createElement('option');
    option.value = color;
    option.innerHTML = color;
    colors.appendChild(option);
  });
}

function hydrateArticle(article) {
  hydrateImage(article);
  hydrateTitle(article);
  hydratePrice(article);
  hydrateDescription(article);
  hydrateColors(article);

  const colorSelect = document.querySelector('#colors');
  const quantitySelect = document.querySelector('#quantity');

  const btn_addToCart = document.querySelector('#addToCart');
  btn_addToCart.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedColor = colorSelect.value;
    const selectedQuantity = quantitySelect.value;
    if (selectedColor === '' || selectedColor === '0') {
      alert('Sélectionner une couleur valide avant de continuer');
    } else if (selectedQuantity === '' || selectedQuantity === '0') {
      alert('sélectionner une quantité valide avant de continuer');
    } else {
      const userValue = {
        imageUrl: article.imageUrl,
        productName: article.name,
        Idproduct: article._id,
        colors: selectedColor,
        price: article.price,
        quantity: selectedQuantity,
      };
      let localStorageData = JSON.parse(localStorage.getItem('product'));
      // JSON.parse sert à convertir les données au format JSON dans le local storage en objet javascript

      const confirmMessage = () => {
        if (
          window.confirm(
            `${selectedQuantity} ${article.name} de couleur ${selectedColor} a bien été ajouté au panier`
          )
        ) {
          window.location.href = './cart.html';
        } else {
          window.location.href = './index.html';
        }
      };
      // Si il y a déjà des produits dans le local storage
      if (localStorageData) {
        localStorageData.push(userValue);
        localStorage.setItem('product', JSON.stringify(localStorageData));
        console.log(localStorageData);
        confirmMessage();
      }
      // Si il n'yen a pas
      else {
        localStorageData = [];
        localStorageData.push(userValue);
        localStorage.setItem('product', JSON.stringify(localStorageData));
        confirmMessage();
      }
    }
  });
}
