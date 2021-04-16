// declarations

const overlayContainer = document.querySelector(".overlay-container");
const openCartButton = document.querySelector(".cart-btn");
const closeCartButton = document.querySelector(".close-button");

// cart button

openCartButton.addEventListener("click" , () => {
    overlayContainer.classList.toggle("change");
});

// close button

closeCartButton.addEventListener("click" , () => {
    overlayContainer.classList.toggle("change");
});


// purchase button

const purchaseButton = document.querySelector(".cart-products button");

purchaseButton.addEventListener("click" , () => {
    location.href = "checkout.html";
});
