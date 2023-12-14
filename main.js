const slider = document.querySelector('.slider')
const slide_1 = slider.querySelectorAll('.slide')[0]

let isOpen = false 

let isActive = false, isDragging = false, prevX, prevSL, posDiff;

const slide = () => {
    if(slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0){
        return
    }

    posDiff = Math.abs(posDiff)
    let firstWidth = slide_1.clientWidth
    if(slider.scrollLeft > prevSL){
        slider.scrollLeft += posDiff > firstWidth / 3 ? firstWidth - posDiff + 16: -posDiff
    }else{
        slider.scrollLeft -= posDiff > firstWidth / 3 ? firstWidth - posDiff + 16: -posDiff
    }
}

const start = (e) => {
    isActive = true
    prevX = e.pageX || e.touches[0].pageX
    prevSL = slider.scrollLeft
}

const dragging = (e) => {
    if(!isActive) {
        return
    }
    e.preventDefault()
    isDragging = true
    slider.classList.add("dragging")
    posDiff = (e.pageX || e.touches[0].pageX) - prevX

    slider.scrollLeft = prevSL - posDiff
}

const stop = () => {
    isActive = false
    slider.classList.remove("dragging")

    if(!isDragging) return
    isDragging = false
    slide()
}
slider.addEventListener("mousedown", start)
slider.addEventListener("touchstart", start)

slider.addEventListener("mousemove", dragging)
slider.addEventListener("touchmove", dragging)

slider.addEventListener("mouseup", stop)
slider.addEventListener("touchend", stop)


function handleMenu( ){
    isOpen = isOpen === false ? true : false
    document.querySelector('#nav')
    nav.classList.toggle('nav-open')
    document.querySelector('#nav-img').src = `./images/${isOpen === false ? 
        'icon-hamburger' : 'icon-close'
    }.svg` 
}