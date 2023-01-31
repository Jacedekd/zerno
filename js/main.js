
let axiosData;


let flipCard__slide = document.querySelectorAll('.flipJs');
flipCard__slide = [...flipCard__slide]


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
let products__Block = document.querySelectorAll('.products__Block')

console.log(products__Block);

let products__BlockItem = document.querySelectorAll('.products__BlockItem')

flipCard__slide.map((item) => {
  item.addEventListener('click', () => {
    products__Block[0].classList.remove('is_active')
    products__Block[1].classList.remove('is_active')
    products__Block[2].classList.remove('is_active')
    if (item.dataset.url === `https://atlassoft.site/shrot/public/products/1`) {
      products__Block[0].classList.add('is_active')
    }
    if (item.dataset.url === `https://atlassoft.site/shrot/public/products/6`) {
      products__Block[1].classList.add('is_active')
    }
    if (item.dataset.url === `https://atlassoft.site/shrot/public/products/7`) {
      products__Block[2].classList.add('is_active')
    }
  })
});




// axios.all([axios.get(flipCard__slide[0].dataset.url), axios.get(flipCard__slide[1].dataset.url), axios.get(flipCard__slide[2].dataset.url)])
//   .then((res) => {
//     axiosData = res
//     console.log(axiosData);
//   })



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

let toolbar__phone = document.querySelector('.toolbar__phone')

toolbar__phone.addEventListener('click', () => {
  toolbar__phone.classList.add('is-active')
})

window.addEventListener('scroll', () => {
  toolbar__phone.classList.remove('is-active')
})

let aboutUs__HistoryBlocking = document.querySelectorAll('.aboutUs__HistoryBlocking')
// aboutUs__HistoryBlocking = Array.from(aboutUs__HistoryBlocking)

let eHeight = [];

// const amount = aboutUs__HistoryBlocking.reduce((total, item) => {

// })
let eght = 80;
aboutUs__HistoryBlocking.forEach(e => {

  eHeight.push(e.clientHeight)
})
console.log(eHeight);
// aboutUs__HistoryBlocking.forEach(e => {
//   if(e.classList.contains('ing2') === true) {
//     e.style.top = `${eHeight[0] += 80}px `
//   }
//   if(e.classList.contains('ing3') === true) {
//     e.style.top = `${eHeight[0] + 80 + eHeight[1]}px`
//   }
//   if(e.classList.contains('ing4') === true) {
//     e.style.top = `${eHeight[0] + eHeight[1] + eHeight[2]}px`
//   }
//   if(e.classList.contains('ing5') === true) {
//     e.style.top = `${eHeight[0] + eHeight[1] + eHeight[2] + eHeight[3]}px`
//   }
//   if(e.classList.contains('ing6') === true) {
//     e.style.top = `${eHeight[0] + eHeight[1] + eHeight[2] + eHeight[3] + eHeight[4]}px`
//   }
//   if(e.classList.contains('ing7') === true) {
//     e.style.top = `${eHeight[0] + eHeight[1] + eHeight[2] + eHeight[3] + eHeight[4] + eHeight[5]}px`
//   }
//   if(e.classList.contains('ing8') === true) {
//     e.style.top = `${eHeight[0] + eHeight[1] + eHeight[2] + eHeight[3] + eHeight[4] + eHeight[5] + eHeight[6]}px`
//   }
//   // e.style.top = `${eHeight[1]}px`
//   console.log(e);
// })





