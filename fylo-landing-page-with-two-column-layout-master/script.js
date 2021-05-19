const btn = document.querySelectorAll('.input-bar-btn button');

btn.forEach(item => {
  item.addEventListener('click', (e)=>{
      const email = e.target.parentElement.querySelector('.error input');

    // validate Email
    function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    const emValue = email.value;
    if (validateEmail(emValue) == false) {
      e.target.parentElement.querySelector('.error').classList.add("err")
      return false;
        } else {
            e.target.parentElement.querySelector('.error').classList.remove("err")
            email.value = '';    
        }
        return true;
}
    validate()

  })

})

