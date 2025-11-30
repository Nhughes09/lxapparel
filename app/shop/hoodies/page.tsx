import LargeProductCard from '@/components/LargeProductCard';
import productsData from '@/data/products.json';

const hoodiesProducts = productsData.products.filter((p: any) => p.category === 'hoodies');

export default function HoodiesPage() {
    return (
        <main className="bg-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
                        Hoodies
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Premium hoodies for the sigma grindset. {hoodiesProducts.length} designs available.
                    </p>
                </div>

                {/* Products */}
                <div className="space-y-32">
                    {hoodiesProducts.map((product: any, index: number) => (
                        <LargeProductCard
                            key={product.id}
                            {...product}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
