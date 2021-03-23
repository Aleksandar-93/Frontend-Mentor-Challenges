const toggleBtn = document.querySelector('.toggle');
const toggleMenu = document.querySelector('.toggle-menu');

toggleBtn.addEventListener('click', ()=>{
    toggleMenu.classList.toggle('show-menu');
});
