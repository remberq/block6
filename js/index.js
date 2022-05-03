const swipers = document.querySelector('.swiper')

const brand = document.querySelector('.hero__brand-list')
const brandList = brand.querySelector('.hero__brand-items')

const btnImg = brand.querySelector('.hero__show-link')
const btnLink = btnImg.querySelector('.hero__link-text')

// Получаем ширину экрана
let width = window.innerWidth  


const changeButton = () => {
    if (btnLink.textContent === 'Скрыть') {
        btnLink.textContent = 'Показать'
        btnImg.classList.remove('change')
        brandList.style.overflow = 'hidden'
        brandList.style.height = '176px'
        
    } else {
        btnLink.textContent = 'Скрыть'
        btnImg.classList.add('change')
        brandList.style.overflow = 'visible'
        brandList.style.height = '100%'
    }
}


if (width <= 470) {
    // Включаем свайпер
    brand.classList.add('hidden')
    swipers.classList.remove('hidden')

} else {
    // В остальных случаях "слушаем" нажатие на кнопку и меняем ее
    btnLink.addEventListener('click', () => {
        changeButton()
    })
}

window.onresize = () => {
    // Если происходит ресайс, динамически меняем ширину и включаем свайпер
    width = window.innerWidth

    if (width < 470) {
        brand.classList.add('hidden')
        swipers.classList.remove('hidden')

    } else {
        brand.classList.remove('hidden')
        swipers.classList.add('hidden')
        }
}







        
    


    



