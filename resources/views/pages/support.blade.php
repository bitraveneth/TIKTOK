@extends('layouts.app')

@section('title', 'Support | RoopDistrict')
@section('meta_description', 'Contact support, find product help, and review verification, warranty, and retail support options.')

@section('content')
    <section class="page-hero">
        <div class="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
                <p class="section-kicker">Support</p>
                <h1 class="page-title">Product help, warranty notes, and contact paths.</h1>
            </div>
            <p class="page-copy">
                Keep support simple: authenticity checks, usage guidance, store contact, and trade support should be easy to find from one page.
            </p>
        </div>
    </section>

    <section class="shell py-14">
        <div class="grid gap-6 lg:grid-cols-3">
            <article class="info-card">
                <p class="card-kicker">Verification</p>
                <h2 class="card-title">Check your device code.</h2>
                <p class="card-copy">Guide customers to scan QR codes, compare packaging, and confirm product authenticity before use.</p>
                <a href="{{ route('verification') }}" class="mt-6 button-secondary">Open Verification</a>
            </article>

            <article class="info-card">
                <p class="card-kicker">Warranty</p>
                <h2 class="card-title">Collect the right details first.</h2>
                <p class="card-copy">Ask for purchase date, batch code, product photos, and usage issue before processing a support request.</p>
                <a href="#contact" class="mt-6 button-secondary">Start Request</a>
            </article>

            <article class="info-card">
                <p class="card-kicker">Retail</p>
                <h2 class="card-title">Trade support has a separate lane.</h2>
                <p class="card-copy">Wholesale, carton stock, and distributor support should route through the business inquiry flow.</p>
                <a href="{{ route('wholesale') }}" class="mt-6 button-secondary">Wholesale Support</a>
            </article>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]" id="contact">
            <article class="promo-card promo-card-red">
                <p class="section-kicker text-white/80">Contact</p>
                <h2 class="section-title text-4xl text-white">Need help with a product?</h2>
                <p class="mt-4 text-sm leading-7 text-white/85">
                    This form now records support requests in the application log so the team can review them and follow up manually.
                </p>
            </article>

            <form action="{{ route('support.submit') }}" method="POST" class="form-card">
                @csrf
                <label>
                    <span>Name</span>
                    <input type="text" name="name" value="{{ old('name') }}" placeholder="Your name">
                    @error('name')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" value="{{ old('email') }}" placeholder="you@example.com">
                    @error('email')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label>
                    <span>Topic</span>
                    <select name="topic">
                        <option value="Product verification" @selected(old('topic') === 'Product verification')>Product verification</option>
                        <option value="Warranty question" @selected(old('topic') === 'Warranty question')>Warranty question</option>
                        <option value="Retail support" @selected(old('topic') === 'Retail support')>Retail support</option>
                    </select>
                    @error('topic')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <label class="lg:col-span-2">
                    <span>Message</span>
                    <textarea name="message" rows="5" placeholder="Tell us what happened">{{ old('message') }}</textarea>
                    @error('message')
                        <p class="mt-2 text-sm font-semibold text-[var(--color-red)]">{{ $message }}</p>
                    @enderror
                </label>
                <p class="lg:col-span-2 text-sm leading-7 text-[var(--color-ink-soft)]">
                    Requests are reviewed manually. Use an email address you can receive replies on.
                </p>
                <button type="submit" class="button-primary lg:w-fit">Send Support Request</button>
            </form>
        </div>
    </section>
@endsection
