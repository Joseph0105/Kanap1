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
let isValid = true;
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
  /^\S+@\S+$/,
  /^0[1-68]([-. ]?\d{2}){4}$/,
];
let errorMsgs = [
  "Le prénom ne doit pas comprter de chiffre ou de caractères spéciaux (#@}=+ etc...",
  "Le nom ne doit pas comprter de chiffre ou de caractères spéciaux (#@}=+ etc...",
  "L'adresse' ne doit pas comprter de caractères spéciaux (#@}=+ etc...",
  "La ville ne doit pas comprter de chiffre ou de caractères spéciaux (#@}=+ etc...",
  "l'email est invalide.",
  "le numéro de téléphone est invalide.",
];

let orderSubmit = document.getElementById("order");
orderSubmit.addEventListener("click", function (e) {
  for (let p = 0; p < fields.length; p++) {
    let span = document.getElementById(spans[p]);
    let field = document.getElementById(fields[p]);
    let regEx = regExs[p];
    let errorMsg = errorMsgs[p];

    if (field.value.trim() == "") {
      let required = document.getElementById(span);
      required.innerHTML = "Tous les champs doivent être remplis";
      required.style.color = "red";
      isValid = false;
    } else if (regEx.test(field.value) == false) {
      let required = document.getElementById(span[p]);
      required.innerHTML = errorMsg;
      required.style.color = "red";
    } else {
      let required = document.getElementById(span[p]);
      required.innerHTML = "";
      required.style.color = "green";
    }
  }
  if (
    document.getElementById("firstName").innerHTML == "" &&
    document.getElementById("lastName").innerHTML == "" &&
    document.getElementById("address").innerHTML == "" &&
    document.getElementById("city").innerHTML == "" &&
    document.getElementById("email").innerHTML == "" &&
    document.getElementById("phone").innerHTML == ""
  ) {
    alert("Votre commande a été soumise avec succès");
    e.preventDefault();
  }
});
// let orderSubmit = document.getElementById("order");

// orderSubmit.addEventListener("click", function (e) {
//   let orderfirstName = document.getElementById("firstName");
//   let regExFirstName = /^[a-zA-ZÀ-ÿ\-\s]+$/;

//   if (orderfirstName.value.trim() == "") {
//     let required = document.getElementById("required");
//     required.innerHTML = "Veuillez renseigner votre prénom";
//     required.style.color = "red";
//     e.preventDefault();
//   } else if (regExFirstName.test(orderfirstName.value) == false) {
//     let required = document.getElementById("required");
//     required.innerHTML =
//       "le nom doit comporter uniquement des lettres et tirets.";
//     required.style.color = "red";
//     e.preventDefault();
//   } else {
//     required.style.display = "none";
//   }
// });
