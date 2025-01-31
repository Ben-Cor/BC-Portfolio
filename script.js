"use strict";


// dropdown menu

const drop = document.querySelector('#dropdown');

drop.addEventListener('mouseenter', show);
function show() {
    const menu = document.querySelector('#dropdown-content');
    menu.classList.remove('hidden')
}

drop.addEventListener('mouseleave', hide);
function hide() {
    const menu = document.querySelector('#dropdown-content');
    const drop = document.querySelector('.dropdown');
    menu.classList.add('hidden')
}




// // typewriter effect

var character = 0;
const txt = '<h1> I am Ben Cornell </h1>';
const nameText = document.getElementById("name")

function typeWriter() {
    if (character < txt.length){
    nameText.textContent += txt.charAt(character);
    character++;
    setTimeout(typeWriter, 70);
  }
  else {
    typeWriter2();
  }
}

var character2 = 0;
const txt2 = '<p> I code things </p>|';
const codeText = document.getElementById("iCode");

function cursorBlink() {
    codeText.textContent = codeText.textContent.slice(0, -1);
    codeText.textContent += "|";
    setTimeout(cursorBlinkOff, 240);
}

function cursorBlinkOff() {
    codeText.textContent = codeText.textContent.slice(0, -1);
    codeText.innerText += "\u200c"
    setTimeout(cursorBlink, 240);
}


function typeWriter2() {
  if (character2 < txt2.length) {
    codeText.textContent += txt2.charAt(character2);
    character2++;
    setTimeout(typeWriter2, 70);
  }
  else {
    cursorBlink();
    } 
  }


typeWriter();



// cursor blink


const headings = document.querySelectorAll('h4');

headings.forEach((heading) => {
  const cursorElement = document.createElement('span');
  cursorElement.textContent = '|';
  cursorElement.classList.add('blinkoff');
  heading.appendChild(cursorElement);

  function cursorBlink() {
    cursorElement.classList.toggle('blinkoff');
    setTimeout(cursorBlink, 500);
  }

  cursorBlink();
});


// json import and grid items

const projectGrid = document.getElementById('projectGrid')

fetch('./Projects/projects.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data.projects.forEach((info) => {

        const mainDiv = document.createElement("div");
        mainDiv.classList.add("inline-block", "relative", "max-w-[350px]")

        const hoverDiv = document.createElement("div");
        hoverDiv.classList.add("md:absolute", "w-[100%]", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-center", "md:opacity-0", "md:hover:opacity-100", "md:bg-amber-50", "pt-8", "md:bg-opacity-90", "transition-opacity", "duration-550", "rounded-xl")
        

        const projectPhoto = document.createElement("img");
        projectPhoto.src = `./Projects/project-Images/${info.image}`;
        projectPhoto.alt = info.alt;
        projectPhoto.classList.add("duration-550", "hover:opacity-30", "transition-opacity", "shadow-lg", "rounded-xl", "block", "border-slate-800", "border-[3px]");

        const projectInfo = document.createElement("p");
        projectInfo.classList.add("mx-8", "mb-20")
        projectInfo.innerText =  `\n\r\n ${info.title} \n\r\n ${info.description} \n`;

        const projectLink = document.createElement("a");
        projectLink.href = `${info.link}`;
        projectLink.target='blank'

        const icon = document.createElement("i")
        icon.classList.add("fa-brands", "fa-square-github", "fa-2xl");

        projectLink.appendChild(icon);
        hoverDiv.appendChild(projectLink)
        hoverDiv.appendChild(projectInfo)
        mainDiv.appendChild(projectPhoto)
        mainDiv.appendChild(hoverDiv)
        projectGrid.appendChild(mainDiv)
        
        });
    })
  



    // scroll background


const bg1 = "rgba(255,251,235,0.9)";
const bg2 = "rgba(30,41,59,0.95)";
const bg3 = "rgba(147,197,253,0.9)";
var places = document.querySelectorAll('.bgMarker')
var tHold = 0.5

function checkWidth() {
  if (screen.width<=850){ 
    tHold = 0.15 }
  else {
    tHold = 0.35
  }
}

checkWidth();

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                if (entry.target.id === "about"|| entry.target.id === "hobby") {
                  document.body.style.backgroundColor = bg2
                } else if (entry.target.id === "career"|| entry.target.id === "contact") {
                  document.body.style.backgroundColor = bg3
                } else if (entry.target.id === "code"||entry.target.id === "avatar"){
                  document.body.style.backgroundColor = bg1
                }
            

            } 
        });
    },
    { threshold: tHold }
);

places.forEach((place) => {
  observer.observe(place);
});



// image reveal

if (screen.width>=850) {

  const Images = document.querySelectorAll('.geoimageLeft');

  const observerImage = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
          entry.target.classList.toggle('imageshow', entry.isIntersecting);
        });
        { rootMargin: "100px"
        }
    })

    Images.forEach((Image) => {
    observerImage.observe(Image);
    });

    const ImagesRight = document.querySelectorAll('.geoimageRight');

  const observerImage2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
          entry.target.classList.toggle('imageshow', entry.isIntersecting);
        });
        { rootMargin: "100px"
        }
    })

    ImagesRight.forEach((Image) => {
    observerImage.observe(Image);
    });
  } else {
    const Images = document.querySelectorAll('.geoimageLeft');
    const ImagesRight = document.querySelectorAll('.geoimageRight');
    Images.forEach((Image) => {
      Image.classList.add('imageshow');
    })
    ImagesRight.forEach((Image) => {
      Image.classList.add('imageshow');
    })

  }