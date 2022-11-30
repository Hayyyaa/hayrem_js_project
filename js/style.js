// const product = document.querySelector(".card-container");

// ----------------------Product---------------------------
function viewProduct() {
    let product_container = document.querySelector(".product-container");
    document.querySelector(".card-container").remove();
    let product = document.createElement('div');
    product.className ="card-container"
    for (let index in products) {
        let dom_card = document.createElement("div");
        dom_card.className = "card";
        let images = document.createElement("img");
        images.src = products[index].img
        let title = document.createElement("p");
        title.textContent = products[index].title;
        let price = document.createElement("p");
        price.textContent = products[index].price
        dom_card.appendChild(images);
        dom_card.appendChild(title);
        dom_card.appendChild(price);
        product.appendChild(dom_card);
        
    }
    product_container.appendChild(product);
    console.log(product)
    console.log(product_container)

}
let rating_number = [5,1]
let products = [{"img":'../img/Nike_jordan_1.jpg',"title": "Nike Jordan 1 High Gorge Green", "price":"US $180","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_2.jpg',"title": "Nike Jordan 2", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_3.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_4.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
            ]
viewProduct()


function createProduct() {
    let seller = document.querySelector(".continer");
    let add_img_product = document.createElement("div");
    add_img_product.className = "product-img";
    let span_img = document.createElement("span");
    span_img.textContent = "Add image product";
    let add_image = document.createElement("input[type=file]");
    add_img_product.appendChild(span_img);
    add_image_product.addEventListener(add_image);
    seller.appendChild(add_image_product);
    console.log(seller)
}