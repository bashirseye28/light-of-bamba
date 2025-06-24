'use client';

import { motion } from 'framer-motion';

export default function QuoteBanner() {
  return (
    <section className="bg-sufi-teal text-parchment py-24 px-6 sm:px-10 lg:px-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-8 text-7xl text-sun-gold font-serif"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
          >
            ❝
          </motion.div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-heading italic leading-relaxed tracking-wide">
            “The one who devotes his life to Allah does not worry about the future.”
          </blockquote>

          <motion.cite
            className="block mt-6 text-lg sm:text-xl font-body text-desert-beige"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            — Shaykh Ahmadu Bamba
          </motion.cite>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-sufi-teal/80 to-sufi-teal/30 opacity-20 blur-3xl z-0"></div>
    </section>
  );
}