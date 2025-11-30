import Hero from '@/components/Hero';
import LargeProductCard from '@/components/LargeProductCard';
import Link from 'next/link';
import productsData from '@/data/products.json';

// Get featured products
const featuredProducts = productsData.products.filter((p: any) => p.featured);

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 space-y-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Featured Drops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most viral designs of December 2025. Limited quantities. Maximum impact.
          </p>
        </div>

        {featuredProducts.map((product: any, index: number) => (
          <LargeProductCard
            key={product.id}
            {...product}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      {/* Category Grid */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-16 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shirts */}
            <Link href="/shop/shirts" className="group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-5xl font-black mb-4">Shirts</h3>
                  <p className="text-xl">Premium tees with viral designs</p>
                </div>
              </div>
            </Link>

            {/* Hoodies */}
            <Link href="/shop/hoodies" className="group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-5xl font-black mb-4">Hoodies</h3>
                  <p className="text-xl">Cozy comfort meets culture</p>
                </div>
              </div>
            </Link>

            {/* Shorts */}
            <Link href="/shop/shorts" className="group">
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-5xl font-black mb-4">Shorts</h3>
                  <p className="text-xl">Touch grass in style</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
