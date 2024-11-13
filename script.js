let formEl = document.querySelector('.form')
let inputEl = document.querySelector('.form__field')
let iconBntEl = document.querySelector('.icon-btn')
let iconClosedEl = document.querySelector('.closed')
let iconOpenedEl = document.querySelector('.opened')

let isClicked = false

iconBntEl.addEventListener('click', event => {

    if(!isClicked){
        isClicked = true
        inputEl.type = 'text'
        iconOpenedEl.style.display = 'flex'
        iconClosedEl.style.display = 'none'
    } else {
        isClicked = false
        inputEl.type = 'password'
        iconOpenedEl.style.display = 'none'
        iconClosedEl.style.display = 'flex'
    }
})

formEl.addEventListener('submit', event => {
    inputEl.type = 'password'
})