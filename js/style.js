// const product = document.querySelector(".card-container");

let product_container = document.querySelector(".product-container");
let product_details = document.querySelector("#product-detail");
let payment_dialog = document.querySelector("#payment-dialog");
// -----------------------Show/Hide------------------
function show(element) {
    element.style.display = 'block';
}
function hide(element) {
    element.style.display = 'none';
}
show(payment_dialog);
hide(payment_dialog);
// ----------------------Product---------------------------
function viewProduct() {
    document.querySelector(".card-container").remove();
    let product = document.createElement('div');
    product.className ="card-container"
    for (let index in products) {
        let dom_card = document.createElement("div");
        dom_card.className = "card";
        let images = document.createElement("img");
        images.src = products[index].img;
        let title = document.createElement("p");
        title.textContent = products[index].title;
        let price = document.createElement("p");
        price.textContent = products[index].price;
        let description = document.createElement("p");
        description.textContent = products[index].description;
        dom_card.appendChild(images);
        dom_card.appendChild(title);
        dom_card.appendChild(price);
        dom_card.appendChild(description);
        product.appendChild(dom_card);
        
    }
    product_container.appendChild(product);
    console.log(product)
    console.log(product_container)

}
let products = JSON.parse(localStorage.getItem("products"));
viewProduct()
let getSearch = document.querySelector("#search");

getSearch.addEventListener("keyup", researchProduct);

let card = document.querySelectorAll(".card");
function researchProduct(){
    for (let i in card){
        let word = card[i].children[1].textContent.toLowerCase();
        console.log(word);
        let valueOfSearch = getSearch.value.toLowerCase();
        if (word.indexOf(valueOfSearch)>-1){
            card[i].style.display = "block";
        }
        else{
            card[i].style.display = "none";
        }
        
    }
}
researchProduct();