const pages = document.querySelectorAll(".images");

console.log(document.getElementsByClassName('btn-next'));
console.log(document.getElementsByTagName("button"));
console.log(document.querySelector([title="b"]));
console.log(document.querySelector('button.btn.btn-next'));
console.log(getElementsByClassName('btn-next'));

pages.forEach((page, i) => {
    page.style.transform = `translateX(${i * 100}%)`;
});

const nextPage = document.getElementsByClassName('btn-next');

let pageCount = 0;
let maxPage = pages.length - 1;

nextPage.addEventListener("click", () => {
    if (pageCount === maxPage) {
        pageCount = 0;
    } else {
        pageCount++;
        console.log(pageCount);
    }
});
