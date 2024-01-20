import { information, offering, testimonials } from "./obj.js";

const menu = document.querySelector(".menu");
const navLists = document.querySelector(".nav-lists");
const navList = document.querySelectorAll(".nav-list");
// const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector(".intro-head");
const image = document.querySelector(".display-image");
const input = document.querySelector(".input");
const cardContainer = document.getElementById("grid-container");
// const section1 = document.querySelector("#about");
// const section2 = document.querySelector("#intro");
// const section3 = document.querySelector("#section-pair");
const sectionOffer = document.querySelector(".offer");
const signUp = document.querySelector(".sign-up");
const footerSpan = document.querySelector(".footer-span");
// const randomCard = document.querySelector(".random-card");
const allSections = document.querySelectorAll('.section-observer');
const nav = document.querySelector('nav');


const date = new Date();
const year = date.getFullYear();
footerSpan.textContent = year;
function mobileNav() {
  navLists.classList.toggle("hide");
  navLists.classList.toggle("mobile-nav");
  logo.classList.toggle("hide");
  image.classList.toggle("hide");
  menu.style.float = "left";
  for (const list of navList) {
    list.classList.toggle("mobile-list-padding");
  }
  signUp.classList.toggle("sign-up_color");
}

menu.addEventListener("click", mobileNav);

// search pair
nav.addEventListener('click', function(e){
  if(e.target.contains('nav-link')){
    id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

//  rendering the cards
function generateElements(){
  let template = '';
  information
  .map(function (item) {
    console.log(item);
    const { imageOne, imageTwo, imageThree, language, overlay } = item;
     template += 
     `<div class="grid-item">
        <img src=${imageOne} alt="pair-image"/>
        <div class="overlay">${overlay}
          <div class="inner-img">
             <img src=${imageTwo}  alt="linkedIn"/>
             <img src=${imageThree} alt="github"/>
          </div>
       </div>${language}
     </div>`;
  })
  cardContainer.innerHTML = template;
  const gridItems = document.querySelectorAll('.grid-item')
   
  input.addEventListener('input', function(){
    for(const grid of gridItems){
      const filter = input.value.toLowerCase();
      let text = grid.textContent;
      text.toLowerCase().includes(filter)
        ? (grid.style.display = "block")
        : (grid.style.display = "none");
    }
  })
  return template;
}
generateElements()
// pair.js

sectionOffer.innerHTML += offering.map(function(offer) {
  const { h3, p } = offer;
  return `
        <ul>
            <li>
                <h3>${h3}</h3>
                 <p>${p}</p> 
            </li>
        </ul>
`
});

   
const header = `<h2 class="testimony-h2">What Our Clients Say</h2>`;
const carouselContainer = document.querySelector('#carousel-container');
carouselContainer.insertAdjacentHTML("afterbegin", header);
const carouselInner = document.querySelector('.carousel-inner');

function slider(){
  let html = ''
  testimonials.forEach(testimony =>{ 
    const {slideImg, slideName, slideText} = testimony 
    html += ` 
     <div class="carousel-slider">
     <img src=${slideImg} alt="office worker image"/>
     <h3>${slideName}</h3>
     <p>${slideText}</p>
   </div>
`
})
return carouselInner.innerHTML = html;
}

testimonials.map(slider);

function movingSliders(){
  const innerContainerCarousel = document.querySelector('#inner-container');
  const btnLeft = innerContainerCarousel.querySelector('.left-arr');
  const btnRight = innerContainerCarousel.querySelector('.right-arr');
  let index = 0;
  btnLeft.addEventListener('click', function(){
    index = index > 0 ? index -1 : 2;
    carouselInner.style.transform = `translate(${index *-33}%)`
  })
  
  btnRight.addEventListener('click', function(){
    index= index < 2 ? index + 1: 0;
    carouselInner.style.transform = `translate(${index *-33}%)`
  })
}

movingSliders();

function sectionObserve(entries, observer){
  const[entry] = entries;
  if(!entry.isIntersecting)return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver  = new IntersectionObserver(sectionObserve, {
  threshold:0.15,
  root: null
})

allSections.forEach(section =>{
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})