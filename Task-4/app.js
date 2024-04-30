const form = document.querySelector('form');
emailField = form.querySelector('.email');
emailInput = emailField.querySelector('input');

passField = form.querySelector('.password');
passInput = passField.querySelector('input');


form.onsubmit = (e) => {
    e.preventDefault(); 
    if(emailInput.value == ""){
        emailField.classList.add("shake", "error");
    }else{
        checkEmail();
    }
    if(passInput.value == ""){
        passField.classList.add("shake","error");
    }
     

    setTimeout(()=>{
        emailField.classList.remove("shake");
        passField.classList.remove("shake");
    }, 500);

    emailInput.onkeyup = () => {
        checkEmail();
    }

    function checkEmail(){
        let pattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailInput.value.match(pattern)){
            emailField.classList.add("error");
            let errortxt = emailField.querySelector(".error-txt")
            (emailInput.value != '') ? errortxt.innerText = "Enter valid email" : errortxt.innerText = "Please enter your Email" 
        }else{
            emailField.classList.remove("error");
        }
    }

    passInput.onkeyup = () => {
        if(passInput.value == ""){
            passField.classList.add("error");
        }else{
            passField.classList.remove("error");
        }
    }

    if(!emailField.classList.contains("error") && !passField.classList.contains("error")){
        window.location.href = "file.txt";
    }

}