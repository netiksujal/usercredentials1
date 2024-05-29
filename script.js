let signUpBtn= document.querySelector('.signupbtn'); 
let signInBtn= document.querySelector('.signinbtn'); 
let nameField= document.querySelector('.namefield'); 
let title= document.querySelector('.title'); 
let underline=document.querySelector('.underline');

signInBtn.addEventListener('click',()=>{
nameField.style.maxHeight= '0';
title.innerHTML='Sign In';
signUpBtn.classList.add('disable');
signInBtn.classList.remove('disable');
underline.style.transform = 'translateX(35px)';
})
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight= '60px';
    title.innerHTML='Sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';
    
    })
    
