import countries from "./Countries.js"

const title = document.getElementById('title')
title.textContent = 'WORLD COUNTRIES LIST'

const subtitle = document.getElementById('subtitle')
subtitle.textContent = `Total Number of Countries : ${countries.length}`

const container = document.querySelector('.container');

countries.forEach(country => {
    const div = document.createElement('div');
    div.textContent = country;
    div.classList.add('country');
    container.appendChild(div);
});