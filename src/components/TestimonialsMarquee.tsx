import React from "react";

const testimonials = [
  {
    quote:
      "Abhimat elevated our campaign film with precise pacing and rich color. The final cut exceeded expectations.",
    name: "Riya Sharma",
    role: "Brand Manager",
  },
  {
    quote:
      "Clean storytelling and powerful transitions. Our YouTube audience retention jumped immediately.",
    name: "Arjun Mehta",
    role: "Creator",
  },
  {
    quote:
      "Sound design was on point—dialogue, effects, and music blended seamlessly for impact.",
    name: "Neha Verma",
    role: "Producer",
  },
];

const Card: React.FC<{ quote: string; name: string; role: string }>= ({ quote, name, role }) => (
  <figure className="glass-surface border rounded-lg p-6 w-80 shrink-0">
    <blockquote className="text-sm md:text-base">“{quote}”</blockquote>
    <figcaption className="mt-4 text-xs md:text-sm text-muted-foreground">
      — {name}, {role}
    </figcaption>
  </figure>
);

const TestimonialsMarquee: React.FC = () => {
  const loop = [...testimonials, ...testimonials, ...testimonials];
  return (
    <div role="region" aria-label="Testimonials" className="overflow-hidden">
      <div className="flex gap-4 w-max animate-marquee will-change-transform">
        {loop.map((t, i) => (
          <Card key={`t-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
