const btn = document.getElementById('free-trail');
const input = document.querySelectorAll('.input-wrap input')
const inputWrap = document.querySelectorAll('.input-wrap');

btn.addEventListener('click', ifEmptyCheck);

function ifEmptyCheck (){

    input.forEach(element => {
        if(element.value == ""){
            element.parentElement.classList.add("error");
        
        } else{
            element.parentElement.classList.remove("error");
            
        }

        
    });
    
    
}
