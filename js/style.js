// const product = document.querySelector(".card-container");


function createProduct() {
    document.querySelector(".card-container").remove();
    let product_container = document.querySelector(".product-container");
    let product = document.createElement('div');
    product.className =".card-container"
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
let products = [{"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
                {"img":'../img/Nike_jordan_1.jpg',"title": "Nike", "price":"$189","rating":rating_number[1]},
            ]
createProduct()