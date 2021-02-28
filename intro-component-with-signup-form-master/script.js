const btn = document.getElementById('free-trail');
const input = document.querySelectorAll('.input-wrap input')
const email = document.getElementById('mail');
const success = document.getElementById('success');

const inputWrap = document.querySelectorAll('.input-wrap');

// Check if input is empty display error
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

   // check if email is valid     
    
  
     // validate Email
   function validateEmail(email) {
       const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email);
     }
   
     function validate() {
       const emValue = email.value;
   
       if (validateEmail(emValue)) {
        email.parentElement.classList.remove("error");
       
       } else {
         email.parentElement.classList.add('error');
       }
       return false;
     }
     btn.addEventListener("click", validate);
     
    
    
    //  Check if all are corect
   function ifAllCorect (){
      let i = 0;
      inputWrap.forEach(e => {
       let error = e.classList.contains("error");
          if(error){
            i --;
          }else{
            i ++;
          }

          if(i=== 4){
            success.style.display="block"
            setTimeout(()=>{
              success.style.display="none"
             }, 3000);
            input.forEach(e => {
              e.value = ""
            });
          }
        });
        
     }
  
     btn.addEventListener("click", ifAllCorect);


         


          
