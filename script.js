const enlargeButtons = document.querySelectorAll('.btn-enlargee');

enlargeButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

AOS.init();

const carouselContainer = document.getElementById('carouselMain');
const parallaxImages = document.querySelectorAll('.parallax-image');

carouselContainer.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const carouselRect = carouselContainer.getBoundingClientRect();

    parallaxImages.forEach((image) => {
        const imageRect = image.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;
        const offsetX = (mouseX - imageCenterX) / (carouselRect.width / 2) * 10;
        const offsetY = (mouseY - imageCenterY) / (carouselRect.height / 2) * 10;

        image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

carouselContainer.addEventListener('mouseleave', () => {
    resetParallax();
});

function resetParallax() {
    parallaxImages.forEach((image) => {
        image.style.transform = 'translate(0)';
    });
}

const card = document.querySelector('.zoom-card');

card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
});
