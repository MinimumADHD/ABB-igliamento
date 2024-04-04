let HomeButton = document.getElementById("HomeButton");
let ARLocker = document.getElementById("ARLocker");

let backward_button = document.getElementById("backward_button");
let forward_button = document.getElementById("forward_button");
let showcase_img = document.getElementById("showcase_img");

HomeButton.addEventListener("click", function() {
    window.location.href = "../index.html";
});

ARLocker.addEventListener("click", function() {
    window.location.href = "./ar.html"
});

let images = [];
let currentIndex = 0;

// Search for images in the "images" folder
for (let i = 1; i <= 3; i++) {
    images.push(`images/img${i}.jpeg`);
}

backward_button.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showcase_img.src = images[currentIndex];
});

forward_button.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    showcase_img.src = images[currentIndex];
});