import Image from 'next/image';

interface ImageGalleryProps {
  images: { src: string; alt?: string }[];
}
export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={img.src}
            alt={img.alt || 'Property image'}
            fill
            className="object-cover hover:scale-105 transition-transform"
            sizes="(max-width:768px) 50vw, 33vw"
            priority={i < 2}
          />
        </div>
      ))}
    </div>
  );
}
