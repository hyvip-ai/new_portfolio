import Image from 'next/image';
import React, { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface BlurImageProps {
  height?: number;
  width?: number;
  src: string;
  alt: string;
  layout: 'fixed' | 'fill' | 'intrinsic' | 'responsive';
  priority?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain';
}

function BlurImage(props: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
      priority={props.priority}
      layout={props.layout}
      objectFit={props.objectFit || 'cover'}
      className={cn(
        props.className,
        'duration-700 ease-in-out',
        isLoading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;
