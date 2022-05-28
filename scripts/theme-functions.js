const body = document.querySelector('body')

//1 2 3
const themeNum = document.querySelector('p')

//logo
const logo = document.querySelector('h2')

//theme text
const themeName = document.querySelector('h5')

//themes buttons
const themeBtn1 = document.querySelector('#theme1')
const themeBtn2 = document.querySelector('#theme2')
const themeBtn3 = document.querySelector('#theme3')

//section 3
const S3 = document.querySelector('.S3')

//buttons
var keys = document.querySelectorAll('.button')
var deleteBtn = document.querySelector('#delete')
var resetBtn = document.querySelector('#reset')
var equalBtn = document.querySelector('#equals')


//theme1 action
const change2Theme1 = ()=>{
    body.style.backgroundColor = 'hsl(222, 26%, 31%)'

    themeNum.style.color = 'white'

    logo.style.color = 'white'

    themeName.style.color = 'white'

    themeBtn1.style.fill = 'hsl(6, 63%, 50%)'
    themeBtn2.style.fill = 'transparent'
    themeBtn3.style.fill = 'transparent'

    display.style.backgroundColor = 'hsl(224, 36%, 15%)'
    display.style.color = 'white'

    S3.style.backgroundColor = 'hsl(223, 31%, 20%)'

    keys.forEach(key=>{
        key.style.color = 'hsl(221, 14%, 31%)'
        key.style.backgroundColor = 'hsl(30, 25%, 89%)'
        key.style.boxShadow = ' 0 3px hsl(28, 16%, 65%)'
    })

    deleteBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    deleteBtn.style.boxShadow = ' 0 3px hsl(224, 28%, 35%)'
    deleteBtn.style.color = 'white'

    resetBtn.style.backgroundColor = 'hsl(225, 21%, 49%)'
    resetBtn.style.boxShadow = ' 0 3px hsl(224, 28%, 35%)'
    resetBtn.style.color = 'white'

    equalBtn.style.backgroundColor = 'hsl(6, 63%, 50%)'
    equalBtn.style.boxShadow = 'hsl(6, 70%, 34%)'
    equalBtn.style.color = 'white'
}

//theme2 action
const change2Theme2 = ()=>{
    body.style.backgroundColor = 'hsl(0, 0%, 93%)'

    themeNum.style.color = 'hsl(60, 10%, 19%)'

    logo.style.color = 'hsl(60, 10%, 19%)'

    themeName.style.color = 'hsl(60, 10%, 19%)'

    themeBtn1.style.fill = 'transparent'
    themeBtn2.style.fill = 'hsl(25, 98%, 40%)'
    themeBtn3.style.fill = 'transparent'

    display.style.backgroundColor = 'hsl(0, 0%, 90%)'
    display.style.color = 'hsl(60, 10%, 19%)'

    S3.style.backgroundColor = 'hsl(0, 5%, 81%)'

    keys.forEach(key=>{
        key.style.color = 'hsl(60, 10%, 19%)'
        key.style.backgroundColor = 'hsl(45, 7%, 89%)'
        key.style.boxShadow = ' 0 3px hsl(35, 11%, 61%)'
    })

    deleteBtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
    deleteBtn.style.boxShadow = ' 0 3px hsl(185, 58%, 25%)'
    deleteBtn.style.color = 'white'

    resetBtn.style.backgroundColor = 'hsl(185, 42%, 37%)'
    resetBtn.style.boxShadow = ' 0 3px hsl(185, 58%, 25%)'
    resetBtn.style.color = 'white'

    equalBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
    equalBtn.style.boxShadow = 'hsl(25, 99%, 27%)'
    equalBtn.style.color = 'white'
}


