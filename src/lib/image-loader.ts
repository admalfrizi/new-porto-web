'use client'

export default function myLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (process.env.NODE_ENV === 'development') {
    return src;
  }

  return `${src}?w=${width}&q=${quality || 75}`;
}