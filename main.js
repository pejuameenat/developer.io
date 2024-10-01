import { information, offering, steps, testimonials } from './obj.js'

const menu = document.querySelector('.menu')
const navLists = document.querySelector('.nav-lists')
const navList = document.querySelectorAll('.nav-list')
const logo = document.querySelector('.intro-head')
const image = document.querySelector('.display-image')
const input = document.querySelector('.input')
const cardContainer = document.getElementById('grid-container')
const sectionOffer = document.querySelector('.offer')
const signUp = document.querySelector('.sign-up')
const footerSpan = document.querySelector('.footer-span')
const allSections = document.querySelectorAll('.section-observer')
const nav = document.querySelector('nav')
const operationsTabContainer = document.querySelector(
  '.operations__tab-container'
)
const carouselInner = document.querySelector('.carousel-inner')



const date = new Date()
const year = date.getFullYear()
footerSpan.textContent = year
function mobileNav() {
  navLists.classList.toggle('hide')
  navLists.classList.toggle('mobile-nav')
  logo.classList.toggle('hide')
  image.classList.toggle('hide')
  menu.style.float = 'left'
  for (const list of navList) {
    list.classList.toggle('mobile-list-padding')
  }
  signUp.classList.toggle('sign-up_color')
}

menu.addEventListener('click', mobileNav)

// search pair
nav.addEventListener('click', function (e) {
  if (e.target.contains('nav-link')) {
    id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

//  rendering the cards
function generateElements() {
  let template = ''
  information.map(function (item) {
    const { imageOne, imageTwo, imageThree, language, overlay } = item
    template += `<div class="grid-item">
        <img src=${imageOne} alt="pair-image"/>
        <div class="overlay">${overlay}
          <div class="inner-img">
             <img src=${imageTwo}  alt="linkedIn"/>
             <img src=${imageThree} alt="github"/>
          </div>
       </div>${language}
     </div>`
  })
  cardContainer.innerHTML = template
  const gridItems = document.querySelectorAll('.grid-item')

  input.addEventListener('input', function () {
    for (const grid of gridItems) {
      const filter = input.value.toLowerCase()
      let text = grid.textContent
      text.toLowerCase().includes(filter)
        ? (grid.style.display = 'block')
        : (grid.style.display = 'none')
    }
  })
  return template
}
generateElements()
// pair.js

sectionOffer.innerHTML += offering.map(function (offer) {
  const { h3, p } = offer
  return `
        <ul>
            <li>
                <h3>${h3}</h3>
                 <p>${p}</p> 
            </li>
        </ul>
`
})

function stepsTab() {
  const operatioWrapper = document.querySelector('.operations__container')
  let elem = ''
  steps.map((step, i) => {
    const { use, h5, p } = step
    elem += `<div class="operations__content operations__content--${
      i + 1
    } operations__content--active">
      <div class="operations__icon operations__icon--${i + 1}">
        <svg>
          <use xlink:href=${use}></use>
        </svg>
      </div>
      <div class="content-text">
        <h5 class="operations__header">${h5}</h5>
        <p>${p}</p>
      </div>
    </div>`
  })
  return operatioWrapper.insertAdjacentHTML('afterbegin', elem)
}

stepsTab()

operationsTabContainer.addEventListener('click', function (e) {
  const tabs = document.querySelectorAll('.operations__tab')
  const clicked = e.target.closest('.operations__tab')
  tabs.forEach((tab) => {
    tab.classList.remove('operations__tab--active')
  })

  const operationsContent = document.querySelectorAll('.operations__content')
  operationsContent.forEach((op) => {
    // console.log(op,i)
    op.classList.remove('operations__content--active')
  })
  if (!clicked) return
  clicked.classList.add('operations__tab--active')
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active')
})

const header = `<h2 class="testimony-h2">What Our Clients Say</h2>`
const carouselContainer = document.querySelector('#carousel-container')
carouselContainer.insertAdjacentHTML('afterbegin', header)

function slider() {
  let html = ''
  testimonials.forEach((testimony) => {
    const { slideImg, slideName, slideText } = testimony
    html += ` 
     <div class="carousel-slider">
     <img src=${slideImg} alt="office worker image"/>
     <h3>${slideName}</h3>
     <p>${slideText}</p>
   </div>
`
  })
  return (carouselInner.innerHTML = html)
}

testimonials.map(slider)

function movingSliders() {
  const innerContainerCarousel = document.querySelector('#inner-container')
  const btnLeft = innerContainerCarousel.querySelector('.left-arr')
  const btnRight = innerContainerCarousel.querySelector('.right-arr')
  let index = 0
  btnLeft.addEventListener('click', function () {
    index = index > 0 ? index - 1 : 2
    carouselInner.style.transform = `translate(${index * -33}%)`
  })

  btnRight.addEventListener('click', function () {
    index = index < 2 ? index + 1 : 0
    carouselInner.style.transform = `translate(${index * -33}%)`
  })
}

movingSliders()

function sectionObserve(entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(sectionObserve, {
  threshold: 0.15,
  root: null,
})

allSections.forEach((section) => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})
