const brand = document.querySelector('.hero__brand-list')
const brandList = brand.querySelector('.hero__brand-items')
const brandItem = brandList.querySelectorAll('.hero__brand-item')
const swipers = document.querySelector('.swiper')
const btnLink = document.querySelector('.hero__link-text')
const btnImg = document.querySelector('.hero__show-link')
const test = document.querySelectorAll('.hero__brand-item:nth-child(n+7)')
const test2 = document.querySelectorAll('.hero__brand-item:nth-child(n+9)')


window.onresize = () => {
    const width = window.innerWidth
    if (width < 420) {
        brand.classList.add('hidden')
        swipers.classList.remove('hidden')
    } else {
        brand.classList.remove('hidden')
        swipers.classList.add('hidden')
    }
}



btnLink.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 768px) and (min-width: 321px)").matches) {
        if (btnLink.textContent === 'Скрыть') {
            for (let item of test) {
                item.classList.add('hidden')
            }
            btnLink.textContent = 'Показать'
            btnImg.classList.add('change')
            
        } else {
            for (let item of test) {
                item.classList.remove('hidden')
            }
            btnLink.textContent = 'Скрыть'
            btnImg.classList.remove('change')
            
        }
    
    } else {
        if (btnLink.textContent === 'Скрыть') {
            for (let item of test2) {
                item.style.display = "none"
            }
            btnLink.textContent = 'Показать'
            btnImg.classList.add('change')
            
        } else {
            for (let item of test2) {
                item.style.display = "flex"
            }
            btnLink.textContent = 'Скрыть'
            btnImg.classList.remove('change')

        }
    }
})


        
    


    



