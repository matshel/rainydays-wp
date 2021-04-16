const url = "http://matshel.dev/rainydays/wp-json/wc/store/products";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;
const productsContainer = document.querySelector(".featured-product-item");

async function getProducts() {
    try {
        const response = await fetch(corsEnabledUrl);
        const getResults = await response.json();
        productsContainer.innerHTML = "";
        createHTML(getResults);
    }

    catch(error) {
        console.log(error);
        productsContainer.innerHTML = errorMessage("Oops! An error occurred while gathering the jackets");
    }
}

getProducts();

function createHTML(products) {
    products.forEach(function(product) {
        productsContainer.innerHTML +=
        `<div class="products">
            <img src="${product.images[0].src}" alt="${product.name}">
            <h2>${product.name}</h2>
            <h2>$${product.prices.price  / 100}</h2>
            <a href="details.html?id=${product.id}"><button class="product-button">View Item</button></a>
        </div>
        `;
    });
}