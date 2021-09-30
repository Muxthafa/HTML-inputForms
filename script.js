const text = document.querySelector("#text")
const textError = document.querySelector(".text-error")
text.addEventListener("input",function(){
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
    if(nameRegex.test(text.value))
        textError.textContent="";
    else
        textError.textContent="Name is incorrect"
})

const email = document.querySelector("#email")
const emailError = document.querySelector(".email-error")
email.addEventListener("input",function(){
    let emailRegex = RegExp("^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+([\.-]?\w+)*$")
    if(emailRegex.test(email.value))
        emailError.textContent="";
    else
        emailError.textContent="email is incorrect"
})

const number = document.querySelector("#number")
const noError = document.querySelector(".no-error")
number.addEventListener("input",function(){
    let noRegex = RegExp("^([0-9]{0,3}?)[  ]?([234789]{1})([0-9]{9})$")
    if(noRegex.test(number.value))
        noError.textContent="";
    else
        noError.textContent="number is incorrect"
})

const salary = document.querySelector("#salary")
const output = document.querySelector(".salary-output")
output.textContent = salary.value
salary.addEventListener("input",function(){
    output.textContent=salary.value
})