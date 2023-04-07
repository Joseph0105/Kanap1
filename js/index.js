(async function () {
  const articles = await getArticles();
  console.log(articles);
  for (article of articles) {
    displayArticles(article);
  }
})();
function getArticles() {
  return fetch('https://kanapjosephschneider.herokuapp.com/api/products')
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

function displayArticles(article) {
  console.log(article);
  const templateElt = document.getElementById('templateArticle');
  const cloneElt = document.importNode(templateElt.content, true);
  const imgElt = cloneElt.querySelector('#img');

  imgElt.src = article.imageUrl;
  cloneElt.querySelector('#productName').textContent = article.name;
  cloneElt.querySelector('#productPrice').textContent = article.price + '€';
  cloneElt.getElementById('productDescription').textContent =
    article.description;
  cloneElt.getElementById('link').href += `?id=${article._id}`;
  document.getElementById('items').appendChild(cloneElt);
}
