import { ImageSlideshow } from "@/components/sections/ImageSlideshow";
import { slideshowImages } from "@/lib/content";

export function PageBanner() {
  return (
    <section
      aria-label="Project image slideshow"
      className="pointer-events-none relative h-[34svh] min-h-60 w-full overflow-hidden"
    >
      <ImageSlideshow images={slideshowImages} className="h-full w-full" overlay priority />
    </section>
  );
}
