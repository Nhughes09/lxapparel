'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(/hero-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-dark-900/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 animate-slide-up">
                <h1 className="text-6xl md:text-8xl font-black mb-6">
                    <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-clip-text text-transparent text-glow animate-float">
                        LX APPAREL
                    </span>
                </h1>

                <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light">
                    Viral Memes. Premium Tees. Unmatched Vibes.
                </p>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    December 2025 drops are here. Wear the internet's finest moments.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Link href="/shop">
                        <button className="btn-neon animate-glow text-lg">
                            Shop Now 🔥
                        </button>
                    </Link>
                    <a
                        href="https://tiktok.com/@lxapparel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="glass px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                            Follow on TikTok ✨
                        </button>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
