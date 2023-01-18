// main();

// async function main() {
//   const articleId = getArticleId();
//   const article = await getArticle(articleId);
//   console.log(article);

//   hydrateArticle(article);
// }

// function getArticleId() {
//   return new URL(location.href).searchParams.get("id");
// }

// function getArticle(articleId) {
//   return fetch(`http://localhost:3000/api/products/${articleId}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((articles) => {
//       return articles;
//     })
//     .catch((error) => {
//       alert(error);
//     });
// }

// function hydrateImage(article) {
//   const image = document.getElementById("img");
//   image.src = article.imageUrl;
// }

// function hydrateTitle(article) {
//   document.getElementById("title").textContent = article.name;
// }

// function hydratePrice(article) {
//   document.getElementById("price").textContent = article.price;
// }

// function hydrateDescription(article) {
//   document.getElementById("description").textContent = article.description;
// }

// function hydrateColors(article) {
//   const colors = document.getElementById("colors");
//   article.colors.forEach((color) => {
//     let option = document.createElement("option");
//     option.value = color;
//     option.innerHTML = color;
//     colors.appendChild(option);
//   });
// }

// function hydrateArticle(article) {
//   hydrateImage(article);
//   hydrateTitle(article);
//   hydratePrice(article);
//   hydrateDescription(article);
//   hydrateColors(article);
// }

const image = document.getElementById("img");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const colors = document.getElementById("colors");

main();

async function main() {
  try {
    const articleId = new URLSearchParams(location.search).get("id");
    const article = await (
      await fetch(`http://localhost:3000/api/products/${articleId}`)
    ).json();
    console.log(article);
    if (image) {
      image.src = article.imageUrl;
    }
    if (title) {
      title.textContent = article.name;
    }
    if (price) {
      price.textContent = article.price;
    }
    if (description) {
      description.textContent = article.description;
    }
    if (colors) {
      article.colors.forEach((color) => {
        let option = document.createElement("option");
        option.value = color;
        option.innerHTML = color;
        colors.appendChild(option);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
