const email = document.querySelector('.input input');
const btn = document.querySelector('#notify');
const error = document.querySelector('.error-message');
const input = document.querySelector('.input');

    // validate Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const emValue = email.value;
  
    if (validateEmail(emValue) == false) {
        input.classList.add('error');
        error.style.display="block";
        email.style.color="var(--Light-Red)";
        setTimeout(()=>{ 
        email.style.color="var(--Very-Dark-Blue)";
    }, 1000);
  return false;
} else {
  input.classList.remove('error');
  error.style.display="none";
  email.value ="You are subscribed thank you";
  email.setAttribute('id',"valide");
  setTimeout(()=>{ 
    email.removeAttribute('id',"valide");
    email.value ="";
}, 2000);

}
return true;
}

btn.addEventListener("click", validate);
            


