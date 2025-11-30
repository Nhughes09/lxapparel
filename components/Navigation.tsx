'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-clip-text text-transparent text-glow">
                        LX APPAREL
                    </span>
                </Link>

                <div className="flex items-center gap-8">
                    <Link
                        href="/shop"
                        className="text-gray-300 hover:text-neon-cyan transition-colors"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/#about"
                        className="text-gray-300 hover:text-neon-cyan transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-gray-300 hover:text-neon-cyan transition-colors"
                    >
                        Contact
                    </Link>
                    <button className="bg-neon-magenta/20 hover:bg-neon-magenta/30 px-4 py-2 rounded-lg border border-neon-magenta/50 transition-all">
                        🛒 Cart (0)
                    </button>
                </div>
            </div>
        </nav>
    );
}
