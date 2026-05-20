"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
};

type ImageSlideshowProps = {
  images: Slide[];
  className?: string;
  overlay?: boolean;
  priority?: boolean;
};

export function ImageSlideshow({
  images,
  className,
  overlay = false,
  priority = false
}: ImageSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className={cn("relative overflow-hidden bg-brand-primary", className)}>
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={priority && index === 0}
          loading={priority && index === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className={cn(
            "pointer-events-none select-none object-cover object-center transition-opacity duration-1000",
            index === activeIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      {overlay ? (
        <div className="pointer-events-none absolute inset-0 bg-brand-primary/55" />
      ) : null}
    </div>
  );
}
