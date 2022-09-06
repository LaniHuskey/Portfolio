var details = $('.detail-container');
var currentId = "";
details.children().hide();

function loadDetails(id) {
    scrollToHeader('portfolio');

    if (id !== currentId) {
        currentId = id;
        clearTimeout(slideTimeout);

        details.children().hide();
        $('#' + id).show();
        playSlideshow(id);
    }
}

// Slideshow
var slideIndex = 0;
var slides;
var slideTimeout;

function playSlideshow(id) {
    slides = $('#' + id).children('.slideshow').children('.slide');
    if(slides.length > 0) {
        changeSlide();
    }
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = 'block';
    slideTimeout = setTimeout(changeSlide, 4000);
}

// Navigation
function scrollToHeader(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}