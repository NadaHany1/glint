"use client";
import { useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div
      style={{
        width: "400px",
        height: "250px",
        margin: "40px auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <div key={i} style={{ minWidth: "100%" }}>
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              width={400}
              height={250}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
        }}
      >
        <button
          onClick={prev}
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          &#10094;
        </button>
        <button
          onClick={next}
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
