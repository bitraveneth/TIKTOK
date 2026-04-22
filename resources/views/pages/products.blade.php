@extends('layouts.app')

@php
    $sections = [
        [
            'id' => 'disposable',
            'title' => 'Disposable Devices',
            'copy' => 'Launch-led devices with bold puff count, coil, and battery messaging.',
            'products' => [
                ['name' => 'Kiwi Strawberry Max', 'type' => 'Disposable', 'spec' => '40K puffs / dual control', 'class' => 'product-thumb-lime'],
                ['name' => 'Purple Pulse Control', 'type' => 'Disposable', 'spec' => '18ml / mesh coil', 'class' => 'product-thumb-violet'],
                ['name' => 'Mint Rush Bar', 'type' => 'Disposable', 'spec' => 'Cool mint finish', 'class' => 'product-thumb-mint'],
                ['name' => 'Orange Nova Max', 'type' => 'Disposable', 'spec' => 'Citrus blend', 'class' => 'product-thumb-orange'],
            ],
        ],
        [
            'id' => 'pods',
            'title' => 'Pod Systems',
            'copy' => 'Refillable hardware and starter kits that need clearer support and warranty information.',
            'products' => [
                ['name' => 'Graphite Pod Pro', 'type' => 'Pod System', 'spec' => 'Refillable / USB-C', 'class' => 'product-thumb-dark'],
            ],
        ],
        [
            'id' => 'flavors',
            'title' => 'Flavor Series',
            'copy' => 'Campaign-driven flavor drops and seasonal releases that rotate through merchandised cards.',
            'products' => [
                ['name' => 'Peach Ice Limited', 'type' => 'Flavor Drop', 'spec' => 'Ice fruit profile', 'class' => 'product-thumb-pink'],
            ],
        ],
    ];
@endphp

@section('title', 'Products | Vape')
@section('meta_description', 'Browse disposable vape devices, pod systems, and flavor series in a clean product catalog layout.')

@section('content')
    <section class="page-hero">
        <div class="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
                <p class="section-kicker">Products</p>
                <h1 class="page-title">Disposable devices, pods, and flavor campaigns.</h1>
            </div>
            <p class="page-copy">
                This page is ready to become a database-backed catalog. For now it lays out product groups, specs, and campaign cards in the same bright commercial style as the homepage.
            </p>
        </div>
    </section>

    <section class="shell py-14">
        <div class="category-strip">
            @foreach ($sections as $section)
                <a href="#{{ $section['id'] }}">{{ $section['title'] }}</a>
            @endforeach
            <a href="{{ route('verification') }}">Verify Product</a>
        </div>

        @foreach ($sections as $section)
            <section id="{{ $section['id'] }}" class="mt-10 scroll-mt-28">
                <div class="section-heading">
                    <div>
                        <p class="section-kicker">Catalog</p>
                        <h2 class="section-title text-3xl sm:text-4xl">{{ $section['title'] }}</h2>
                    </div>
                    <p class="section-copy">{{ $section['copy'] }}</p>
                </div>

                <div class="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    @foreach ($section['products'] as $product)
                        <article class="product-card">
                            <div class="product-thumb {{ $product['class'] }}"></div>
                            <p class="card-kicker">{{ $product['type'] }}</p>
                            <h2 class="card-title">{{ $product['name'] }}</h2>
                            <p class="card-copy">{{ $product['spec'] }}. Product cards can later include price, stock, flavor notes, and add-to-cart actions.</p>
                            <div class="mt-6 flex flex-wrap gap-2">
                                <span class="spec-pill">Verified Stock</span>
                                <span class="spec-pill">Retail Ready</span>
                            </div>
                        </article>
                    @endforeach
                </div>
            </section>
        @endforeach
    </section>
@endsection
