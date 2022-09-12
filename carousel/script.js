const pages = document.querySelectorAll(".images");

pages.forEach((page, i) => {
    page.style.transform = `translateX(${i * 100}%)`;
});

