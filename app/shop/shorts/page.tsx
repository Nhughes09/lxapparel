import LargeProductCard from '@/components/LargeProductCard';
import productsData from '@/data/products.json';

const shortsProducts = productsData.products.filter((p: any) => p.category === 'shorts');

export default function ShortsPage() {
    return (
        <main className="bg-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
                        Shorts
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Time to touch grass. {shortsProducts.length} designs available.
                    </p>
                </div>

                {/* Products */}
                <div className="space-y-32">
                    {shortsProducts.map((product: any, index: number) => (
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
