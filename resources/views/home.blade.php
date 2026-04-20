@extends('layouts.app')

@php
    $slides = [
        [
            'eyebrow' => 'Flagship Launch',
            'badge' => '40K',
            'unit' => 'PUFFS',
            'title' => 'Pulse X Control Disposable',
            'copy' => 'A high-output launch device built around long-session battery life, cold-finish airflow, and a hardware silhouette that reads premium from the first screen.',
            'series' => 'ICE + NIC CONTROL SERIES',
            'scene' => 'hero-scene-road',
            'metrics' => [
                ['value' => '18ML', 'label' => 'E-liquid'],
                ['value' => '850mAh', 'label' => 'Battery'],
                ['value' => 'Dual Mesh', 'label' => 'Coil'],
            ],
            'support' => [
                ['label' => 'After-Sales', 'href' => route('support')],
                ['label' => 'Verification', 'href' => route('verification')],
            ],
            'devices' => [
                ['name' => 'Kiwi Strawberry', 'class' => 'device-lime'],
                ['name' => 'Purple Storm', 'class' => 'device-violet'],
                ['name' => 'Cherry Pop', 'class' => 'device-pink'],
            ],
        ],
        [
            'eyebrow' => 'Flavor Platform',
            'badge' => '18ML',
            'unit' => 'CAPACITY',
            'title' => 'Crystal Mesh Flavor Series',
            'copy' => 'A brighter collection slot for fast-rotation flavor campaigns, curated colorways, and technical callouts that keep the range feeling engineered rather than generic.',
            'series' => 'MESH FLAVOR PLATFORM',
            'scene' => 'hero-scene-spectrum',
            'metrics' => [
                ['value' => '12', 'label' => 'Flavors'],
                ['value' => 'LED', 'label' => 'Display Ring'],
                ['value' => 'USB-C', 'label' => 'Recharge'],
            ],
            'support' => [
                ['label' => 'View Products', 'href' => route('products').'#flavors'],
                ['label' => 'Read Launch Notes', 'href' => route('news').'#launch-story'],
            ],
            'devices' => [
                ['name' => 'Mint Rush', 'class' => 'device-mint'],
                ['name' => 'Sky Berry', 'class' => 'device-sky'],
                ['name' => 'Black Ice', 'class' => 'device-dark'],
            ],
        ],
        [
            'eyebrow' => 'Trade Program',
            'badge' => 'B2B',
            'unit' => 'READY',
            'title' => 'Wholesale Packs and Verified Stock',
            'copy' => 'A trade-facing stage for carton quantities, verified inventory, and region-aware onboarding when retail buyers need a direct route instead of browsing like consumers.',
            'series' => 'RETAIL SUPPLY CHANNEL',
            'scene' => 'hero-scene-trade',
            'metrics' => [
                ['value' => 'MOQ', 'label' => 'Carton Plans'],
                ['value' => 'Batch', 'label' => 'Verified'],
                ['value' => '24h', 'label' => 'Lead Review'],
            ],
            'support' => [
                ['label' => 'Trade Inquiry', 'href' => route('wholesale').'#trade-inquiry'],
                ['label' => 'Verification Flow', 'href' => route('verification').'#manual-review'],
            ],
            'devices' => [
                ['name' => 'Orange Nova', 'class' => 'device-orange'],
                ['name' => 'Ruby Pod', 'class' => 'device-red'],
                ['name' => 'Graphite Max', 'class' => 'device-dark'],
            ],
        ],
    ];
@endphp

@section('title', 'RoopDistrict | Commercial Vape Storefront')
@section('meta_description', 'A light commercial vape homepage with a warning strip, white navigation, large product banner, videos, products, verification, and wholesale blocks.')

@section('content')
    <section class="hero-shell pt-0">
        <div class="hero-slider" data-slider>
            @foreach ($slides as $index => $slide)
                <article class="hero-slide {{ $index === 0 ? 'is-active' : '' }}" data-slide aria-hidden="{{ $index === 0 ? 'false' : 'true' }}">
                    <div class="hero-scene {{ $slide['scene'] }}">
                        <div class="hero-scene-inner">
                            <div class="hero-copy-panel">
                                <p class="hero-overline">{{ $slide['eyebrow'] }}</p>
                                <div class="hero-badge-row">
                                    <p class="hero-badge">{{ $slide['badge'] }}</p>
                                    <span class="hero-badge-unit">{{ $slide['unit'] }}</span>
                                </div>
                                <h1 class="hero-title">{{ $slide['title'] }}</h1>
                                <p class="hero-copy">{{ $slide['copy'] }}</p>

                                <div class="hero-metrics">
                                    @foreach ($slide['metrics'] as $metric)
                                        <article class="hero-metric-card">
                                            <strong>{{ $metric['value'] }}</strong>
                                            <span>{{ $metric['label'] }}</span>
                                        </article>
                                    @endforeach
                                </div>

                                <div class="hero-support-links">
                                    @foreach ($slide['support'] as $link)
                                        <a href="{{ $link['href'] }}">{{ $link['label'] }}</a>
                                    @endforeach
                                </div>
                            </div>

                            <div class="hero-visual-panel">
                                <div class="hero-brand-chip">
                                    <span>VPU</span>
                                    <small>Inside</small>
                                </div>

                                <div class="hero-device-stage">
                                    <div class="hero-device-aura"></div>
                                    <div class="device-cluster">
                                        @foreach ($slide['devices'] as $deviceIndex => $device)
                                            <div class="device-card {{ $device['class'] }} {{ $deviceIndex === 1 ? 'device-card-center' : '' }} {{ $deviceIndex === 2 ? 'device-card-tilt' : '' }}">
                                                <span class="device-cap"></span>
                                                <span class="device-front">
                                                    <span class="device-mark">{{ substr($device['name'], 0, 1) }}</span>
                                                </span>
                                                <span class="device-label">{{ $device['name'] }}</span>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>

                                <div class="hero-gallery">
                                    @foreach ($slide['devices'] as $device)
                                        <article class="hero-gallery-card">
                                            <div class="hero-gallery-device {{ $device['class'] }}">
                                                <span class="device-cap"></span>
                                                <span class="device-front">
                                                    <span class="device-mark">{{ substr($device['name'], 0, 1) }}</span>
                                                </span>
                                            </div>
                                            <div>
                                                <p class="hero-gallery-label">{{ $device['name'] }}</p>
                                                <p class="hero-gallery-copy">{{ $slide['series'] }}</p>
                                            </div>
                                        </article>
                                    @endforeach
                                </div>

                                <div class="hero-side-rail">
                                    @foreach ($slide['metrics'] as $metric)
                                        <div class="hero-side-stat">
                                            <strong>{{ $metric['value'] }}</strong>
                                            <span>{{ $metric['label'] }}</span>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>

                        <div class="hero-bottom-series">
                            <p>{{ $slide['series'] }}</p>
                            <span>New Arrival</span>
                        </div>
                    </div>
                </article>
            @endforeach

            <div class="hero-controls">
                <div class="hero-dots" role="tablist" aria-label="Banner slides">
                    @foreach ($slides as $index => $slide)
                        <button
                            type="button"
                            class="hero-dot {{ $index === 0 ? 'is-active' : '' }}"
                            data-slide-dot="{{ $index }}"
                            aria-label="Show slide {{ $index + 1 }}"
                            aria-selected="{{ $index === 0 ? 'true' : 'false' }}"
                        ></button>
                    @endforeach
                </div>

                <div class="hero-arrow-group">
                    <button type="button" class="hero-arrow" data-slide-prev aria-label="Previous slide">&lt;</button>
                    <button type="button" class="hero-arrow" data-slide-next aria-label="Next slide">&gt;</button>
                </div>
            </div>
        </div>
    </section>

    <section class="shell py-14 sm:py-16" id="about">
        <div class="section-heading text-center">
            <p class="section-kicker">Videos Section</p>
            <h2 class="section-title text-4xl sm:text-5xl">Brand motion, launch reels, and feature explainers.</h2>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article class="video-card">
                <div class="video-stage">
                    <a href="{{ route('news') }}#launch-story" class="play-button" aria-label="Open the launch story"></a>
                </div>
                <div class="space-y-3">
                    <h3 class="card-title">Homepage feature reel</h3>
                    <p class="card-copy">Open the launch story for campaign notes, product callouts, and the content that supports this hero treatment.</p>
                </div>
            </article>

            <div class="grid gap-6">
                <article class="info-card">
                    <p class="card-kicker">Support</p>
                    <h3 class="card-title">Verification should be visible early.</h3>
                    <p class="card-copy">Put QR verification, authenticity lookup, and batch-check guidance near the hero and video blocks.</p>
                </article>

                <article class="info-card">
                    <p class="card-kicker">Wholesale</p>
                    <h3 class="card-title">Trade buyers need a direct path.</h3>
                    <p class="card-copy">Keep a clear route for distributors, carton quantities, and region availability instead of hiding it in the footer.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="section-band" id="products">
        <div class="shell py-14 sm:py-16">
            <div class="section-heading">
                <div>
                    <p class="section-kicker">Products</p>
                    <h2 class="section-title text-4xl sm:text-5xl">Recommended devices and flavor lines.</h2>
                </div>
                <p class="section-copy">The screenshot is product-first. These cards keep that structure but make room for cleaner specs and easier catalog growth later.</p>
            </div>

            <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <article class="product-card">
                    <div class="product-thumb product-thumb-lime"></div>
                    <p class="card-kicker">Disposable</p>
                    <h3 class="card-title">Kiwi Strawberry Max</h3>
                    <p class="card-copy">40K puff hero device with bright finish, dual control messaging, and launch-card presentation.</p>
                </article>

                <article class="product-card">
                    <div class="product-thumb product-thumb-violet"></div>
                    <p class="card-kicker">Mesh Coil</p>
                    <h3 class="card-title">Purple Pulse Control</h3>
                    <p class="card-copy">Strong mid-page product block for device highlights, screen features, and flavor campaign tie-ins.</p>
                </article>

                <article class="product-card">
                    <div class="product-thumb product-thumb-pink"></div>
                    <p class="card-kicker">Flavor Drop</p>
                    <h3 class="card-title">Peach Ice Limited</h3>
                    <p class="card-copy">Light product card treatment for one-off promotions and rotating featured stock.</p>
                </article>

                <article class="product-card">
                    <div class="product-thumb product-thumb-dark"></div>
                    <p class="card-kicker">Pod System</p>
                    <h3 class="card-title">Graphite Pod Pro</h3>
                    <p class="card-copy">A cleaner secondary product lane for starter kits, refillables, and support-heavy items.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="shell py-14 sm:py-16" id="verification">
        <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article class="promo-card promo-card-red">
                <p class="section-kicker text-white/80">Verification</p>
                <h2 class="section-title text-4xl text-white sm:text-5xl">Check authenticity before purchase.</h2>
                <p class="mt-4 max-w-lg text-sm leading-7 text-white/85">
                    Use the verification page to submit suspicious codes for manual review and keep batch-check support visible near the homepage hero.
                </p>
                <a href="{{ route('verification') }}" class="button-light mt-8">Product Verification</a>
            </article>

            <div class="grid gap-6 sm:grid-cols-2" id="wholesale">
                <article class="info-card">
                    <p class="card-kicker">Wholesale</p>
                    <h3 class="card-title">Carton packs for retail partners.</h3>
                    <p class="card-copy">Reserve this block for MOQ, stock alerts, regional shipping, and trade contact details.</p>
                </article>

                <article class="info-card">
                    <p class="card-kicker">Support</p>
                    <h3 class="card-title">Simple corporate support pages.</h3>
                    <p class="card-copy">Keep terms, privacy, warranty, and product support clean and not obviously placeholder.</p>
                    <a href="{{ route('support') }}" class="mt-6 inline-flex text-sm font-semibold text-[var(--color-red)]">Open Support</a>
                </article>

                <article class="info-card sm:col-span-2" id="news">
                    <p class="card-kicker">News</p>
                    <h3 class="card-title">News and blog blocks should feel maintained.</h3>
                    <p class="card-copy">Use real launch notes, verification guides, and feature explainers instead of filler posts. The layout is already ready for that content.</p>
                    <a href="{{ route('news') }}" class="mt-6 inline-flex text-sm font-semibold text-[var(--color-red)]">Read News</a>
                </article>
            </div>
        </div>
    </section>
@endsection
