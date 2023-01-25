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

let total = 0;
for (let u = 0; u < userValue.length; u++) {
  let product = userValue[u];
  total += product.quantity * product.price;
}
console.log(total);

let totalQuantity = document.getElementById("totalQuantity");
totalQuantity.textContent = userValue.length;

let totalPrice = document.getElementById("totalPrice");
totalPrice.textContent = total;

// Formulaire

let fields = ["firstName", "lastName", "address", "city", "email", "phone"];
let spans = [
  "requiredFirstName",
  "requiredLastName",
  "requiredAddress",
  "requiredCity",
  "requiredEmail",
  "requiredPhone",
];
let regExs = [
  /^[a-zA-ZÀ-ÿ\-\s]+$/,
  /^[a-zA-ZÀ-ÿ\-\s]+$/,
  /^[a-zA-ZÀ-ÿ\d\-\s]+$/,
  /^[a-zA-ZÀ-ÿ\-\s]+$/,
  /^\S+@[^\s]+.[^\s]+$/,
  /^0[1-68]([-. ]?\d{2}){4}$/,
];
let errorMsgs = [
  "Veuillez remplir le champ prénom",
  "Veuillez remplir le champ Nom",
  "Veuillez remplir le champ Adresse",
  "Veuillez remplir le champ Ville",
  "Veuillez remplir le champ Email",
  "Veuillez remplir le champ Téléphone",
];

let errorMsgsRegEx = [
  "Le prénom ne doit pas comprter de chiffre ou de caractères spéciaux (#@}=+ etc...",
  "Le nom ne doit pas comprter de chiffre ou de caractères spéciaux (#@}=+ etc...",
  "L'adresse' ne doit pas comprter de caractères spéciaux (#@}=+ etc...",
  "La ville ne doit pas comprter de chiffre ou de caractères spéciaux (#@}=+ etc...",
  "l'email est invalide.",
  "le numéro de téléphone est invalide.",
];
let form = document.getElementById("cart__order__form");
function validateForm() {
  let isFormValid = true;
  for (let p = 0; p < fields.length; p++) {
    let fieldEvent = document.getElementById(fields[p]);
    let spanEvent = document.getElementById(spans[p]);
    if (fieldEvent.value.trim() == "") {
      spanEvent.innerHTML = errorMsgs[p];
      spanEvent.style.color = "red";
      isFormValid = false;
      event.preventDefault();
    } else if (!regExs[p].test(fieldEvent.value)) {
      spanEvent.innerHTML = errorMsgsRegEx[p];
      spanEvent.style.color = "red";
      isFormValid = false;
      event.preventDefault();
    } else {
      spanEvent.innerHTML = "";
    }
  }
  // if (isFormValid) {
  //   alert("good");
  // } else {
  //   alert("erreur");
  // }
}

form.addEventListener("submit", validateForm);

for (let j = 0; j < fields.length; j++) {
  let field = document.getElementById(fields[j]);
  field.addEventListener("blur", function () {
    validateField(j);
  });
}

function validateField(index) {
  let fieldEvent = document.getElementById(fields[index]);
  let spanEvent = document.getElementById(spans[index]);
  if (fieldEvent.value.trim() == "") {
    spanEvent.innerHTML = errorMsgs[index];
    spanEvent.style.color = "red";
  } else if (!regExs[index].test(fieldEvent.value)) {
    spanEvent.innerHTML = errorMsgsRegEx[index];
    spanEvent.style.color = "red";
  } else {
    spanEvent.innerHTML = "";
  }
}
