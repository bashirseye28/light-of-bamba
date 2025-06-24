'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Mail, Youtube, ChevronUp } from 'lucide-react';

const navLinks = [
  { name: 'Lessons', href: '/lessons' },
  { name: 'Teachings', href: '/teachings' },
  { name: 'Places', href: '/places' },
  { name: 'Articles', href: '/articles' },
  { name: 'Certificate', href: '/certificate' },
];

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-parchment text-night-ink pt-16 pb-10 px-6 sm:px-10 lg:px-32 border-t border-desert-beige">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-heading text-sage-green mb-4">The Light of Shaykh Ahmadu Bamba</h2>
          <p className="text-base font-body leading-relaxed">
            An educational platform nurturing hearts with the biography, teachings, and values of Shaykh Bamba — for the youth, newcomers, and seekers worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-night-ink/80 hover:text-sufi-teal transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Email" className="hover:text-sufi-teal"><Mail className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-sufi-teal"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-sufi-teal"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-sufi-teal"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-desert-beige pt-6 text-sm text-center text-night-ink/70">
        &copy; {new Date().getFullYear()} The Light of Shaykh Ahmadu Bamba. All rights reserved.
      </div>

      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 right-6 z-50 bg-sun-gold text-night-ink p-3 rounded-full shadow-lg hover:bg-garden-green transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}