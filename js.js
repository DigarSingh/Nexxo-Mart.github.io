// Simple add-to-cart functionality for demonstration
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Added to Cart!");
    });
});
