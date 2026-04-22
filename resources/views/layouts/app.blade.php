<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="@yield('meta_description', 'Disposable devices, pod systems, flavor drops, and wholesale support.')">

        <title>@yield('title', config('app.name', 'Vape'))</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=space-grotesk:400,500,700|sora:600,700,800" rel="stylesheet" />

        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="antialiased">
        <div class="site-shell min-h-screen text-[var(--color-ink)]">
            <div class="warning-bar">
                <div class="shell flex items-center justify-center gap-2 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
                    <span class="text-sm leading-none">!</span>
                    <span>Warning: This product contains nicotine. Nicotine is an addictive chemical.</span>
                </div>
            </div>

            <header class="site-header">
                <div class="shell">
                    <div class="site-header-top">
                        <p class="site-meta hidden sm:block">ENGINEERED FOR RETAIL SHELVES, AFTER-SALES SUPPORT, AND AUTHENTICITY WORKFLOWS.</p>

                        <div class="site-meta-links">
                            <a href="{{ route('verification') }}">Verification</a>
                            <a href="{{ route('support') }}">After-Sales</a>
                            <a href="{{ route('wholesale') }}">Wholesale</a>
                        </div>
                    </div>

                    <div class="site-header-main">
                        <a href="{{ route('home') }}" class="flex items-center gap-3">
                            <span class="brand-mark" aria-hidden="true">
                                <span></span>
                                <span></span>
                            </span>
                            <span class="font-display text-[1.9rem] font-extrabold uppercase tracking-[-0.06em] text-white">Vape</span>
                        </a>

                        <nav class="site-nav hidden lg:flex">
                            <a href="{{ route('products') }}">Products</a>
                            <a href="{{ route('support') }}">Support</a>
                            <a href="{{ route('about') }}">About Us</a>
                            <a href="{{ route('wholesale') }}">Wholesale</a>
                            <a href="{{ route('news') }}">News</a>
                        </nav>

                        <div class="header-actions hidden md:flex">
                            <span class="utility-pill" aria-label="Current language">EN</span>
                            <a href="{{ route('verification') }}" class="button-primary">Verify Product</a>
                        </div>

                        <button
                            type="button"
                            class="mobile-nav-toggle lg:hidden"
                            data-mobile-nav-toggle
                            aria-expanded="false"
                            aria-controls="mobile-navigation"
                            aria-label="Open site navigation"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div id="mobile-navigation" class="mobile-nav-panel lg:hidden" data-mobile-nav-panel hidden>
                        <nav class="mobile-nav-links" aria-label="Mobile">
                            <a href="{{ route('products') }}">Products</a>
                            <a href="{{ route('support') }}">Support</a>
                            <a href="{{ route('about') }}">About Us</a>
                            <a href="{{ route('wholesale') }}">Wholesale</a>
                            <a href="{{ route('news') }}">News</a>
                            <a href="{{ route('verification') }}">Verification</a>
                        </nav>

                        <div class="mobile-nav-actions">
                            <span class="utility-pill" aria-label="Current language">EN</span>
                            <a href="{{ route('verification') }}" class="button-primary">Verify Product</a>
                        </div>
                    </div>
                </div>
            </header>

            @if (session('status'))
                <div class="shell pt-6">
                    <div class="rounded-[1.5rem] border border-emerald-400/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100">
                        {{ session('status.message') }}
                    </div>
                </div>
            @endif

            @if ($errors->any())
                <div class="shell pt-6">
                    <div class="rounded-[1.5rem] border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-100">
                        <p class="font-semibold">Please correct the highlighted fields and submit the form again.</p>
                    </div>
                </div>
            @endif

            <main>
                @yield('content')
            </main>

            <section class="pre-footer-ticker" aria-label="Brand highlights">
                <div class="pre-footer-ticker-intro shell">
                    <p class="pre-footer-kicker">Brand Signal</p>
                    <div class="pre-footer-intro-copy">
                        <h2>Performance claims, retail language, and launch energy in one strip.</h2>
                        <p>Use the ticker to reinforce the same product story customers see in the hero and trending sections.</p>
                    </div>
                </div>

                <div class="pre-footer-ticker-marquee">
                    <div class="pre-footer-ticker-row">
                        <div class="pre-footer-ticker-track">
                            <div class="pre-footer-ticker-copy">
                                <span class="pre-footer-outline">LEGENDARY</span>
                                <span>TRI-PROOF</span>
                                <span class="pre-footer-dot"></span>
                                <span class="pre-footer-acid">INNOVATION</span>
                                <span class="pre-footer-dot"></span>
                                <span>30W POWER</span>
                                <span class="pre-footer-dot"></span>
                                <span>FLAVOR KING</span>
                            </div>
                            <div class="pre-footer-ticker-copy" aria-hidden="true">
                                <span class="pre-footer-outline">LEGENDARY</span>
                                <span>TRI-PROOF</span>
                                <span class="pre-footer-dot"></span>
                                <span class="pre-footer-acid">INNOVATION</span>
                                <span class="pre-footer-dot"></span>
                                <span>30W POWER</span>
                                <span class="pre-footer-dot"></span>
                                <span>FLAVOR KING</span>
                            </div>
                        </div>
                    </div>

                    <div class="pre-footer-ticker-row pre-footer-ticker-row-reverse">
                        <div class="pre-footer-ticker-track">
                            <div class="pre-footer-ticker-copy">
                                <span>LEAK-PROOF DESIGN</span>
                                <span class="pre-footer-dot"></span>
                                <span>BUILT TO ENDURE</span>
                                <span class="pre-footer-dot"></span>
                                <span class="pre-footer-acid">FLAVOR MAXIMIZED</span>
                                <span class="pre-footer-dot"></span>
                                <span class="pre-footer-outline">RETAIL READY</span>
                            </div>
                            <div class="pre-footer-ticker-copy" aria-hidden="true">
                                <span>LEAK-PROOF DESIGN</span>
                                <span class="pre-footer-dot"></span>
                                <span>BUILT TO ENDURE</span>
                                <span class="pre-footer-dot"></span>
                                <span class="pre-footer-acid">FLAVOR MAXIMIZED</span>
                                <span class="pre-footer-dot"></span>
                                <span class="pre-footer-outline">RETAIL READY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="site-footer" id="support">
                <div class="shell py-12">
                    <div class="footer-shell">
                        <div class="space-y-4">
                            <div class="flex items-center gap-3">
                                <span class="brand-mark brand-mark-sm" aria-hidden="true">
                                    <span></span>
                                    <span></span>
                                </span>
                                <span class="font-display text-2xl font-extrabold uppercase tracking-[-0.05em] text-white">Vape</span>
                            </div>
                            <p class="footer-brand-copy">
                                Retail-focused storefront for verified products, customer support, and wholesale inquiries across the full catalog.
                            </p>
                        </div>

                        <div class="footer-column">
                            <h2>Products</h2>
                            <a href="{{ route('products') }}#disposable">Disposable Devices</a>
                            <a href="{{ route('products') }}#pods">Pod Systems</a>
                            <a href="{{ route('products') }}#flavors">Flavor Series</a>
                        </div>

                        <div class="footer-column">
                            <h2>Company</h2>
                            <a href="{{ route('about') }}">About Us</a>
                            <a href="{{ route('news') }}">News</a>
                            <a href="{{ route('wholesale') }}">Wholesale</a>
                        </div>

                        <div class="footer-column">
                            <h2>Support</h2>
                            <a href="{{ route('verification') }}">Product Verification</a>
                            <a href="{{ route('support') }}">Contact</a>
                            <a href="mailto:support@vape.com">support@vape.com</a>
                        </div>
                    </div>
                </div>
            </footer>

            <section class="post-footer-wordmark" aria-label="Vape brand wordmark">
                <span>Vape</span>
            </section>
        </div>
    </body>
</html>
