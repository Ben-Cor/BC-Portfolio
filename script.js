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
const txt2 = '<p> I code things </p>_';
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


// json import and grid items

const projectGrid = document.getElementById('projectGrid')

fetch('./Projects/projects.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        data.projects.forEach((info) => {
        const projectPhoto = document.createElement("img");
        const projectInfo = document.createElement("p");
        const projectLink = document.createElement("a")
        projectPhoto.src = info.image;
        projectPhoto.alt = info.alt;
        projectPhoto.classList.add("m-w-[20%]")
        projectPhoto.classList.add("w-96")
        projectInfo.innerText =  `${info.description} \n \n`;
        projectLink.href = `${info.link}`;
        projectLink.target='blank'
        projectLink.innerText = `${info.title}`;
        projectInfo.classList.add("mx-8")
        projectGrid.appendChild(projectPhoto);
        projectGrid.appendChild(projectLink);
        projectGrid.appendChild(projectInfo);
        
        });
    })