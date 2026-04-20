const slider = document.querySelector('[data-slider]');

if (slider) {
    const slides = Array.from(slider.querySelectorAll('[data-slide]'));
    const dots = Array.from(slider.querySelectorAll('[data-slide-dot]'));
    const prevButton = slider.querySelector('[data-slide-prev]');
    const nextButton = slider.querySelector('[data-slide-next]');
    let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
    let timerId;

    if (activeIndex < 0) {
        activeIndex = 0;
    }

    const setActiveSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeIndex;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === activeIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    };

    const restartTimer = () => {
        window.clearInterval(timerId);
        timerId = window.setInterval(() => {
            setActiveSlide(activeIndex + 1);
        }, 5000);
    };

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            setActiveSlide(Number(dot.dataset.slideDot));
            restartTimer();
        });
    });

    prevButton?.addEventListener('click', () => {
        setActiveSlide(activeIndex - 1);
        restartTimer();
    });

    nextButton?.addEventListener('click', () => {
        setActiveSlide(activeIndex + 1);
        restartTimer();
    });

    setActiveSlide(activeIndex);
    restartTimer();
}
