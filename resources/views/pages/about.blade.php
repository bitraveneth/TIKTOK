@extends('layouts.app')

@section('title', 'About Us | Vape')
@section('meta_description', 'Learn about the Vape storefront direction, product standards, and commercial vape brand positioning.')

@section('content')
    <section class="page-hero">
        <div class="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
                <p class="section-kicker">About Us</p>
                <h1 class="page-title">A product-first vape brand presentation.</h1>
            </div>
            <p class="page-copy">
                The site direction is built around launch banners, visible product specs, clean support pages, and a reliable wholesale path for trade buyers.
            </p>
        </div>
    </section>

    <section class="shell py-14">
        <div class="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
            <article class="info-card">
                <p class="card-kicker">01</p>
                <h2 class="card-title">Commercial clarity.</h2>
                <p class="card-copy">The design keeps the first screen focused on products, puff count, device visuals, and campaign calls to action.</p>
            </article>

            <article class="info-card">
                <p class="card-kicker">02</p>
                <h2 class="card-title">Trust before checkout.</h2>
                <p class="card-copy">Verification, support, and warning language are visible across the site instead of hidden below the fold.</p>
            </article>

            <article class="info-card">
                <p class="card-kicker">03</p>
                <h2 class="card-title">Retail-ready structure.</h2>
                <p class="card-copy">Products, wholesale, support, and news are separate pages so the site can grow without turning into one long landing page.</p>
            </article>
        </div>

        <div class="mt-10 rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
            <p class="section-kicker">Brand Standard</p>
            <h2 class="section-title mt-4 max-w-3xl text-4xl">Clean visual language, strong product hierarchy, and maintained content matter more than heavy effects.</h2>
            <p class="mt-5 max-w-3xl text-sm leading-7 text-[var(--color-ink-soft)]">
                Every page should make it easy to find product details, verification steps, support contacts, and trade information without forcing customers through unnecessary clicks.
            </p>
        </div>
    </section>
@endsection
