const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelectorAll('#next');
const prevBtn = document.querySelectorAll('#prev');

slides.forEach((slide, index) => {
    slide.style.position= 'absolute';
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.forEach(element => {
    element.addEventListener('click', ()=>{
    counter++
    carousel();
    console.log(nextBtn);

});
});

prevBtn.forEach(element => {
    element.addEventListener('click', ()=>{
        counter--
        carousel();
        console.log(prevBtn);
    });
});



function carousel(){
    console.log(counter);
    if(counter === slides.length){
        counter = 0
    }
    if(counter < 0){
    counter = slides.length-1;
    }

    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
        
    });

};

