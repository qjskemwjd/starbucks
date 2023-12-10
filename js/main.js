const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const expandIcon = document.querySelector('.toggle-promotion .material-symbols-outlined');
let isHidePromotion = false;


const innerRight = document.querySelector('.inner__right h2');
innerRight.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        promotionEl.classList.add('hide');
        expandIcon.textContent = 'expand_less';
    } else {
        promotionEl.classList.remove('hide');
        expandIcon.textContent = 'expand_more';
    }
});

promotionToggleBtn.addEventListener('click', function (event) {

    event.stopPropagation();
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        promotionEl.classList.add('hide');
        expandIcon.textContent = 'expand_less';
    } else {
        promotionEl.classList.remove('hide');
        expandIcon.textContent = 'expand_more';
    }
});

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to(
        selector,
        random(1.5, 2.5),
        {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        });
}


floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

