let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Меняем слайд каждые 3 секунды
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

document.getElementById("call-button").addEventListener("click", function() {
    window.location.href = "tel:+996700070013";
});
