'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-parchment py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1749087098/12804210_5053309_qdqxpn.jpg')" }}
    >
      <div className="absolute inset-0 bg-night-ink/60 backdrop-blur-sm" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-sun-gold mb-6"
        >
          The Light of Shaykh Ahmadu Bamba
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto text-parchment"
        >
          “Work as if you will never die. Worship as if you will die tomorrow.” – Shaykh Ahmadu Bamba
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg"
        >
          A spiritual learning app for youth, newcomers, and seekers. Explore the biography, teachings, and sacred places of Shaykh Ahmadu Bamba.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="/lessons"
            className="bg-sun-gold text-night-ink px-6 py-3 rounded-xl font-medium shadow-md hover:bg-garden-green hover:text-white transition"
          >
            Start Lessons
          </Link>
          <Link
            href="/teachings"
            className="border border-sun-gold text-sun-gold px-6 py-3 rounded-xl font-medium hover:bg-sun-gold hover:text-night-ink transition"
          >
            Core Teachings
          </Link>
        </motion.div>
      </div>
    </section>
  );
}