const toggleBtn = document.querySelector('.toggle-wrap');
const priceMo = document.querySelectorAll('.price-mo');
const priceAnn = document.querySelectorAll('.price-ann');


toggleBtn.addEventListener('click', ()=> {
    toggleBtn.classList.toggle('toggle-left')

    if(toggleBtn.classList.contains('toggle-left')){
        priceMo.forEach(element => {
            element.style.display= "none"
        });
        priceAnn.forEach(element => {
            element.style.display= "block"
        });
    }else{
        priceMo.forEach(element => {
            element.style.display= "block"
        });
        priceAnn.forEach(element => {
            element.style.display= "none"
        });
    }
});

        




  



