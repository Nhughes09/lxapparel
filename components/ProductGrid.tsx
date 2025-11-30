'use client';

import ProductCard from './ProductCard';
import productsData from '@/data/products.json';

export default function ProductGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.products.map((product, index) => (
                <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <ProductCard {...product} />
                </div>
            ))}
        </div>
    );
}
