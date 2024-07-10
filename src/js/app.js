import goblin from '../pic/goblin.png'
const containerElements = document.querySelectorAll('.place__container')
let num 
const condition = true
let count = 0


function handleClick(e){
    const place = e.target
    console.log(place);
    // const goblinElement = .querySelector('img')
    // console.log(goblinElement);
    // if(goblinElement){
    //     goblinElement.remove()
    //     console.log('Kill the goblin');
    // }else {
    //     console.log('you Missing');
    //     count++
    //     if(count >= 5){
    //         alert('Game over')
    //     }
    // }
  
}

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


containerElements.forEach(item => item.addEventListener('click',  handleClick))
