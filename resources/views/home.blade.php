@extends('layouts.app')

@section('title', 'Vape | Commercial Vape Storefront')
@section('meta_description', 'A commercial vape homepage with a warning strip, dark navigation, large product banner, launch cards, video stories, and lifestyle sections.')

@section('content')
    @php
        $heroSlides = [
            [
                'scene' => 'campaign-scene-desert',
                'device' => 'campaign-device-red',
                'kicker' => 'New Arrival',
                'title' => 'Vape Nano 3',
                'subtitle' => 'Up to 5X Airflow Capacity',
                'description' => 'Compact device platform with a larger airflow window, stronger output control, and a cleaner launch-stage presentation for the homepage.',
                'cta' => 'Learn More',
                'screen_value' => '30W',
                'screen_label' => 'Airflow Pro',
                'stats' => [
                    ['value' => '0.6Ω', 'label' => 'Mesh Core'],
                    ['value' => '1000', 'label' => 'mAh Cell'],
                    ['value' => '3', 'label' => 'Power Modes'],
                ],
            ],
            [
                'scene' => 'campaign-scene-aurora',
                'device' => 'campaign-device-cyan',
                'kicker' => 'Flavor Platform',
                'title' => 'Vape Crystal S',
                'subtitle' => 'Display Ring With Bright Ice Finish',
                'description' => 'A brighter hero lane for flavor campaigns with cooler gradients, high-visibility device framing, and cleaner callouts for retail launches.',
                'cta' => 'Explore Products',
                'screen_value' => '18ML',
                'screen_label' => 'Flavor Tank',
                'stats' => [
                    ['value' => '12', 'label' => 'Flavors'],
                    ['value' => 'LED', 'label' => 'Display Ring'],
                    ['value' => 'USB-C', 'label' => 'Recharge'],
                ],
            ],
            [
                'scene' => 'campaign-scene-graphite',
                'device' => 'campaign-device-graphite',
                'kicker' => 'Retail Series',
                'title' => 'Vape Black Edition',
                'subtitle' => 'Sharper Finish For Shelf-Focused Drops',
                'description' => 'Built for premium launch windows, distributor decks, and a darker showroom aesthetic that still gives the product enough visual weight.',
                'cta' => 'View Catalog',
                'screen_value' => '45K',
                'screen_label' => 'Puff Count',
                'stats' => [
                    ['value' => 'IP68', 'label' => 'Shield Body'],
                    ['value' => 'Dual', 'label' => 'Mesh Coil'],
                    ['value' => 'Fast', 'label' => 'Charge'],
                ],
            ],
        ];

        $newArrivalCards = [
            [
                'title' => 'Force',
                'scene' => 'arrival-scene-canyon',
                'device' => 'arrival-device-orange',
                'display' => '80',
            ],
            [
                'title' => 'Legend 5',
                'scene' => 'arrival-scene-alpine',
                'device' => 'arrival-device-graphite',
                'display' => '200',
            ],
        ];

        $seriesCards = [
            [
                'series' => 'Aegis Series',
                'model' => 'Hero 5',
                'theme' => 'series-card-aegis',
                'device' => 'series-device-aegis',
            ],
            [
                'series' => 'Wenax Series',
                'model' => 'Wenax Q2',
                'theme' => 'series-card-wenax',
                'device' => 'series-device-wenax',
            ],
            [
                'series' => 'Aegis Series',
                'model' => 'Legend 5',
                'theme' => 'series-card-legend',
                'device' => 'series-device-legend',
                'featured' => true,
            ],
            [
                'series' => 'Digi Series',
                'model' => 'Digi Q Vista',
                'theme' => 'series-card-digi',
                'device' => 'series-device-digi',
            ],
            [
                'series' => 'Sonder Series',
                'model' => 'Sonder Q2',
                'theme' => 'series-card-sonder',
                'device' => 'series-device-sonder',
            ],
            [
                'series' => 'Aegis Series',
                'model' => 'Boost 3',
                'theme' => 'series-card-aegis',
                'device' => 'series-device-aegis',
            ],
            [
                'series' => 'Wenax Series',
                'model' => 'Wenax M2',
                'theme' => 'series-card-wenax',
                'device' => 'series-device-wenax',
            ],
            [
                'series' => 'Digi Series',
                'model' => 'Digi Max',
                'theme' => 'series-card-digi',
                'device' => 'series-device-digi',
            ],
            [
                'series' => 'Sonder Series',
                'model' => 'Sonder Pro',
                'theme' => 'series-card-sonder',
                'device' => 'series-device-sonder',
            ],
            [
                'series' => 'Aegis Series',
                'model' => 'Legend Mini',
                'theme' => 'series-card-legend',
                'device' => 'series-device-legend',
            ],
        ];

        $videoStories = [
            [
                'title' => 'Master Mode',
                'theme' => 'video-tile-editorial',
                'layout' => 'video-tile-portrait-left',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=3',
            ],
            [
                'title' => 'Skin Close-Up',
                'theme' => 'video-tile-skin',
                'layout' => 'video-tile-top-center',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=12',
            ],
            [
                'title' => 'Alpine Dawn',
                'theme' => 'video-tile-alpine',
                'layout' => 'video-tile-top-right',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=24',
            ],
            [
                'title' => 'Coast Walk',
                'theme' => 'video-tile-coast',
                'layout' => 'video-tile-bottom-left',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=36',
            ],
            [
                'title' => 'Expo Reel',
                'theme' => 'video-tile-expo',
                'layout' => 'video-tile-center-right',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=48',
            ],
            [
                'title' => 'Trail Orange',
                'theme' => 'video-tile-outdoor',
                'layout' => 'video-tile-right',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=60',
            ],
            [
                'title' => 'Golden Lounge',
                'theme' => 'video-tile-lounge',
                'layout' => 'video-tile-bottom-center',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=72',
            ],
            [
                'title' => 'Workshop Cut',
                'theme' => 'video-tile-workshop',
                'layout' => 'video-tile-bottom-small',
                'embed' => 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0&start=84',
            ],
        ];

        $lovedMoments = [
            [
                'title' => 'Lounge Edit',
                'theme' => 'loved-tile-lounge',
                'layout' => 'loved-tile-left',
            ],
            [
                'title' => 'Expo Crowd',
                'theme' => 'loved-tile-crowd',
                'layout' => 'loved-tile-center-right',
            ],
            [
                'title' => 'Retail Card',
                'theme' => 'loved-tile-card',
                'layout' => 'loved-tile-mid-right',
            ],
            [
                'title' => 'Hand Check',
                'theme' => 'loved-tile-hand',
                'layout' => 'loved-tile-right-center',
            ],
            [
                'title' => 'Brand Bag',
                'theme' => 'loved-tile-bag',
                'layout' => 'loved-tile-far-right',
            ],
            [
                'title' => 'Coast Review',
                'theme' => 'loved-tile-coast',
                'layout' => 'loved-tile-bottom-left',
            ],
            [
                'title' => 'Velvet Session',
                'theme' => 'loved-tile-velvet',
                'layout' => 'loved-tile-bottom-center',
            ],
        ];
    @endphp

    <section class="campaign-hero" data-campaign-slider data-autoplay="5600">
        <div class="campaign-slider-track">
            @foreach ($heroSlides as $index => $slide)
                <article
                    class="campaign-slide {{ $index === 0 ? 'is-active' : '' }}"
                    data-campaign-slide
                    aria-hidden="{{ $index === 0 ? 'false' : 'true' }}"
                    @if ($index !== 0) hidden @endif
                >
                    <div class="campaign-hero-scene {{ $slide['scene'] }}">
                        <div class="campaign-hero-badge">
                            <span>VPU</span>
                            <small>Inside</small>
                        </div>

                        <div class="campaign-hero-inner">
                            <div class="campaign-hero-product">
                                <div class="campaign-moon" aria-hidden="true"></div>

                                <div class="campaign-device {{ $slide['device'] }}">
                                    <span class="campaign-device-mouthpiece"></span>
                                    <span class="campaign-device-body">
                                        <span class="campaign-device-shell"></span>
                                        <span class="campaign-device-logo">VAPE</span>
                                        <span class="campaign-device-screen">
                                            <strong>{{ $slide['screen_value'] }}</strong>
                                            <small>{{ $slide['screen_label'] }}</small>
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div class="campaign-hero-copy">
                                <p class="campaign-kicker">{{ $slide['kicker'] }}</p>
                                <h1 class="campaign-title">{{ $slide['title'] }}</h1>
                                <p class="campaign-subtitle">{{ $slide['subtitle'] }}</p>
                                <p class="campaign-description">{{ $slide['description'] }}</p>

                                <div class="campaign-spec-grid">
                                    @foreach ($slide['stats'] as $stat)
                                        <article class="campaign-spec-card">
                                            <strong>{{ $stat['value'] }}</strong>
                                            <span>{{ $stat['label'] }}</span>
                                        </article>
                                    @endforeach
                                </div>

                                <a href="{{ route('products') }}" class="campaign-link">{{ $slide['cta'] }} &gt;</a>
                            </div>
                        </div>
                    </div>
                </article>
            @endforeach
        </div>

        <div class="campaign-slider-ui">
            <div class="campaign-slider-dots" role="tablist" aria-label="Homepage featured products">
                @foreach ($heroSlides as $index => $slide)
                    <button
                        type="button"
                        class="campaign-slider-dot {{ $index === 0 ? 'is-active' : '' }}"
                        data-campaign-dot
                        data-slide-index="{{ $index }}"
                        aria-label="Show slide {{ $index + 1 }}"
                        aria-current="{{ $index === 0 ? 'true' : 'false' }}"
                    ></button>
                @endforeach
            </div>

            <div class="campaign-slider-arrows">
                <button type="button" class="campaign-slider-arrow" data-campaign-prev aria-label="Previous slide">
                    <span aria-hidden="true">&lt;</span>
                </button>
                <button type="button" class="campaign-slider-arrow" data-campaign-next aria-label="Next slide">
                    <span aria-hidden="true">&gt;</span>
                </button>
            </div>
        </div>
    </section>

    <section class="arrival-showcase">
        <div class="shell py-14 sm:py-18">
            <div class="arrival-showcase-heading">
                <p class="arrival-showcase-kicker">New Arrival</p>
            </div>

            <div class="arrival-showcase-grid">
                @foreach ($newArrivalCards as $card)
                    <article class="arrival-card">
                        <div class="arrival-stage {{ $card['scene'] }}">
                            <div class="arrival-atmosphere" aria-hidden="true"></div>

                            <div class="arrival-device {{ $card['device'] }}">
                                <span class="arrival-device-mouthpiece"></span>
                                <span class="arrival-device-body">
                                    <span class="arrival-device-highlight"></span>
                                    <span class="arrival-device-screen">
                                        <strong>{{ $card['display'] }}</strong>
                                        <small>Smart</small>
                                    </span>
                                    <span class="arrival-device-logo">VAPE</span>
                                </span>
                            </div>
                        </div>

                        <h2 class="arrival-card-title">{{ $card['title'] }}</h2>
                    </article>
                @endforeach
            </div>
        </div>
    </section>

    <section class="series-carousel-section">
        <div class="series-carousel-wrap py-14 sm:py-18">
            <div class="series-carousel" data-series-carousel data-series-autoplay="4200" data-series-random="true">
                <div class="series-carousel-track" data-series-track>
                    @foreach ($seriesCards as $index => $card)
                        <article
                            class="series-card {{ $card['theme'] }} {{ !empty($card['featured']) ? 'series-card-featured' : '' }}"
                            data-series-card
                            data-series-index="{{ $index }}"
                        >
                            <div class="series-card-copy">
                                <p>{{ $card['series'] }}</p>
                                <h2>{{ $card['model'] }}</h2>
                            </div>

                            <div class="series-card-bolt" aria-hidden="true"></div>

                            <div class="series-device {{ $card['device'] }}">
                                <span class="series-device-top"></span>
                                <span class="series-device-body">
                                    <span class="series-device-glow"></span>
                                    <span class="series-device-screen"></span>
                                    <span class="series-device-mark">VAPE</span>
                                </span>
                            </div>
                        </article>
                    @endforeach
                </div>

                <button type="button" class="series-carousel-arrow series-carousel-arrow-prev" data-series-prev aria-label="Previous series">
                    <span aria-hidden="true">&lt;</span>
                </button>

                <button type="button" class="series-carousel-arrow series-carousel-arrow-next" data-series-next aria-label="Next series">
                    <span aria-hidden="true">&gt;</span>
                </button>

                <div class="series-carousel-dots" role="tablist" aria-label="Series carousel pages">
                    @foreach ($seriesCards as $index => $card)
                        <button
                            type="button"
                            class="series-carousel-dot {{ $index === 2 ? 'is-active' : '' }}"
                            data-series-dot
                            data-series-index="{{ $index }}"
                            aria-label="Show {{ $card['model'] }}"
                            aria-current="{{ $index === 2 ? 'true' : 'false' }}"
                        ></button>
                    @endforeach
                </div>
            </div>
        </div>
    </section>

    <section class="video-trending-section" id="about" data-trending-section>
        <div class="video-trending-wrap py-16 sm:py-20">
            <div class="video-trending-stage">
                <div class="video-trending-title" data-scroll-reveal>New Trending</div>

                @foreach ($videoStories as $index => $story)
                    <article
                        class="video-trending-tile {{ $story['theme'] }} {{ $story['layout'] }}"
                        data-scroll-reveal
                        data-reveal-delay="{{ $index }}"
                        data-trending-card
                        data-float-index="{{ $index }}"
                    >
                        <button
                            type="button"
                            class="video-trending-link"
                            data-video-trigger
                            data-video-title="{{ $story['title'] }}"
                            data-video-embed="{{ $story['embed'] }}"
                            aria-label="Play {{ $story['title'] }}"
                        >
                            <span class="video-trending-overlay"></span>
                            <span class="video-trending-play" aria-hidden="true"></span>
                            <span class="video-trending-caption">{{ $story['title'] }}</span>
                        </button>
                    </article>
                @endforeach
            </div>
        </div>
    </section>

    <div class="video-modal" data-video-modal hidden>
        <div class="video-modal-backdrop" data-video-close></div>
        <div class="video-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
            <button type="button" class="video-modal-close" data-video-close aria-label="Close video">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="video-modal-frame">
                <iframe
                    data-video-iframe
                    title="Video player"
                    src=""
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
            <h2 class="video-modal-title" id="video-modal-title" data-video-title>Video</h2>
        </div>
    </div>

    <section class="loved-section">
        <div class="loved-header">
            <h2 class="loved-title">Loved By You</h2>
        </div>

        <div class="loved-carousel-wrap">
            <div class="loved-carousel" data-loved-carousel data-loved-autoplay="3600">
                <div class="loved-track" data-loved-track>
                    @foreach ($lovedMoments as $index => $moment)
                        <article class="loved-card {{ $moment['theme'] }}" data-loved-card>
                            <span class="loved-card-caption">{{ $moment['title'] }}</span>
                        </article>
                    @endforeach

                    <article class="loved-card loved-card-quote" data-loved-card>
                        <div class="loved-card-quote-copy">
                            <p>"Powerful hits every time, solid and consistent performance."</p>
                        </div>
                    </article>
                </div>

                <div class="loved-dots" role="tablist" aria-label="Loved by you carousel">
                    @foreach (array_merge($lovedMoments, [['title' => 'Quote']]) as $index => $moment)
                        <button
                            type="button"
                            class="loved-dot {{ $index === 1 ? 'is-active' : '' }}"
                            data-loved-dot
                            data-loved-index="{{ $index }}"
                            aria-label="Show {{ $moment['title'] }}"
                            aria-current="{{ $index === 1 ? 'true' : 'false' }}"
                        ></button>
                    @endforeach
                </div>
            </div>
        </div>
    </section>

@endsection
