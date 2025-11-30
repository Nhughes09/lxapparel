'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-shift"></div>
            </div>

            {/* Animated Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-2 w-2 bg-white rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 pt-20">
                <h1 className="text-7xl md:text-9xl font-black mb-6 text-white drop-shadow-2xl">
                    LX APPAREL
                </h1>

                <p className="text-2xl md:text-4xl text-gray-200 mb-4 font-light">
                    December 2025 Collection
                </p>

                <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                    Viral memes meet premium apparel. Shirts, hoodies, shorts — all designed to make you the main character.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Link href="/shop/shirts">
                        <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                            Shop Shirts
                        </button>
                    </Link>
                    <Link href="/shop/hoodies">
                        <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
                            Shop Hoodies
                        </button>
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(10%) translateY(10%); }
          50% { transform: translateX(-5%) translateY(5%); }
          75% { transform: translateX(5%) translateY(-10%); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
        </section>
    );
}
