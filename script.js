const scrollContainer = document.querySelector('.gallery')
const backBtn = document.querySelector('#backBtn')
const nextBtn = document.querySelector('#nextBtn')

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY
    scrollContainer.style.scrollBehaviour = "smooth"
})

nextBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 900
    scrollContainer.style``.scrollBehaviour = "smooth"
})

backBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 900
    scrollContainer.style.scrollBehaviour = "smooth"
})