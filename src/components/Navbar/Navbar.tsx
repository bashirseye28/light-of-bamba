'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { name: 'Lessons', href: '/lessons' },
  { name: 'Teachings', href: '/teachings' },
  { name: 'Places', href: '/places' },
  { name: 'Articles', href: '/articles' },
  { name: 'Certificate', href: '/certificate' },
];

const logoUrl = 'https://res.cloudinary.com/dnmoy5wua/image/upload/v1750552257/NewLogo_ve7pjy.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-parchment text-night-ink border-b border-desert-beige shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-5 lg:flex-nowrap">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={logoUrl}
            alt="Site Logo"
            width={44}
            height={44}
            className="rounded-full shadow-md"
            priority
          />
          <span className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-sage-green">
            <span className="lg:hidden">The Light of Ahmadu Bamba</span>
            <span className="hidden lg:inline">The Light of Shaykh Ahmadu Bamba</span>
          </span>
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-sufi-teal transition-transform duration-300 hover:scale-105"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-body text-base transition-all duration-200 ease-in-out hover:text-sufi-teal hover:tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay + Full-Width Side Panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-parchment/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-full bg-parchment/95 backdrop-blur-lg shadow-2xl p-6 z-50 flex flex-col"
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-sufi-teal hover:text-olive-leaf transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-body text-lg py-3 px-2 text-sufi-teal focus:outline-none focus:ring-2 focus:ring-sufi-teal/50 rounded-md transition-all duration-200 ease-in-out hover:bg-desert-beige hover:text-olive-leaf"
                    >
                      {item.name}
                    </Link>
                    {i < navItems.length - 1 && <hr className="border-desert-beige/60 my-1" />}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}