'use client';

import Link from 'next/link';
import { Book, HeartHandshake, Map, PenLine } from 'lucide-react';

const features = [
  {
    name: 'Lessons',
    description: '25 spiritual lessons on his life and legacy.',
    icon: Book,
    href: '/lessons',
  },
  {
    name: 'Teachings',
    description: 'Core Murid values and moral principles.',
    icon: HeartHandshake,
    href: '/teachings',
  },
  {
    name: 'Places',
    description: 'Visit sacred Murid locations around the world.',
    icon: Map,
    href: '/places',
  },
  {
    name: 'Articles',
    description: 'Essays exploring spiritual and historical themes.',
    icon: PenLine,
    href: '/articles',
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-desert-beige py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((feature) => (
          <Link
            key={feature.name}
            href={feature.href}
            className="bg-parchment p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-desert-beige hover:border-sufi-teal"
          >
            <div className="flex items-center space-x-4 mb-3">
              <feature.icon className="h-6 w-6 text-sufi-teal" />
              <h3 className="font-heading text-xl text-sage-green font-semibold">{feature.name}</h3>
            </div>
            <p className="text-night-ink text-sm leading-relaxed">{feature.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}