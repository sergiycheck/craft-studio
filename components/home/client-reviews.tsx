"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const images = [
  "/images/home/clients/client1.png",
  "/images/home/clients/client2.png",
  "/images/home/clients/client3.png",
  "/images/home/clients/client4.png",
];

export function ClientReviews() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative">
      <h2 className="h2 text-center">Clients reviews</h2>

      {images.map((imageSrc, index) => (
        <ClientReview key={index} imageSrc={imageSrc} />
      ))}
    </div>
  );
}

function ClientReview({ imageSrc }: { imageSrc: string }) {
  const secondColumnRef = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(secondColumnRef, { once: true });

  return (
    <div className="grid grid-cols-2 relative gap-4">
      <div className="flex items-center justify-center">
        <motion.div
          className="sticky top-20 w-[200px] h-auto overflow-hidden "
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <motion.img src={imageSrc} className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div
        className="flex flex-col gap-4"
        ref={secondColumnRef}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex flex-col h-[400px] justify-center items-center">
          <p className="text-lg">
            Craft studio transformed our business. We didn't know that a website could be so easy to use and look so
            good.
          </p>
          <p className="text-lg text-center">- John Doe</p>
          <p className="text-lg text-gray-400 text-center">CEO of Acme Inc.</p>
        </div>
      </div>
    </div>
  );
}
