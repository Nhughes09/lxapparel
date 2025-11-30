'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    tiktokShopUrl: string;
}

export default function ProductCard({
    id,
    name,
    price,
    description,
    image,
    tiktokShopUrl,
}: ProductCardProps) {
    return (
        <div className="glass-dark rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-magenta/20">
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neon-cyan">{name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-neon-magenta">
                        ${price}
                    </span>
                    <a
                        href={tiktokShopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neon-purple/20 hover:bg-neon-purple/40 px-6 py-2 rounded-lg border border-neon-purple transition-all font-semibold"
                    >
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}
