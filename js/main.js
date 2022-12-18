let hamburger = document.querySelector(".hamburger"),
  hamburger_menu = document.querySelector(".hamburger_menu"),
  body = document.querySelector('body');

function hamburgerChange() {
  hamburger.classList.toggle("is-active");
  hamburger_menu.classList.toggle("toolbar__menu_Active");
  body.classList.toggle('hidden');
}

hamburger.addEventListener("click", function () {
  hamburgerChange()
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
let products__Block = document.querySelector('.products__Block')
let products__BlockItem = document.querySelectorAll('.products__BlockItem')
console.log(products__BlockItem);
let flipCard__slide = document.querySelectorAll('.flipJs');
flipCard__slide = [...flipCard__slide]

// outerHTML
flipCard__slide.map((item) => {
  item.addEventListener('click', () => {
    products__Block.classList.add('is_active')
    if (item.outerHTML === "<div class=\"flipCard__slide flipJs\" style=\"background-image: url(/assets/img/product_1.png);\"></div>") {
      products__BlockItem[2].classList.add('is_activeItem1')
    }
    if (item.outerHTML === "<div class=\"flipCard__slide flipJs modeY\" style=\"background-image: url(/assets/img/product_2.png);\"></div>") {
      products__BlockItem[2].classList.add('is_activeItem2')
    }
    if (item.outerHTML === "<div class=\"flipCard__slide flipJs\" style=\"background-image: url(/assets/img/product_3.png);\"></div>") {
      products__BlockItem[2].classList.add('is_activeItem3')
    }


  })
});

let vacanciesBtn = document.querySelectorAll('.vacanciesBtn');

let vacancies__summary = document.querySelector('.vacancies__summary');

let vacancies__summary__Modal = document.querySelector('.vacancies__summary__Modal')
let vacancies__summary_Close = document.querySelector('.vacancies__summary_Close')

vacanciesBtn.forEach(e => {
  e.addEventListener('click', () => {
    vacancies__summary.classList.add('is-active')
    body.classList.add('hidden');
  })
})


if (vacancies__summary__Modal != null) {
  vacancies__summary__Modal.addEventListener('click', () => {
    vacancies__summary.classList.remove('is-active')
    body.classList.remove('hidden');
  })
}

if (vacancies__summary_Close != null) {
  vacancies__summary_Close.addEventListener('click', () => {
    vacancies__summary.classList.remove('is-active')
    body.classList.remove('hidden');
  })
}


let product__video = document.querySelector('.product__video');
let product__video__Modal__Overlay = document.querySelector('.product__video__Modal__Overlay')

if (product__video != null) {
  product__video.addEventListener('click', () => {
    product__video.classList.add('is-active')
    body.classList.add('hidden');
  })
}


if (product__video__Modal__Overlay != null) {
  product__video__Modal__Overlay.addEventListener('click', (event) => {
    event.stopPropagation()
    product__video.classList.remove('is-active')
    body.classList.remove('hidden');
    console.log('o');
  })
}
