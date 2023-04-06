function getArticleId() {
  return new URL(location.href).searchParams.get('id');
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
