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
const txt = 'I am Ben Cornell_';
const nameText = document.getElementById("name")

function cursorBlink() {
    nameText.textContent = nameText.textContent.slice(0, -1);
    nameText.textContent += "_";
    setTimeout(cursorBlinkOff, 140);
}

function cursorBlinkOff() {
    nameText.textContent = nameText.textContent.slice(0, -1);
    nameText.textContent += "-"
    setTimeout(cursorBlink, 140);
}

function typeWriter() {
  if (character < txt.length) {
    nameText.textContent += txt.charAt(character);
    character++;
    setTimeout(typeWriter, 70);
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
        projectPhoto.src = info.image;
        projectPhoto.alt = info.alt;
        projectPhoto.classList.add("h-[250px]")
        projectInfo.innerText = `${info.title} \n ${info.description} \n ${info.link}`;
        projectGrid.appendChild(projectPhoto);
        projectGrid.appendChild(projectInfo)
        });
    })