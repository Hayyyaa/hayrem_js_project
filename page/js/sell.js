// Dom---------------------
let product_container = document.querySelector("#products-container");
let product_dialog = document.querySelector("#products-dialog");
// DATA--------------------------------
let rating_number = [5,1]
let products = [{"img":'../img/Nike_jordan_1.jpg',"title": "Nike Jordan 1 High Gorge Green", "price":"US $180","description": "Jordan 1 high Gorge Green for boy","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_2.jpg',"title": "Nike Jordan 2", "price":"$189","description": "Jordan 1 high Gorge Green for boy","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_3.jpg',"title": "Nike", "price":"$189","description": "Jordan 1 high Gorge Green for boy","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_4.jpg',"title": "Nike", "price":"$189","description": "Jordan 1 high Gorge Green for boy","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","description": "Jordan 1 high Gorge Green for boy","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","description": "Jordan 1 high Gorge Green for boy","rating":rating_number[1]},
            ]
// HIDE / SHOW ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}
// LOCAL STORAGE------------------------
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function loadProducts() {
  let productsStorage = JSON.parse(localStorage.getItem("products"));
  if (productsStorage !== null) {
    products = productsStorage;
  }
}
// ----------------------Product---------------------------
function viewProduct() {
  document.querySelector("#card-container").remove();
  let card_container = document.createElement('div');
  card_container.id ="card-container"
  for (let index in products) {
      let dom_card = document.createElement("div");
      dom_card.className = "card";
      let product_Of_card = document.createElement("div");
      product_Of_card.className = "product-card";

      let images = document.createElement("img");
      images.src = products[index].img

      let title = document.createElement("p");
      title.textContent = products[index].title;

      let price = document.createElement("p");
      price.textContent = products[index].price;

      let description = document.createElement("p");
      description.textContent = products[index].description;

      let del_Edit = document.createElement("div");
      del_Edit.className = "del-edit";

      let edit_product = document.createElement("img");
      edit_product.src = "../../img/edit.svg";

      let delete_products = document.createElement("img");
      delete_products.addEventListener('click', removeProduct)
      delete_products.src = "../../img/trash.png";
      product_Of_card.appendChild(images);
      product_Of_card.appendChild(title);
      product_Of_card.appendChild(price);
      product_Of_card.appendChild(description);
      del_Edit.appendChild(edit_product);
      del_Edit.appendChild(delete_products);
      dom_card.appendChild(product_Of_card);
      dom_card.appendChild(del_Edit);
      dom_card.appendChild(del_Edit);
      card_container.appendChild(dom_card);
      
  }
  product_container.appendChild(card_container);
  // console.log(card_container);
  // console.log(product_container)

}
function removeProduct(event) {
  let index = event.target.parentElement.parentElement.dataset.index;

  products.splice(index, 1);

  saveProducts()

  
  viewProduct()
}
function onAddProduct() {
  show(product_dialog)
}
function onCancel(e) {
  hide(product_dialog)
}
function onCreate() {
  hide(product_dialog)

  let newProduct = {};
  newProduct.image = document.querySelector("#image").value;
  newProduct.name = document.querySelector("#name").value;
  newProduct.price = document.querySelector("#price").value;
  // newProduct.description = document.querySelector("#description").value;
  // Update the list of question, save question on local sotrage, update the view
  products.push(newProduct);
  saveProducts();
  viewProduct();
}
// saveProducts()
loadProducts()
viewProduct()