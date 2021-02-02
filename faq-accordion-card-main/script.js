
const btns = document.querySelectorAll('.question');
btns.forEach(btn => {
  btn.addEventListener('click', (e)=>{
    
  if(e.currentTarget.nextElementSibling.classList.contains = "hide"){
      e.currentTarget.nextElementSibling.classList.toggle('show');
      e.currentTarget.classList.toggle('bold');
      const img = e.currentTarget.querySelector('img');
      img.classList.toggle('rotate')
     }
    
  });
});




