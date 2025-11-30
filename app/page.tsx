import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              December 2025 Drops
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Viral memes you've been scrolling. Now on premium tees.
          </p>
        </div>

        <ProductGrid />
      </section>

      {/* Why LX */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-purple">
            Why LX Apparel?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-dark p-8 rounded-2xl text-center">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-xl font-bold text-neon-cyan mb-3">
              Viral Designs
            </h3>
            <p className="text-gray-400">
              We turn the internet's best moments into wearable art. Every design is hand-picked from trending culture.
            </p>
          </div>

          <div className="glass-dark p-8 rounded-2xl text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-neon-magenta mb-3">
              Premium Quality
            </h3>
            <p className="text-gray-400">
              Soft, durable, and comfortable. Our tees are built to last through endless scrolls and IRL adventures.
            </p>
          </div>

          <div className="glass-dark p-8 rounded-2xl text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-neon-purple mb-3">
              Fast Shipping
            </h3>
            <p className="text-gray-400">
              From our warehouse to your door faster than your For You Page refreshes. Lightning-quick delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="glass-dark p-12 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got Questions? We Got Answers.
          </h2>
          <p className="text-gray-400 mb-8">
            DM us on TikTok or Instagram. We reply faster than you can say "main character energy."
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://tiktok.com/@lxapparel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon"
            >
              TikTok 🎵
            </a>
            <a
              href="https://instagram.com/lxapparel"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Instagram 📷
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
