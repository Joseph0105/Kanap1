main();

async function main() {
  const articleId = getArticleId();
  const article = await getArticle(articleId);

  hydrateArticle(article);
}

function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}

function getArticle(articleId) {
  return fetch(`http://localhost:3000/api/products/${articleId}`)
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
  const image = document.getElementById("img");
  image.src = article.imageUrl;
}

function hydrateTitle(article) {
  document.getElementById("title").textContent = article.name;
}

function hydratePrice(article) {
  document.getElementById("price").textContent = article.price;
}

function hydrateDescription(article) {
  document.getElementById("description").textContent = article.description;
}

function hydrateColors(article) {
  const colors = document.getElementById("colors");
  article.colors.forEach((color) => {
    let option = document.createElement("option");
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

  const colorSelect = document.querySelector("#colors");

  const btn_addToCart = document.querySelector("#addToCart");
  btn_addToCart.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedColor = colorSelect.value;
    if (selectedColor === 0) {
      alert("Sélectionner une couleur valide avant de continuer");
    } else {
    }
    const userValue = {
      productName: article.name,
      Idproduct: article._id,
      colors: selectedColor,
      price: article.price,
    };
    console.log(userValue);
  });
}
