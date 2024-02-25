let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// form validation
const form= document.getElementById("form")

const formname=document.getElementById("name")
const email=document.getElementById("email")
const phone=document.getElementById("number")
const message=document.getElementById("message")

const nameErr=document.getElementById("nameErr")
const emailErr=document.getElementById("emailErr")
const emailValErr=document.getElementById("emailValErr")
const phoneErr=document.getElementById("numberErr")
const messageErr=document.getElementById("messageErr")

var validRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit",(Event)=>{
    if(formname.value===""){
        Event.preventDefault()
        nameErr.classList.remove("display-none")
        formname.focus()
        
    }
    if(email.value===""){
        Event.preventDefault()
        emailErr.classList.remove("display-none")
        email.focus()
        
    }
    if(!validRegex.test(email.value)){
        Event.preventDefault()
        emailValErr.classList.remove("display-none")
        email.focus()
    }
    if(number.value===""){
        Event.preventDefault()
        numberErr.classList.remove("display-none")
        number.focus()
    }
    if(message.value===""){
        Event.preventDefault()
        messageErr.classList.remove("display-none")
        message.focus()
    }
})