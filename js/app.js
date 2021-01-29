document.addEventListener('DOMContentLoaded', () => {
    const imagenHero = document.querySelector('#imagen-logo-hero');
    const textoHero = document.querySelector('#texto-hero');
    const textoMedidas = document.querySelectorAll('.texto-medidas');
    const imagenBanner = document.querySelectorAll('.imagen-banner');
    const textoBanner = document.querySelectorAll('.texto-banner');
    const barra = document.querySelector('.barra');
    const visitanos = document.querySelector('#visitanos');
    var sticky = barra.offsetTop;
    const navegacion = document.querySelector('.navegacion');

    //Barra
    window.addEventListener('scroll', () => {
        barra.classList.toggle('sticky', window.scrollY > 0);
        navegacion.classList.toggle('texto-nav', window.scrollY > 0);
    })

    //Div animados - GSAP

    gsap.from(imagenHero, {
        duration: 2,
        x: -300,
        opacity: 0
    });
    gsap.from(textoHero, {
        duration: 2,
        x: 100,
        opacity: 0,
        delay: 2
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: textoMedidas,
            start: 'center bottom'
        }
    });

    tl.from(textoMedidas, { x: 200, opacity: 0, duration: 1.5, stagger: 0.5 })

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: imagenBanner,
            start: 'center bottom'
        }
    });

    tl2.from(imagenBanner, { x: 200, opacity: 0, duration: 1.5 })

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: textoBanner,
            start: 'center bottom'
        }
    });

    tl3.from(textoBanner, { x: -200, opacity: 0, duration: 1.5 })

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: visitanos,
            start: 'center bottom'
        }
    });

    tl4.from(visitanos, { x: -200, opacity: 0, duration: 1.5, ease: "bounce.out" })

    //MAPA

    var map = L.map('mapa').setView([21.9388836, -102.280161], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([21.9388836, -102.280161]).addTo(map)
        .bindTooltip('GYM & FITNESS JAZAR')
        .openTooltip();


});