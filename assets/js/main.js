/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP PLUGIN ===============*/
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    this.scrollY >= 50
        ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORKS ===============*/
const swiperWork = new Swiper('.work__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    grabCursor: true,

    pagination: {
        el: '.work__data .swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.work__data .swiper-button-next',
        prevEl: '.work__data .swiper-button-prev',
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.service__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 56,
    grabCursor: true,

    pagination: {
        el: '.service__swiper .swiper-pagination',
    },

    navigation: {
        nextEl: '.service__swiper .swiper-button-next',
        prevEl: '.service__swiper .swiper-button-prev',
    },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
    // We get the position by scrolling down
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

        if (!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== GSAP ANIMATION ===============*/
const reveal = (selector, options = {}) => {
    gsap.from(selector, {
        scrollTrigger: selector,
        opacity: 0,
        duration: 1,
        y: 100,
        delay: .3,
        ease: 'power2.out',
        ...options
    })
}

/* Home animation */
const tl = gsap.timeline({})
tl.fromTo(
    '.home__bg, .home__shadow',
    {
        y: -800,
        scale: .3,
        opacity: 0
    },
    {
        y: 0,
        scale: .3,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }
)
tl.to(
    '.home__bg, .home__shadow',
    {
        scale: 1,
        duration: 1,
        ease: 'back.out(0.5)'
    }
)

/* Home background animation */
tl.to(
    '.home__bg',
    {
        scale: 1.08,
        duration: 8,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        transformOrigin: 'center center'
    }
)

reveal('.home__logo', { y: 0, scale: .3, delay: 1.9, ease: 'elastic.out(0.8,0.5)' })
reveal('.home__title', { delay: 2.2 })
reveal('.home__description', { delay: 2.5 })
reveal('.home__data .button', { delay: 2.8 })

/* The nav animation only works in the home section */
if (window.scrollY < 100) {
    reveal('.nav > *', { delay: 1.6, y: -30 })
} else {
    gsap.set('.nav > *', { opacity: 1, y: 0 })
}

/* About animation */
reveal('.about__data > *', { stagger: .2 })
reveal('.about__img', { delay: .9 })

const aboutCounter = document.querySelectorAll('.about__counter')
aboutCounter.forEach(el => {
    gsap.from(el, {
        textContent: 0,
        duration: 3,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: { trigger: el, once: true }
    })
})

/* Work animation */
reveal('.work__data .section__title', {})
reveal('.work__description', { delay: .6 })
reveal('.work__data .swiper-pagination', { delay: .9 })
reveal('.work__data :is(.swiper-button-prev, .swiper-button-next)', { delay: 1.2 })
reveal('.work__swiper', { delay: .9 })

/* Service animation */
reveal('.service__data .section__title', {})
reveal('.service__plan', { delay: .6, stagger: .2 })
reveal('.service__swiper', { delay: .9, stagger: .2 })

/* Expert animation */
reveal('.expert .section__title', {})
reveal('.expert__description', { delay: .6 })
reveal('.expert__card', { delay: .9, stagger: .2 })

/* Contact animation */
reveal('.contact__data .section__title', {})



/* Footer animation */
