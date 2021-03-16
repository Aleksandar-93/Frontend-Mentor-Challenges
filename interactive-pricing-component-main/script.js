// slider variables
const slider = document.getElementById('slider');
const output = document.getElementById('output');
const view = document.getElementById('view');
const viewArr = ["10K", "50K", "100K", "500K", "1M"]
const priceArr = [8, 12, 16, 24, 36];
// toggle discount button variable
const toggleBtn = document.querySelector('.toggle-btn');

// toggle button discount on klick
toggleBtn.addEventListener('click', discount);
toggleBtn.addEventListener('keypress', discount);


// starting output
output.innerHTML = `$${priceArr[slider.value]}.00`;
view.innerHTML = viewArr[slider.value];

// output change when drag // slider move
slider.oninput = function(){
    output.innerHTML = `$${priceArr[this.value]}.00`; 
    view.innerHTML = viewArr[this.value]; 
    sliderMove();
    
}



// discount function 

function discount(){
    toggleBtn.classList.toggle('toggle-active')
    let discount = priceArr.map(el => el-(el *0.25));
    let removeDiscount = priceArr.map(el => el);
    
        if(toggleBtn.classList.contains('toggle-active')){
        output.innerHTML = `$${discount[slider.value]}.00`;
        slider.oninput = function(){
            output.innerHTML = `$${discount[this.value]}.00`; 
            view.innerHTML = viewArr[this.value]; 
            sliderMove();
        }
        }else{
        output.innerHTML = `$${removeDiscount[slider.value]}.00`;
        slider.oninput = function(){
            output.innerHTML = `$${removeDiscount[this.value]}.00`; 
            view.innerHTML = viewArr[this.value]; 
            sliderMove();
        }
        }
    }


    // slider color  move function 
    function sliderMove(){
        let x = slider.value*25;
        let color = `linear-gradient(90deg, hsl(174, 77%, 80%)${x}% , hsl(224, 65%, 95%)${x}%)`;
        slider.style.background = color;
    }