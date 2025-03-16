function addToCart(id, name, price) {
    fetch('/cart', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id, name, price })
    })
    .then(response => response.json())
    .then(data => alert(data.message));
}

// Carousel functionality
let index = 0;
const images = document.querySelectorAll(".carousel-item");
setInterval(() => {
    images.forEach(img => img.style.transform = `translateX(-${index * 100}%)`);
    index = (index + 1) % images.length;
}, 3000);