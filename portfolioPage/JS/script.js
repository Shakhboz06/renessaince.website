import { categories, items } from "./data.js";

let interier = document.querySelector('.interier')
let architecture = document.querySelector('.architecture')
let construction = document.querySelector('.construction')
let fixing = document.querySelector('.fixing')
let screen_templates = document.querySelector('.screen_templates')
let update = document.querySelector('.screen_templates .images')
let refill = document.querySelector('.screen_templates .refill')
let back = document.querySelector('.screen_templates .remove')

let reload = () => {
    let classes = ['active-1', 'active-2', 'active-3', 'active-4', 'active-5', 'active-6', 'active-7', 'active-8', 'active-9']
    for (let item of classes) {
        let div = document.createElement('div')
        div.classList.add(item)
        update.append(div)
    }

    let p = document.createElement('p')
    let span = document.createElement('span')

    span.innerText = 'Разработка интерьера для дома'
    p.innerText = 'Дизайн интерьера'
    update.firstElementChild.append(p, span)
}
reload()

let filter = (arg, num) => {
    update.innerHTML = ''
    for (let item of arg) {
        if (item.categorie_id == num) {
            let div = document.createElement('div')
            div.style.backgroundImage = `url(${item.img})`
            div.classList.add('loaded_img')
            update.append(div)
        }
    }
}


interier.onclick = () => {
    fixing.classList.remove('active')
    architecture.classList.remove('active')
    construction.classList.remove('active')        
    refill.style.display = 'none'
    
    interier.classList.add('active')
    filter(items, categories[0].id)
}

architecture.onclick = () => {
    interier.classList.remove('active')
    fixing.classList.remove('active')
    construction.classList.remove('active')
    refill.style.display = 'none'
    
    architecture.classList.add('active')
    event.preventDefault()
    filter(items, categories[1].id)
}
construction.onclick = () => {
    interier.classList.remove('active')
    architecture.classList.remove('active')
    fixing.classList.remove('active')
    refill.style.display = 'none'
    
    construction.classList.add('active')
    event.preventDefault()
    filter(items, categories[2].id)
}

fixing.onclick = () => {
    interier.classList.remove('active')
    architecture.classList.remove('active')
    construction.classList.remove('active')
    refill.style.display = 'none'

    fixing.classList.add('active')
    event.preventDefault()
    filter(items, categories[3].id)
}

refill.onclick = () => {
    update.innerHTML = ''
    for (let context of items) {
        let div = document.createElement('div')
        div.style.backgroundImage = `url(${context.img})`
        div.classList.add('loaded_img')
        update.append(div)
    }
    refill.style.display = 'none'
    back.style.display = 'inline-block'

}

back.onclick = () => {
    update.innerHTML = ''
    back.style.display = 'none'
    refill.style.display = 'inline-block'
    reload()
}
