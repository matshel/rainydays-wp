const url = "http://matshel.dev/rainydays/wp-json/wc/store/products/" + id;
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;

const detailContainer = document.querySelector(".jacket-container");
const cart = document.querySelector(".cart-number");
const corFix = "https://noroffcors.herokuapp.com/";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log("id");



async function getProducts() {
    try {
        const response = await fetch(corsFix);
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
            <p>${product.description}</p>
        </div>
        `;
        
}

// adds an example product to the cart in the form of a number
const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
  button.onclick = function(event){
    localStorage.setItem
    cart.style.display = "block";
    cart.innerHTML = `<a href="jacket-added.html" class="circle">1</a>`;
    button.innerText = "Added to cart"
  }
})

// change page title to product name
function createNewTitle(details) {

    let newPageTitle = details.name;

    document.title = `Rainydays - ${newPageTitle}`;
}

