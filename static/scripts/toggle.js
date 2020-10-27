let hamburger = document.querySelector('.hamburger');
let navelements = document.querySelector('.navelem');
hamburger.addEventListener("click", function () {
    navelements.classList.toggle('active');
});