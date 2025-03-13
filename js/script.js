document.addEventListener("DOMContentLoaded", function () {
    const carouselItem = document.querySelector(".carousel-inner .carousel-item.active .d-flex");

    if (!carouselItem) return;

    let cards = Array.from(carouselItem.children);

    function rotateCards() {
        let firstCard = cards.shift();
        cards.push(firstCard);


        carouselItem.innerHTML = "";
        cards.forEach(card => carouselItem.appendChild(card));
    }
    setInterval(rotateCards, 3000);
});
document.addEventListener("DOMContentLoaded", function () {
    let myCarousel = document.querySelector("#carouselExampleDark");
    let carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Интервал смены слайдов
        wrap: true, // Позволяет зациклить карусель
    });
});