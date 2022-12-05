'use strict';

const container = document.querySelector('.container');
const btnSignUp = document.querySelector('.banner button');

btnSignUp.addEventListener('click', function() {
    container.classList.toggle('change');
});