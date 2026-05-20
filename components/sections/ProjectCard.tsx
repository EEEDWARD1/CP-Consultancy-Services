import Image from "next/image";

import { Card } from "@/components/ui/Card";

type ProjectCardProps = {
  title: string;
  image: string;
  alt: string;
  description: string;
};

export function ProjectCard({ title, image, alt, description }: ProjectCardProps) {
  return (
    <Card className="grid min-w-0 md:grid-cols-[minmax(240px,340px)_1fr]">
      <div className="relative min-h-56 overflow-hidden md:min-h-full">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 340px, 100vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="min-w-0 p-6 sm:p-8">
        <h3 className="border-b border-brand-accent pb-4 text-xl font-semibold text-brand-primary sm:text-2xl">
          {title}
        </h3>
        <p className="mt-5 font-body text-sm leading-7 text-brand-muted sm:text-base">{description}</p>
      </div>
    </Card>
  );
}
