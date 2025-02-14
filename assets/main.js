
    const slides = document.querySelector('.slides');
        const slideCount = document.querySelectorAll('.slide').length;

        let currentIndex = 0;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slideCount; 
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(showNextSlide, 6000); 

        const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount; 
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount; 
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});


    const elementsToTranslate = {
        home: document.querySelector('.nav-links a[href="index.html"]'),
        about: document.querySelector('.nav-links a[href="about.html"]'),
        projects: document.querySelector('.nav-links a[href="#"]'),
        collections: document.querySelector('.nav-links a[href="#"]:nth-child(4)'),
        contact: document.querySelector('.nav-links a[href="#"]:nth-child(5)'),
        callUs: document.querySelector('.phone p'),
        whatWeDo: document.querySelector('.what-we-do .section-title'),
        residentialDesign: document.querySelector('.service:nth-child(1) h3'),
        residentialDescription: document.querySelector('.service:nth-child(1) p'),
        customFurniture: document.querySelector('.service:nth-child(2) h3'),
        customDescription: document.querySelector('.service:nth-child(2) p'),
        contractFurniture: document.querySelector('.service:nth-child(3) h3'),
        contractDescription: document.querySelector('.service:nth-child(3) p'),
        outdoorFurniture: document.querySelector('.service:nth-child(4) h3'),
        outdoorDescription: document.querySelector('.service:nth-child(4) p'),
    };





    document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalTitle.innerText = this.alt; // Використовуємо alt як заголовок
            modalDescription.innerText = this.getAttribute("data-description");
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


function navigateTo(category) {
    window.location.href = category + ".html"; // Перехід на відповідну сторінку
}









document.addEventListener("DOMContentLoaded", function () {
    let preloader = document.getElementById("preloader");

    function showPreloader() {
        preloader.classList.add("show");
    }

    function hidePreloader() {
        preloader.classList.remove("show");
    }

    // Покажемо прелоадер перед переходом на іншу сторінку
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (
                this.href &&
                this.target !== "_blank" &&
                !this.href.includes("mailto:") &&
                !this.href.includes("tel:") &&
                !this.href.includes("#") // Ігноруємо якірні посилання
            ) {
                event.preventDefault();
                showPreloader();
                setTimeout(() => {
                    window.location.href = this.href;
                }, 1400); // Час перед переходом
            }
        });
    });

    // Приховуємо прелоадер після завантаження сторінки
    window.addEventListener("load", function () {
        hidePreloader();
    });
});




