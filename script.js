const mainDiv = document.createElement('div')
mainDiv.classList.add('main-div')

const body = document.querySelector('body')
body.appendChild(mainDiv)

const textRandom = document.createElement('div')
textRandom.classList.add('text-random')
textRandom.textContent = 'Нажми кнопку для випадкового числа'

const buttonRandom = document.createElement('button')
buttonRandom.classList.add('button-random')
buttonRandom.type = 'button'
buttonRandom.textContent = 'Random'

mainDiv.appendChild(textRandom)
mainDiv.insertAdjacentElement('beforeend', buttonRandom)

const divResult = document.createElement('div')
divResult.classList.add('div-result')

const divResultMain = document.createElement('div')
divResultMain.classList.add('div-result-main')
body.appendChild(divResultMain)

const header = document.createElement('header')
header.classList.add('header')
mainDiv.insertAdjacentElement('beforebegin', header)
header.textContent = 'Copyright 28.07.2023 Anton Didenko'

const language = document.createElement('a')
language.classList.add('language')
language.textContent = 'Змінити мову на Russian'
language.href = 'iduhaxyu.html'
mainDiv.insertAdjacentElement('beforebegin', language)
console.log(language)

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
function getRandomInt() {
    return Math.floor(Math.random() * (1 - 1)) + 1;
}

function randomNumber () {
    divResultMain.appendChild(divResult)
    divResult.textContent = getRandomInt()
}

buttonRandom.addEventListener('click', randomNumber)







