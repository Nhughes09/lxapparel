export default function Footer() {
    return (
        <footer className="glass-dark border-t border-neon-purple/20 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent mb-4">
                            LX APPAREL
                        </h3>
                        <p className="text-gray-400">
                            Viral memes on premium tees. December 2025 collection drops now.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-neon-cyan mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="/shop" className="hover:text-neon-magenta transition-colors">
                                    Shop All
                                </a>
                            </li>
                            <li>
                                <a href="/#about" className="hover:text-neon-magenta transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="hover:text-neon-magenta transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-semibold text-neon-cyan mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://tiktok.com/@lxapparel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:scale-110 transition-transform"
                            >
                                🎵
                            </a>
                            <a
                                href="https://instagram.com/lxapparel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:scale-110 transition-transform"
                            >
                                📷
                            </a>
                            <a
                                href="https://twitter.com/lxapparel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl hover:scale-110 transition-transform"
                            >
                                🐦
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neon-purple/20 mt-8 pt-8 text-center text-gray-500">
                    <p>© 2025 LX Apparel. All rights reserved. Built with 🔥 by the internet.</p>
                </div>
            </div>
        </footer>
    );
}
