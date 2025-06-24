'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Resend/Mailchimp backend
    setSubmitted(true);
  };

  return (
    <section className="bg-sufi-teal text-parchment py-20 px-6 sm:px-10 lg:px-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-heading mb-4"
        >
          Stay Connected
        </motion.h2>

        <p className="text-lg font-body mb-8">
          Receive new lessons, reflections, and updates on Shaykh Bamba’s teachings.
        </p>

        {submitted ? (
          <p className="text-lg font-body text-desert-beige">Thank you! You're now subscribed.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 rounded-lg text-night-ink bg-parchment placeholder:text-night-ink/60 focus:outline-none focus:ring-2 focus:ring-sun-gold"
            />
            <button
              type="submit"
              className="bg-sun-gold text-night-ink font-semibold px-6 py-3 rounded-lg hover:bg-garden-green transition-all hover:text-parchment"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}