const boton = document.getElementById('button')
const error = document.getElementById('error-msg')
const email = document.getElementById('email')



// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
  
//     checkInputs();
// });




function checkInputs(){
    const emailValid = email.value;

    if(emailValid===""){
        error.textContent=" It looks like you forgot to add your email";
    } else {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!emailValid.match(mailformat)){
        email.style.borderColor = 'hsl(354, 100%, 66%)';
        error.textContent='The email address is not formatted correctly';
      } else {
        email.style.borderColor = 'hsl(0, 0%, 59%)';
        error.textContent="";
      }
        
    } 

emailValid ="";
}

boton.addEventListener('click',checkInputs)


