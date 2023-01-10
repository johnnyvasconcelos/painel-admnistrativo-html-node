// show sidebar mobile
const menuMobile = document.querySelector('.menuMobile')
const aside = document.querySelector('.aside')
const bodyContent = document.querySelector('.content-area')
menuMobile.addEventListener('click', function(e) {
    aside.classList.toggle('asideShow')
    bodyContent.classList.toggle('asideShow')
})