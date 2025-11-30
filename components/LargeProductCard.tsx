'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LargeProductCardProps {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    tiktokShopUrl: string;
    reverse?: boolean;
}

export default function LargeProductCard({
    id,
    name,
    price,
    description,
    image,
    category,
    reverse = false,
}: LargeProductCardProps) {
    return (
        <div className={`min-h-[400px] md:min-h-[500px] flex flex-col md:flex-row items-center gap-8 md:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            {/* Product Image - Takes up ~1/2 on desktop, full on mobile */}
            <div className="w-full md:w-1/2 relative group">
                <div className="aspect-square relative overflow-hidden rounded-3xl bg-gray-100">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    {category}
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                    {name}
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center gap-6">
                    <span className="text-3xl font-bold text-gray-900">
                        ${price}
                    </span>
                    <Link href={`/shop/${category}/${id}`}>
                        <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all transform hover:scale-105">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
