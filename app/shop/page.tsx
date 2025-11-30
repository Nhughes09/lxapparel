import ProductGrid from '@/components/ProductGrid';

export default function ShopPage() {
    return (
        <main className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-clip-text text-transparent">
                            Shop All Products
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Every viral moment. Every premium tee. All in one place.
                    </p>
                </div>

                <ProductGrid />
            </div>
        </main>
    );
}
