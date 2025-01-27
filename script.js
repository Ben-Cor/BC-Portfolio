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
const txt = 'I am Ben Cornell';
const typeSpeed = 70;
const nameText = document.getElementById("name")


function typeWriter() {
  if (character < txt.length) {
    nameText.innerText += txt.charAt(character);
    character++;
    setTimeout(typeWriter, typeSpeed);
  }
}

nameText.addEventListener('focus', typeWriter)



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