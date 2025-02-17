"use client";

import Image from "next/image";
import { useState } from "react";

export function SkelectonImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative" style={{ width, height }}>
      {loading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
