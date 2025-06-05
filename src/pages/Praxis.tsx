import React from "react";

const images = [
  "DSA02492.jpg",
  "DSA02437.jpg",
  "DSA02641.jpg",
  "DSA02791.jpg",
  "DSE08959.jpg",
  "DSE08932.jpg",
  "DSE08921.jpg",
  "DSE08890.jpg",
  "DSE08861.jpg",
  "DSE08880.jpg",
  "DSE08825.jpg",
  "DSE08785.jpg",
  "DSE08672.jpg",
  "DSE08701.jpg",
  "DSA02192.jpg",
  "DSA02377.jpg",
  "DSA02836.jpg",
  "DSA02807.jpg",
  "DSA02796.jpg",
  "DSA02723.jpg",
  "DSA02728.jpg",
];

export default function Praxis() {
  return (
    <div className="bg-white min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Einblicke in unsere Praxis
      </h1>
      <div className="mx-auto max-w-6xl px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div
              key={img}
              className="break-inside-avoid overflow-hidden rounded-xl shadow transition-transform duration-300 hover:scale-105"
            >
              <img
                src={`/images/praxis/${img}`}
                alt="Praxis Impression"
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
