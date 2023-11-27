const information = [
  {
    id: 1,
    imageOne: "./images/image-emily.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Javascript",
    overlay: "Pair with Olivia",
  },
  {
    id: 2,
    imageOne: "./images/avatar.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Java",
    overlay: "Pair with Jessica",
  },
  {
    id: 3,
    imageOne: "./images/testimony3.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Swift",
    overlay: "Pair with Sam",
  },
  {
    id: 4,
    imageOne: "./images/women3.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Ruby",
    overlay: "Pair with Wade",
  },
  {
    id: 5,
    imageOne: "./images/women4.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Python",
    overlay: "Pair with Ember",
  },
  {
    id: 6,
    imageOne: "./images/women5.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Javascript",
    overlay: "Pair with Lizabeth",
  },
  {
    id: 7,
    imageOne: "./images/image-emily.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Java",
    overlay: "Pair with Rachael",
  },
  {
    id: 8,
    imageOne: "./images/avatar.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Javascript",
    overlay: "Pair with Jude",
  },
  {
    id: 9,
    imageOne: "./images/testimony3.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Python",
    overlay: "Pair with Ashfa",
  },
  {
    id: 10,
    imageOne: "./images/image-emily.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Java",
    overlay: "Pair with Trisha",
  },
  {
    id: 11,
    imageOne: "./images/avatar.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "C",
    overlay: "Pair with Will",
  },
  {
    id: 12,
    imageOne: "./images/testimony3.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "PHP",
    overlay: "Pair with Aishat",
  },
  {
    id: 13,
    imageOne: "./images/image-emily.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Javascript",
    overlay: "Pair with Sumi",
  },
  {
    id: 14,
    imageOne: "./images/avatar.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Java",
    overlay: "Pair with Tobi",
  },
  {
    id: 15,
    imageOne: "./images/testimony3.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "MySql",
    overlay: "Pair with Sammy",
  },
  {
    id: 16,
    imageOne: "./images/image-emily.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "C++",
    overlay: "Pair with Wends",
  },
  {
    id: 17,
    imageOne: "./images/women4.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Python",
    overlay: "Pair with Dan",
  },
  {
    id: 18,
    imageOne: "./images/men4.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Go",
    overlay: "Pair with Gift",
  },
  {
    id: 19,
    imageOne: "./images/women2.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Kotlin",
    overlay: "Pair with Coker",
  },
  {
    id: 20,
    imageOne: "./images/men3.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Kotlin",
    overlay: "Pair with Rufus",
  },
  {
    id: 21,
    imageOne: "./images/men2.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "/images/github-1.png",
    language: "HTML",
    overlay: "Pair with Maisha",
  },
  {
    id: 22,
    imageOne: "./images/woman1.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "HTML",
    overlay: "Pair with Bernie",
  },
  {
    id: 23,
    imageOne: "./images/men1.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "Kotlin",
    overlay: "Pair with Dan",
  },
  {
    id: 24,
    imageOne: "./images/testimony3.jpg",
    imageTwo: "./images/linkedin.png",
    imageThree: "./images/github-1.png",
    language: "PHP",
    overlay: "Pair with Israel",
  },
];

const menu = document.querySelector(".menu");
const navLists = document.querySelector(".nav-lists");
const navList = document.querySelectorAll(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector(".intro-head");
const image = document.querySelector(".display-image");
const input = document.querySelector(".input");
const cardContainer = document.getElementById("grid-container");
const section1 = document.querySelector("#about");
const section2 = document.querySelector("#intro");
const section3 = document.querySelector("#section-pair");
const sectionOffer = document.querySelector(".offer");
const signUp = document.querySelector(".sign-up");
const footerSpan = document.querySelector(".footer-span");
const randomCard = document.querySelector(".random-card");


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

//  rendering the cards
function generateElements(){
  let template = '';
  information
  .map(function (item) {
    const { imageOne, imageTwo, imageThree, language, overlay } = item;
     template += 
     `<div class="grid-item">
        <img src=${imageOne} alt="pair-image"/>
        <div class="overlay">${overlay}
          <div class="inner-img">
             <img src=${imageTwo}  alt="linkedIn"/>
             <img src=${imageThree} alt="github">
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
const offering = [
  {
    id: 1,
    h3: "Knowledge sharing :",
    p: "Acess a wealth of knowledge shared by developers on th same journey as youreslf, learn about lates technologies and best practices"
  },
  {
    id: 2,
    h3: "Project Collaboration :",
    p: " Find like minded developers to collaborate on exciting projects, whether you have an idea or want to contribute your skills, theres a project waiting for you."
  },
  {
    id: 3,
    h3: "Networking:",
    p: "Build meaningful connections with peers, industry leads. Networking is a vital part of career growth, and we provide ample opportunites to connect with the rigth people"
  },
  {
    id: 4,
    h3: "Coding Challenges :",
    p: "Sharpen your skills and have fun solving a coding challenge with a peer to test  your abilities"
  },
  {
    id: 5,
    h3: "Accountability Partner :",
    p: "Sharpen your skills and have fun solving a coding challenge with a peer to test  your abilities"
  },

];

sectionOffer.innerHTML += offering.map(function (offer) {
  const { h3, p } = offer;
  return `
    <ul>
        <ul>
            <li>
                <h3>${h3}</h3>
                 <p> ${p}</p> 
            </li>
        </ul>
    </ul>
`;
});


const testimonials =[
  {
    id: 1,
    slideImg: './images/woman1.jpg',
    slideName: "Jane Doe",
    slideText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem
    eos rerum voluptas laboriosam, velit error eligendi Dolore nulla
    doloremque commodi`
  },

  {
    id: 2,
    slideImg: './images/client.png',
    slideName: 'Devin Moore',
    slideText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem
    "eos rerum voluptas laboriosam, velit error eligendi Dolore nulla"
    "doloremque commodi`
  },

  {
    id: 3,
    slideImg:'./images/men2.jpg',
    slideName: 'Jerry Davis',
    slideText: `Signing up on this platform was the best decision I made for my learning journey I got to connect and make an accountability partner for myself. Thank you Developer.io`
  }
];

   
const button =  `<button class="button">Click me!</button>`
const header = `<h2 class="testimony-h2">What Our Clients Say</h2>`;
randomCard.insertAdjacentHTML("afterbegin", header);
randomCard.insertAdjacentHTML('afterend', button)
//RANDOMNESS FO R THE QUOTES 
randomNum = Math.floor(Math.random() * testimonials.length)
const randomText  = testimonials[randomNum]
 function testimony(){
  const html =
` <div class="inner-random">
    <img src=${testimonials[0].slideImg} class='r-img' alt="clients">
     <h3 class='r-h3'>${testimonials[0].slideName}</h3>
     <p class='r-p'>${testimonials[0].slideText}</p>
</div> `
return randomCard.innerHTML += html;
}
testimony()


const randomBtn = document.querySelector('.button')
  

randomBtn.addEventListener('click', function(){
const img = document.querySelector('.r-img')
img.src = randomText.slideImg;
const h3 = document.querySelector('.r-h3')
h3.textContent = randomText.slideName;
const p = document.querySelector('.r-p')
p.textContent = randomText.slideText;
});
