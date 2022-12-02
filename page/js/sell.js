// Dom---------------------
let product_container = document.querySelector("#products-container");
let product_dialog = document.querySelector("#products-dialog");
// DATA--------------------------------
// let rating_number = [5,1]
let products = [{"img":"https://cdn.flightclub.com/TEMPLATE/804093/1.jpg","title": "Nike Jordan 1", "price":"$180","description": "Jordan 1 high Gorge Green for boy"},
                {"img":"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e12449626d54477b8d45aeb500d33b43_9366/adifom-sltn-shoes.jpg","title": "Adidas", "price":"$189","description": "Adidas new brand for Adidas"},
                {"img":"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16513990/2022/1/26/d8f01fca-59e2-4f82-8214-9cd61d373be41643184909272-Roadster-Men-White-Sneakers-6661643184908868-1.jpg","title": "Casual", "price":"$189","description": "Casual new brand for you"},
                {"img":"https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3b6c4df464c41c7802bae2701051bdd_9366/Sean_Wotherspoon_x_Hot_Wheels_Adilette_Slides_Blue_GX9756_01_standard.jpg","title": "Adidas", "price":"$189","description": "Adidas the shoes for the Adidas"},
                {"img":"https://cdn.officeshoes.ws/product_images/2022fw/37468701-mlt.jpg","title": "Puma", "price":"$100","description": "Puma the shoes for your product"},
                {"img":"https://i.pinimg.com/originals/07/e9/b1/07e9b10a9fbcd5b685ec3e1977054db4.jpg","title": "Puma sneake", "price":"$189","description": "Puma sneake for men and the best shoes"},
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
      dom_card.dataset.index = index;
      dom_card.className = "card";
      console.log(dom_card);
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
      edit_product.addEventListener('click', onEditProduct)
      edit_product.src = "../../img/edit.svg";
      edit_product.style.width = "30px";

      let delete_products = document.createElement("img");
      delete_products.addEventListener('click', removeProduct)
      delete_products.src = "../../img/trash.png";
      delete_products.style.width = "30px";
      delete_products.style.height = "30px";
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
  console.log(index);
  products.splice(index, 1);

  saveProducts()

  
  viewProduct()
}
function onEditProduct(event){
  // Get the product index using the dataset
  document.querySelector("menu").lastElementChild.textContent = "Edit";
  let index = event.target.parentElement.parentElement.dataset.index;
  // Update the dialog with product informatin
  document.querySelector("#image").value = products[index].img;
  document.querySelector("#name").value = products[index].title;
  document.querySelector("#price").value = products[index].price;
  document.querySelector("#descript").value = products[index].description;
  // To show dialog
  show(product_dialog);
  products.splice(index,1);


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
  newProduct.img = document.querySelector("#image").value;
  newProduct.title = document.querySelector("#name").value;
  newProduct.price = document.querySelector("#price").value;
  newProduct.description = document.querySelector("#descript").value;
  // Update the list of question, save question on local sotrage, update the view
  products.push(newProduct);
  document.querySelector("#image").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#descript").value = "";
  saveProducts();
  viewProduct();
}
// saveProducts()
loadProducts()
viewProduct()