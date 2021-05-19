const email = document.querySelector('.input-bar-btn input');
const btn = document.querySelector('.input-bar-btn button');
// const text = document.querySelector('.validate-msg');
const error = document.querySelector('.error');
const errorMessage = document.querySelector('.error p');

    // validate Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const emValue = email.value;
  
    if (validateEmail(emValue) == false) {
      btn.classList.add('invalid');
      error.classList.add("err")
      errorMessage.textContent = 'Please eneter a vailid email address';
      return false;
  } else {
      email.value = '';
      btn.classList.remove('invalid');
      error.classList.add("err")
    errorMessage.textContent = 'email is successful';
    errorMessage.style.color="green"
      setTimeout(function(){ 
          error.classList.remove("err")
        errorMessage.style.color="red"
    }, 1500);
    
  }
  return true;
}


  btn.addEventListener("click", validate);


