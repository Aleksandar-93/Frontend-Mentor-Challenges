const personWrap = document.querySelector('.person-wrap');
const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    personWrap.classList.toggle('hide');
    personWrap.classList.toggle('btn-toggle');

});