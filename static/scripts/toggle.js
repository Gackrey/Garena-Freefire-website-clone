let hamburger = document.querySelector('.hamburger');
let navelements = document.querySelector('.navelem');
hamburger.addEventListener("click", function (e) {
    navelements.classList.toggle('active');
});