@extends('layouts.app')

@php
    $posts = [
        [
            'id' => 'launch-story',
            'type' => 'Launch',
            'title' => 'How to present a 40K puff device without overwhelming the hero.',
            'copy' => 'Keep the puff count dominant, then support it with battery, coil, and flavor notes below the banner.',
            'detail' => 'Lead with the flagship number, then back it up with the few specs that influence purchase decisions fastest: juice volume, charging, and coil behavior.',
        ],
        [
            'id' => 'buyer-guide',
            'type' => 'Guide',
            'title' => 'What customers should check before buying a disposable device.',
            'copy' => 'Batch labels, QR verification, packaging quality, and visible warning language should all be easy to find.',
            'detail' => 'Verification content should explain the real workflow clearly: inspect the packaging, compare the batch information, and submit suspicious codes for review.',
        ],
        [
            'id' => 'trade-update',
            'type' => 'Retail',
            'title' => 'Why wholesale buyers need a different route than consumers.',
            'copy' => 'Trade buyers need pack sizes, availability, region rules, and fast contact instead of regular product browsing only.',
            'detail' => 'Trade pages should foreground MOQ, regional availability, and contact routing so retailers do not have to use the consumer support flow for supply questions.',
        ],
    ];
@endphp

@section('title', 'News | RoopDistrict')
@section('meta_description', 'News, product launch notes, verification guides, and retail content for a vape storefront.')

@section('content')
    <section class="page-hero">
        <div class="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
                <p class="section-kicker">News</p>
                <h1 class="page-title">Launch notes, product guides, and retail updates.</h1>
            </div>
            <p class="page-copy">
                This page avoids the common vape-site problem of thin placeholder posts. Use it for real launch content and customer education.
            </p>
        </div>
    </section>

    <section class="shell py-14">
        <div class="grid gap-6 lg:grid-cols-3">
            @foreach ($posts as $post)
                <article class="info-card">
                    <p class="card-kicker">{{ $post['type'] }}</p>
                    <h2 class="card-title">{{ $post['title'] }}</h2>
                    <p class="card-copy">{{ $post['copy'] }}</p>
                    <a href="#{{ $post['id'] }}" class="mt-6 inline-flex text-sm font-semibold text-[var(--color-red)]">Read Article</a>
                </article>
            @endforeach
        </div>

        <div class="mt-10 grid gap-6">
            @foreach ($posts as $post)
                <article id="{{ $post['id'] }}" class="info-card scroll-mt-28">
                    <p class="card-kicker">{{ $post['type'] }}</p>
                    <h2 class="card-title">{{ $post['title'] }}</h2>
                    <p class="card-copy">{{ $post['detail'] }}</p>
                </article>
            @endforeach
        </div>

        <div class="mt-10 rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.04)]">
            <p class="section-kicker">Editorial Plan</p>
            <h2 class="section-title mt-4 max-w-3xl text-4xl">Publish content that supports products, support, and verification.</h2>
            <p class="mt-5 max-w-3xl text-sm leading-7 text-[var(--color-ink-soft)]">
                This section is ready to move into a database-backed blog later without leaving today’s page full of dead article links.
            </p>
        </div>
    </section>
@endsection
