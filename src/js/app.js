import goblin from '../pic/goblin.png'
const containerElements = document.querySelectorAll('.place__container')
let num 
const condition = true

setInterval(() => {
    while(condition){
        const random = Math.floor(Math.random() * (4 - 1 + 1)) + 1
        if(random !== num) {
            num = random
            break
        }
    }
    const img = document.createElement('img')
    img.src = goblin
    containerElements[num - 1].append(img)
}, 1000)

setInterval(() => {
    containerElements.forEach(item => item.innerHTML = '')
}, 2000)
