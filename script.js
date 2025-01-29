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

// typewriter about

// var characterAbout = 0;
// const txtAbout = 'About';
// const aboutText = document.getElementById("introHeading")

// function typeWriterAbout() {
//     if (characterAbout < txtAbout.length){
//     aboutText.textContent += txtAbout.charAt(characterAbout);
//     characterAbout++;
//     setTimeout(typeWriterAbout, 100);}
//   }

//   function clearAbout (){
//     txtAbout.textContent = "";
//   }

// aboutText.addEventListener("focusIn", typeWriterAbout);
// aboutText.addEventListener('blur', clearAbout)

// typeWriterAbout();



// json import and grid items

const projectGrid = document.getElementById('projectGrid')

fetch('./Projects/projects.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data.projects.forEach((info) => {

        const mainDiv = document.createElement("div");
        mainDiv.classList.add("inline-block", "relative")

        const hoverDiv = document.createElement("div");
        hoverDiv.classList.add("md:absolute", "w-[100%]", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-center", "md:opacity-0", "md:hover:opacity-100", "md:bg-amber-50", "pt-8", "md:bg-opacity-90", "transition-opacity", "duration-550", "rounded-xl")
        

        const projectPhoto = document.createElement("img");
        projectPhoto.src = info.image;
        projectPhoto.alt = info.alt;
        projectPhoto.classList.add("transition-all", "duration-550", "hover:opacity-30", "transition-opacity", "shadow-lg", "rounded-xl", "block");

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



// var bg1 = "linear-gradient(90deg, rgba(255,251,235,0.99) 44%, rgba(254,243,199,0.99) 100%)";
// var bg1_5 = "rgb(255,251,235)"
// var bg2 = "linear-gradient(90deg, rgba(30,41,59,1) 20%, rgba(15,23,42,1) 95%)";
// var bg3 = "linear-gradient(90deg, rgba(147,197,253,1) 20%, rgba(96,165,250,1) 95%)";
// const body = document.querySelector("body")

// document.addEventListener("scroll touchmove", () => {
//   if ((document).scrollTop() >= document.getElementById("intro").position().top) {
//     body.style.background = bg2;

// }
// else if ((document).scrollTop() >= document.getElementById("career").position().top) {
//     body.style.background = bg3;

// }
// else if ((document).scrollTop() >= document.getElementById("about").position().top) {
//   body.style.background = bg2;

// }
// else if ((document).scrollTop() >= document.getElementById("contact").position().top) {
//   body.style.background = bg3;

// }
// else {
//     body.style.background = bg1
// }
// });


