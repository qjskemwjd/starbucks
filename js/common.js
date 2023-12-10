const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});




const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

