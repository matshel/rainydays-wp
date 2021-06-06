const url = "http://matshel.dev/rainydays/wp-json/wc/store/products";
const productsContainer = document.querySelector(".jacket-container");

async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        productsContainer.innerHTML = "";
        createHTML(getResults);
    }

    catch(error) {
        console.log(error);
        productsContainer.innerHTML = errorMessage("Oops! An error occurred while gathering the jacket");
    }
}

getProducts();

function createHTML(products) {
    products.forEach(function(product) {
        if(product.categories[0].id === 21) {
            productsContainer.innerHTML +=
            `<div class="products">
            <img src="${product.images[0].src}" alt="${product.name}">
            <h2>${product.name}</h2>
            <h2>$${product.prices.price  / 100}</h2>
            <a href="details.html?id=${product.id}">View Item</a>
        </div>
        `;
        }
    });
}

