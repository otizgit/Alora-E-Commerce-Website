indicateLogin = document.querySelector('.indicate-login')
indicateReg = document.querySelector('.indicate-reg')
const loginForm = document.querySelector('.login-form')
const regForm = document.querySelector('.reg-form')

indicateReg.addEventListener('click', function(){
    loginForm.classList.add('remove-login')
    regForm.classList.add('display-reg')
    indicateReg.classList.add('indicate-shift')
    indicateLogin.classList.add('indicate-remove')
})

indicateLogin.addEventListener('click', function(){
    loginForm.classList.remove('remove-login')
    regForm.classList.remove('display-reg')
    indicateReg.classList.remove('indicate-shift')
    indicateLogin.classList.remove('indicate-remove')
})