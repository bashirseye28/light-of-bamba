'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="bg-parchment text-night-ink py-28 px-6 sm:px-10 lg:px-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading text-sage-green mb-6 tracking-wide">
            About This App
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed font-body text-night-ink/90">
            <span className="block mb-4">“The Light of Shaykh Ahmadu Bamba” is a beautifully designed educational web app dedicated to teaching the noble biography, teachings, and values of the Shaykh to new generations.</span>
            <span className="block">Crafted for children, teens, and newcomers in the diaspora, it transforms traditional learning into an accessible, spiritual, and engaging experience.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-desert-beige"
        >
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1750156351/9434558_12702_coz9ck.jpg"
            alt="About Illustration"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-parchment/70 to-parchment/40 blur-3xl opacity-20" />
    </section>
  );
}