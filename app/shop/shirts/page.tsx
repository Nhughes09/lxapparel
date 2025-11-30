import LargeProductCard from '@/components/LargeProductCard';
import productsData from '@/data/products.json';

const shirtsProducts = productsData.products.filter((p: any) => p.category === 'shirts');

export default function ShirtsPage() {
    return (
        <main className="bg-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
                        Shirts
                    </h1>
                    <p className="text-2xl text-gray-600">
                        Premium tees with the internet's finest moments. {shirtsProducts.length} designs available.
                    </p>
                </div>

                {/* Products */}
                <div className="space-y-32">
                    {shirtsProducts.map((product: any, index: number) => (
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
