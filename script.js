"use strict";

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
        projectInfo.innerText = `${info.title}, ${info.description}`;
        projectGrid.appendChild(projectPhoto);
        projectGrid.appendChild(projectInfo)
        });
    })