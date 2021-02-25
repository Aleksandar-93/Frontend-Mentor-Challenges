const email = document.querySelector('#input input');
const btn = document.querySelector('#input button');

    // validate Email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const emValue = email.value;
  
    if (validateEmail(emValue)) {
      alert('good');
    } else {
      alert("not good")
    }
    return false;
  }
    // Clear input
  function ClearFields() {
      email.value = "";
   }


  btn.addEventListener("click", validate);
  btn.addEventListener("click", ClearFields);
















// function emailIsValid (email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }