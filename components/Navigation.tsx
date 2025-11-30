'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const categories = [
    { name: 'All', path: '/shop' },
    { name: 'Shirts', path: '/shop/shirts' },
    { name: 'Hoodies', path: '/shop/hoodies' },
    { name: 'Shorts', path: '/shop/shorts' },
];

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-gray-900">
                        LX APPAREL
                    </Link>

                    {/* Category Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={cat.path}
                                className="text-gray-700 hover:text-black transition-colors font-medium"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>

                    {/* Cart */}
                    <button className="flex items-center gap-2 text-gray-700 hover:text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="font-medium">Cart (0)</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
