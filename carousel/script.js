const pages = document.querySelectorAll(".images");

pages.forEach((page, i) => {
    page.style.transform = `translateX(${i * 100}%)`;
});

let pageCount = 0;

const nextPage = document.querySelector(".btn-next");

nextPage.addEventListener("click", function () {
    pageCount++;

    pages.forEach((page, i) => {
        page.style.transform = `translateX(${100 * (i - pageCount)}%)`;
    });
    console.log(pageCount);
    
});
