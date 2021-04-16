const detailContainer = document.querySelector(".featured-product-item");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log("id");

const url = "http://matshel.dev/rainydays/wp-json/wc/store/products/" + id;

async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        detailContainer.innerHTML = "";
        createHTML(getResults);
        createNewTitle(getResults);
    }

    catch(error) {
        console.log(error);
        detailContainer.innerHTML = errorMessage("Oops! An error occurred while gathering the jacket");
    }
}

getProducts();

function createHTML(product) {
        detailContainer.innerHTML =
        `<div class="products">
            <img src="${product.images[0].src}" alt="${product.name}">
            <h2>${product.name}</h2>
            <h2>$${product.prices.price  / 100}</h2>
            ${product.description}
            <i class="far fa-arrow-alt-circle-left fa-3x"></i>
            <i class="far fa-arrow-alt-circle-right fa-3x"></i>
        </div>
        `;
        
}


// change page title to product name

function createNewTitle(details) {

    let newPageTitle = details.name;

    document.title = `Rainydays - ${newPageTitle}`;
}

