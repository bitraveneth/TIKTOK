const initCampaignSlider = (root) => {
    const slides = Array.from(root.querySelectorAll('[data-campaign-slide]'));
    const dots = Array.from(root.querySelectorAll('[data-campaign-dot]'));
    const prevButton = root.querySelector('[data-campaign-prev]');
    const nextButton = root.querySelector('[data-campaign-next]');

    if (slides.length < 2) {
        return;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const autoplayDelay = Number(root.dataset.autoplay || 5600);
    let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
    let autoplayTimer = null;

    if (activeIndex < 0) {
        activeIndex = 0;
    }

    const syncSlides = (nextIndex) => {
        activeIndex = (nextIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            const isActive = index === activeIndex;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
            slide.hidden = !isActive;
        });

        dots.forEach((dot, index) => {
            const isActive = index === activeIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-current', String(isActive));
        });
    };

    const stopAutoplay = () => {
        if (autoplayTimer) {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    };

    const startAutoplay = () => {
        stopAutoplay();

        if (reducedMotionQuery.matches) {
            return;
        }

        autoplayTimer = window.setInterval(() => {
            syncSlides(activeIndex + 1);
        }, autoplayDelay);
    };

    prevButton?.addEventListener('click', () => {
        syncSlides(activeIndex - 1);
        startAutoplay();
    });

    nextButton?.addEventListener('click', () => {
        syncSlides(activeIndex + 1);
        startAutoplay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            syncSlides(index);
            startAutoplay();
        });
    });

    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', () => {
        window.requestAnimationFrame(() => {
            if (!root.contains(document.activeElement)) {
                startAutoplay();
            }
        });
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoplay();
            return;
        }

        startAutoplay();
    });

    reducedMotionQuery.addEventListener('change', () => {
        startAutoplay();
    });

    syncSlides(activeIndex);
    startAutoplay();
};

const initSeriesCarousel = (root) => {
    const track = root.querySelector('[data-series-track]');
    const cards = Array.from(root.querySelectorAll('[data-series-card]'));
    const dots = Array.from(root.querySelectorAll('[data-series-dot]'));
    const prevButton = root.querySelector('[data-series-prev]');
    const nextButton = root.querySelector('[data-series-next]');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const autoplayDelay = Number(root.dataset.seriesAutoplay || 0);
    const useRandomOrder = root.dataset.seriesRandom !== 'false';

    if (!track || cards.length === 0) {
        return;
    }

    let activeIndex = Math.min(2, cards.length - 1);
    let autoplayTimer = null;

    const getNearestIndex = () => {
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;

        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = Math.abs(cardCenter - trackCenter);

            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        });

        return nearestIndex;
    };

    const syncState = (activeIndex) => {
        activeIndex = Math.max(0, Math.min(activeIndex, cards.length - 1));

        cards.forEach((card, index) => {
            card.classList.toggle('is-active', index === activeIndex);
        });

        dots.forEach((dot, index) => {
            const isActive = index === activeIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-current', String(isActive));
        });
    };

    const scrollToCard = (index) => {
        const nextIndex = Math.max(0, Math.min(index, cards.length - 1));
        const card = cards[nextIndex];

        if (!card) {
            return;
        }

        activeIndex = nextIndex;

        const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;

        track.scrollTo({
            left,
            behavior: 'smooth',
        });

        syncState(nextIndex);
    };

    const getRandomIndex = () => {
        if (cards.length < 2) {
            return activeIndex;
        }

        let nextIndex = activeIndex;

        while (nextIndex === activeIndex) {
            nextIndex = Math.floor(Math.random() * cards.length);
        }

        return nextIndex;
    };

    let scrollFrame = null;

    const handleScroll = () => {
        if (scrollFrame) {
            window.cancelAnimationFrame(scrollFrame);
        }

        scrollFrame = window.requestAnimationFrame(() => {
            activeIndex = getNearestIndex();
            syncState(activeIndex);
        });
    };

    const stopAutoplay = () => {
        if (autoplayTimer) {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    };

    const startAutoplay = () => {
        stopAutoplay();

        if (!autoplayDelay || reducedMotionQuery.matches || cards.length < 2) {
            return;
        }

        autoplayTimer = window.setInterval(() => {
            const nextIndex = useRandomOrder ? getRandomIndex() : activeIndex + 1 >= cards.length ? 0 : activeIndex + 1;
            scrollToCard(nextIndex);
        }, autoplayDelay);
    };

    prevButton?.addEventListener('click', () => {
        scrollToCard(getNearestIndex() - 1);
        startAutoplay();
    });

    nextButton?.addEventListener('click', () => {
        scrollToCard(getNearestIndex() + 1);
        startAutoplay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToCard(index);
            startAutoplay();
        });
    });

    track.addEventListener('scroll', handleScroll, { passive: true });
    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', () => {
        window.requestAnimationFrame(() => {
            if (!root.contains(document.activeElement)) {
                startAutoplay();
            }
        });
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoplay();
            return;
        }

        startAutoplay();
    });

    reducedMotionQuery.addEventListener('change', () => {
        startAutoplay();
    });

    window.addEventListener('resize', () => {
        activeIndex = getNearestIndex();
        syncState(activeIndex);
    });

    syncState(activeIndex);
    scrollToCard(activeIndex);
    startAutoplay();
};

const initVideoModal = () => {
    const modal = document.querySelector('[data-video-modal]');
    const iframe = modal?.querySelector('[data-video-iframe]');
    const title = modal?.querySelector('[data-video-title]');
    const triggers = Array.from(document.querySelectorAll('[data-video-trigger]'));
    const closeControls = Array.from(document.querySelectorAll('[data-video-close]'));
    const transitionDuration = 260;
    let closeTimer = null;

    if (!modal || !iframe || !title || triggers.length === 0) {
        return;
    }

    modal.dataset.state = 'closed';

    const closeModal = () => {
        if (closeTimer) {
            window.clearTimeout(closeTimer);
        }

        modal.dataset.state = 'closing';
        document.body.classList.remove('video-modal-open');

        closeTimer = window.setTimeout(() => {
            modal.hidden = true;
            modal.dataset.state = 'closed';
            iframe.src = '';
            title.textContent = 'Video';
            closeTimer = null;
        }, transitionDuration);
    };

    const openModal = (videoTitle, videoEmbed) => {
        if (!videoEmbed) {
            return;
        }

        if (closeTimer) {
            window.clearTimeout(closeTimer);
            closeTimer = null;
        }

        title.textContent = videoTitle || 'Video';
        iframe.src = videoEmbed;
        modal.hidden = false;
        document.body.classList.add('video-modal-open');

        window.requestAnimationFrame(() => {
            modal.dataset.state = 'open';
        });
    };

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            openModal(trigger.dataset.videoTitle, trigger.dataset.videoEmbed);
        });
    });

    closeControls.forEach((control) => {
        control.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });
};

const initLovedCarousel = (root) => {
    const track = root.querySelector('[data-loved-track]');
    const cards = Array.from(root.querySelectorAll('[data-loved-card]'));
    const dots = Array.from(root.querySelectorAll('[data-loved-dot]'));
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const autoplayDelay = Number(root.dataset.lovedAutoplay || 3600);

    if (!track || cards.length === 0) {
        return;
    }

    let activeIndex = Math.min(1, cards.length - 1);
    let autoplayTimer = null;
    let scrollFrame = null;

    const getNearestIndex = () => {
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;

        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = Math.abs(cardCenter - trackCenter);

            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        });

        return nearestIndex;
    };

    const syncState = (nextIndex) => {
        activeIndex = Math.max(0, Math.min(nextIndex, cards.length - 1));

        cards.forEach((card, index) => {
            card.classList.toggle('is-active', index === activeIndex);
        });

        dots.forEach((dot, index) => {
            const isActive = index === activeIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-current', String(isActive));
        });
    };

    const scrollToCard = (nextIndex) => {
        const targetIndex = Math.max(0, Math.min(nextIndex, cards.length - 1));
        const card = cards[targetIndex];

        if (!card) {
            return;
        }

        syncState(targetIndex);

        const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;

        track.scrollTo({
            left,
            behavior: 'smooth',
        });
    };

    const stopAutoplay = () => {
        if (autoplayTimer) {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    };

    const startAutoplay = () => {
        stopAutoplay();

        if (!autoplayDelay || reducedMotionQuery.matches || cards.length < 2) {
            return;
        }

        autoplayTimer = window.setInterval(() => {
            const nextIndex = activeIndex + 1 >= cards.length ? 0 : activeIndex + 1;
            scrollToCard(nextIndex);
        }, autoplayDelay);
    };

    const handleScroll = () => {
        if (scrollFrame) {
            window.cancelAnimationFrame(scrollFrame);
        }

        scrollFrame = window.requestAnimationFrame(() => {
            syncState(getNearestIndex());
        });
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToCard(index);
            startAutoplay();
        });
    });

    track.addEventListener('scroll', handleScroll, { passive: true });
    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', () => {
        window.requestAnimationFrame(() => {
            if (!root.contains(document.activeElement)) {
                startAutoplay();
            }
        });
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoplay();
            return;
        }

        startAutoplay();
    });

    reducedMotionQuery.addEventListener('change', () => {
        startAutoplay();
    });

    window.addEventListener('resize', () => {
        syncState(getNearestIndex());
    });

    syncState(activeIndex);
    scrollToCard(activeIndex);
    startAutoplay();
};

const initMobileNavigation = () => {
    const toggle = document.querySelector('[data-mobile-nav-toggle]');
    const panel = document.querySelector('[data-mobile-nav-panel]');
    const panelLinks = Array.from(panel?.querySelectorAll('a') || []);

    if (!toggle || !panel) {
        return;
    }

    const closeMenu = () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open site navigation');
        panel.hidden = true;
        document.body.classList.remove('mobile-nav-open');
    };

    const openMenu = () => {
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close site navigation');
        panel.hidden = false;
        document.body.classList.add('mobile-nav-open');
    };

    toggle.addEventListener('click', () => {
        if (toggle.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            return;
        }

        openMenu();
    });

    panelLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeMenu();
        }
    });
};

const initScrollReveal = () => {
    const elements = Array.from(document.querySelectorAll('[data-scroll-reveal]'));

    if (elements.length === 0) {
        return;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotionQuery.matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => {
            element.classList.add('is-visible');
        });

        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
};

const initTrendingAutoLayout = () => {
    const cards = Array.from(document.querySelectorAll('[data-trending-card]'));
    const title = document.querySelector('.video-trending-title');

    if (cards.length < 2) {
        return;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const layoutClasses = [
        'video-tile-portrait-left',
        'video-tile-top-center',
        'video-tile-top-right',
        'video-tile-bottom-left',
        'video-tile-center-right',
        'video-tile-right',
        'video-tile-bottom-center',
        'video-tile-bottom-small',
    ];

    if (reducedMotionQuery.matches) {
        return;
    }

    let currentLayouts = cards.map((card) => {
        return layoutClasses.find((className) => card.classList.contains(className));
    });

    if (currentLayouts.some((layout) => !layout)) {
        return;
    }

    let timer = null;
    const cycleRotations = ['-7deg', '-4deg', '-2deg', '2deg', '4deg', '7deg'];

    const animateTitle = () => {
        if (!title) {
            return;
        }

        title.classList.remove('is-cycling');
        void title.offsetWidth;
        title.classList.add('is-cycling');
    };

    const applyLayouts = (nextLayouts) => {
        cards.forEach((card, index) => {
            card.classList.remove('is-floating');
            layoutClasses.forEach((className) => {
                card.classList.remove(className);
            });

            card.classList.add(nextLayouts[index]);
            card.style.setProperty('--tile-cycle-rotate', cycleRotations[Math.floor(Math.random() * cycleRotations.length)]);
        });

        animateTitle();
        currentLayouts = nextLayouts;
    };

    const getRandomDerangement = () => {
        const nextLayouts = [...currentLayouts];

        do {
            for (let index = nextLayouts.length - 1; index > 0; index -= 1) {
                const swapIndex = Math.floor(Math.random() * (index + 1));
                const currentValue = nextLayouts[index];
                nextLayouts[index] = nextLayouts[swapIndex];
                nextLayouts[swapIndex] = currentValue;
            }
        } while (nextLayouts.some((layout, index) => layout === currentLayouts[index]));

        return nextLayouts;
    };

    const rotateLayouts = () => {
        applyLayouts(getRandomDerangement());
    };

    const stopRotation = () => {
        if (timer) {
            window.clearInterval(timer);
            timer = null;
        }
    };

    const startRotation = () => {
        stopRotation();
        timer = window.setInterval(rotateLayouts, 5000);
    };

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopRotation();
            return;
        }

        startRotation();
    });

    reducedMotionQuery.addEventListener('change', () => {
        if (reducedMotionQuery.matches) {
            stopRotation();
        }
    });

    startRotation();
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-campaign-slider]').forEach(initCampaignSlider);
    document.querySelectorAll('[data-series-carousel]').forEach(initSeriesCarousel);
    initVideoModal();
    document.querySelectorAll('[data-loved-carousel]').forEach(initLovedCarousel);
    initMobileNavigation();
    initScrollReveal();
    initTrendingAutoLayout();
});
