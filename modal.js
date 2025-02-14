document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.src; 
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
