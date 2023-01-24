const userValueInStorage = localStorage.getItem("product")?.toString();

let userValue = [];
if (userValueInStorage) {
  userValue = JSON.parse(userValueInStorage);
  console.log(userValue);
} else {
  window.alert(`Votre panier est vide, Remplissez le d'abbord.`);
}
function createArticle(userValue) {
  const parentElement = document.getElementById("cart__items");
  for (let i = 0; i < userValue.length; i++) {
    let product = userValue[i];
    let article = document.createElement("article");
    article.classList.add("cart__item");
    article.setAttribute("data-id", product.Idproduct);
    article.setAttribute("data-color", product.colors);

    let img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = "photographie d'un canapé";
    img.classList.add("cart__item__img");

    let content = document.createElement("div");
    content.classList.add("cart__item__content");

    let cartCreat = document.createElement("div");
    cartCreat.classList.add("cart__item__content__cartCreat");

    let title = document.createElement("h2");
    title.textContent = product.productName;
    cartCreat.appendChild(title);

    let color = document.createElement("p");
    color.textContent = product.colors;
    cartCreat.appendChild(color);

    let price = document.createElement("p");
    price.textContent = `${product.price} €`;

    let quantityLabel = document.createElement("label");
    quantityLabel.textContent = "Qté :  ";

    let quantity = document.createElement("input");
    quantity.type = "number";
    quantity.value = product.quantity;
    quantity.min = "1";
    quantity.max = "100";
    quantity.classList.add("itemQuantity");
    console.log(quantity);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Supprimer";
    removeBtn.classList.add("deleteItem");

    cartCreat.appendChild(img);
    cartCreat.appendChild(price);
    cartCreat.appendChild(quantityLabel);
    cartCreat.appendChild(quantity);
    cartCreat.appendChild(removeBtn);
    content.appendChild(cartCreat);
    article.appendChild(content);
    parentElement.appendChild(article);
  }
}

createArticle(userValue);
