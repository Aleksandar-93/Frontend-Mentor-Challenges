const btn = document.querySelector('#btn');
const header = document.querySelector('header');

btn.addEventListener('click', (e)=>{
    header.classList.toggle('show');
})


  window.addEventListener("resize", function() {
  if (window.innerWidth > 580) header.classList.remove("show");
});