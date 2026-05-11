"use client";

import { storyDeck } from "@/lib/products";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StorySlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % storyDeck.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-brand-ink/10 bg-brand-cream-deep shadow-brand-card">
      <AnimatePresence mode="sync">
        <motion.div
          key={storyDeck[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={storyDeck[index].image}
            alt={storyDeck[index].label}
            fill
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] flex items-end justify-between bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent p-6">
        <div className="text-brand-cream">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-cream/70">
            {storyDeck[index].sub}
          </p>
          <p className="mt-1 font-display text-2xl leading-tight">
            {storyDeck[index].label}
          </p>
        </div>

        <div className="pointer-events-auto flex gap-1.5">
          {storyDeck.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-brand-cream"
                  : "w-1.5 bg-brand-cream/40 hover:bg-brand-cream/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
