@extends('layouts.app')

@section('title', 'Product Verification | RoopDistrict')
@section('meta_description', 'Verify vape product authenticity with batch, QR, and serial code guidance.')

@section('content')
    <section class="page-hero">
        <div class="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
                <p class="section-kicker">Verification</p>
                <h1 class="page-title">Check authenticity before purchase or use.</h1>
            </div>
            <p class="page-copy">
                This page routes suspicious codes into a manual review flow so customers can submit serials, purchase region, and product type for follow-up.
            </p>
        </div>
    </section>

    <section class="shell py-14">
        <div class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]" id="manual-review">
            <article class="promo-card promo-card-red">
                <p class="section-kicker text-white/80">Authenticity</p>
                <h2 class="section-title text-4xl text-white">Enter a serial or scan the code.</h2>
                <p class="mt-4 text-sm leading-7 text-white/85">
                    Submissions are logged for manual review so the team can check suspicious packaging, codes, and purchase details.
                </p>
            </article>

            <form action="{{ route('verification.submit') }}" method="POST" class="form-card">
                @csrf
                <label class="lg:col-span-2">
                    <span>Serial / Security Code</span>
                    <input type="text" name="serial_code" value="{{ old('serial_code') }}" placeholder="Enter code from package">
                    @error('serial_code')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label>
                    <span>Product Type</span>
                    <select name="product_type">
                        <option value="Disposable device" @selected(old('product_type') === 'Disposable device')>Disposable device</option>
                        <option value="Pod system" @selected(old('product_type') === 'Pod system')>Pod system</option>
                        <option value="Flavor refill" @selected(old('product_type') === 'Flavor refill')>Flavor refill</option>
                    </select>
                    @error('product_type')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label>
                    <span>Purchase Region</span>
                    <input type="text" name="purchase_region" value="{{ old('purchase_region') }}" placeholder="City or country">
                    @error('purchase_region')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <p class="lg:col-span-2 text-sm leading-7 text-[var(--color-ink-soft)]">
                    This is a manual review request, not an automated pass or fail. Include the code exactly as shown on the package.
                </p>
                <button type="submit" class="button-primary lg:w-fit">Request Manual Check</button>
            </form>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
            <article class="info-card">
                <p class="card-kicker">Step 01</p>
                <h2 class="card-title">Inspect the package.</h2>
                <p class="card-copy">Check seal quality, print consistency, batch label, and whether the warning information is present.</p>
            </article>

            <article class="info-card">
                <p class="card-kicker">Step 02</p>
                <h2 class="card-title">Scan the QR code.</h2>
                <p class="card-copy">Use the official verification path only. Do not trust copied codes, screenshots, or third-party redirects.</p>
            </article>

            <article class="info-card">
                <p class="card-kicker">Step 03</p>
                <h2 class="card-title">Contact support if unsure.</h2>
                <p class="card-copy">Send clear photos of the product, carton, batch number, and purchase receipt for support review.</p>
            </article>
        </div>
    </section>
@endsection
