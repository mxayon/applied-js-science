const pages = document.querySelectorAll(".images");

console.log(document.getElementsByClassName('button'));
console.log(document.querySelector('body button'))

pages.forEach((page, i) => {
    page.style.transform = `translateX(${i * 100}%)`;
});

let pageCount = 0;
const nextPage = document.querySelector("button[title]");


nextPage.addEventListener("click", function onClick() {
    pageCount++;
    console.log('pageCount');

    pages.forEach((page, i) => {
        page.style.transform = `translateX(${100 * (i - pageCount)}%)`;
    });
});
