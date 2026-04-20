@extends('layouts.app')

@section('title', 'Wholesale | RoopDistrict')
@section('meta_description', 'Wholesale inquiry page for retail partners, distributors, carton quantities, and vape product availability.')

@section('content')
    <section class="page-hero">
        <div class="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
                <p class="section-kicker">Wholesale</p>
                <h1 class="page-title">Trade inquiry path for retailers and distributors.</h1>
            </div>
            <p class="page-copy">
                Separate wholesale from consumer browsing so business buyers can find carton availability, MOQ guidance, region support, and contact details quickly.
            </p>
        </div>
    </section>

    <section class="shell py-14">
        <div class="grid gap-6 lg:grid-cols-3">
            <article class="info-card">
                <p class="card-kicker">MOQ</p>
                <h2 class="card-title">Pack and carton planning.</h2>
                <p class="card-copy">Add minimum order quantities, pack sizes, case dimensions, and launch bundles when real inventory is ready.</p>
            </article>

            <article class="info-card">
                <p class="card-kicker">Stock</p>
                <h2 class="card-title">Verified batch supply.</h2>
                <p class="card-copy">Use this page to explain batch checks, packaging standards, and anti-counterfeit support for retailers.</p>
            </article>

            <article class="info-card">
                <p class="card-kicker">Region</p>
                <h2 class="card-title">Local availability rules.</h2>
                <p class="card-copy">Wholesale eligibility and shipping rules vary by market, so this page should collect buyer location early.</p>
            </article>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article class="promo-card promo-card-red">
                <p class="section-kicker text-white/80">Trade Contact</p>
                <h2 class="section-title text-4xl text-white">Ready for retailer onboarding.</h2>
                <p class="mt-4 text-sm leading-7 text-white/85">
                    The trade form now records inbound wholesale leads in the application log so the team can qualify demand and respond manually.
                </p>
            </article>

            <form action="{{ route('wholesale.submit') }}" method="POST" class="form-card" id="trade-inquiry">
                @csrf
                <label>
                    <span>Company</span>
                    <input type="text" name="company" value="{{ old('company') }}" placeholder="Retail company name">
                    @error('company')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label>
                    <span>Buyer Email</span>
                    <input type="email" name="buyer_email" value="{{ old('buyer_email') }}" placeholder="buyer@example.com">
                    @error('buyer_email')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label>
                    <span>Country / Region</span>
                    <input type="text" name="region" value="{{ old('region') }}" placeholder="Bangladesh">
                    @error('region')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label>
                    <span>Monthly Volume</span>
                    <select name="monthly_volume">
                        <option value="Under 500 units" @selected(old('monthly_volume') === 'Under 500 units')>Under 500 units</option>
                        <option value="500 - 2,000 units" @selected(old('monthly_volume') === '500 - 2,000 units')>500 - 2,000 units</option>
                        <option value="2,000+ units" @selected(old('monthly_volume') === '2,000+ units')>2,000+ units</option>
                    </select>
                    @error('monthly_volume')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label class="lg:col-span-2">
                    <span>Message</span>
                    <textarea name="message" rows="5" placeholder="Tell us what products and volumes you need">{{ old('message') }}</textarea>
                    @error('message')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <p class="lg:col-span-2 text-sm leading-7 text-[var(--color-ink-soft)]">
                    Include the product lines and estimated demand so the trade team can route the inquiry correctly.
                </p>
                <button type="submit" class="button-primary lg:w-fit">Submit Inquiry</button>
            </form>
        </div>
    </section>
@endsection
