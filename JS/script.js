let blocks = document.querySelector('.blocks')
let blocks_1 = document.querySelector('.blocks-1')
let blocks_3 = document.querySelector('.blocks-3')
let blocks_4 = document.querySelector('.blocks-4')
let screen_one = document.querySelector('.screen_one')

blocks.onmouseenter = () => {
    let out = setTimeout(() => {
        screen_one.classList.add('bg_1')
        screen_one.style.backgroundImage = 'url("/images/photos/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg")'
    }, 700)
    blocks.classList.add('effect-1')
}
blocks.onmouseleave = () => {
    screen_one.classList.remove('bg_1')
    blocks.classList.remove('effect-1')
}

blocks_1.onmouseenter = () =>{
    screen_one.style.backgroundImage = 'url("/images/photos/screen_oneBG.png")'
}

blocks_3.onmouseenter = () =>{
    let out = setTimeout(() => {
        screen_one.classList.add('bg_2')
        screen_one.style.backgroundImage = 'url("/images/photos/zac-gudakov-95UK5aVgx54-unsplash.jpg")'
    }, 700)
    blocks_3.classList.add('effect-2')
}
blocks_3.onmouseleave = () =>{
    screen_one.classList.remove('bg_2')
    blocks_3.classList.remove('effect-2')    
}


blocks_4.onmouseenter = () =>{
    let out = setTimeout(() => {
        screen_one.classList.add('bg_3')
        screen_one.style.backgroundImage = 'url("/images/photos/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg")'
    }, 700)
    blocks_4.classList.add('effect-3')
}

blocks_4.onmouseleave = () =>{
    screen_one.classList.remove('bg_3')
    blocks_4.classList.remove('effect-3')    
}

