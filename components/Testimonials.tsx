"use client";
import { testimonials } from "constants/testimonials";
import React from "react";
import { BlurImage } from "./BlurImage";
import { WobbleCard } from "./ui/wobble-card";

type Testimonial = {
  name: string;
  content: string;
  designation?: string;
  avatar?: string;
};

const cardColors = [
  "bg-blue-900",
  "bg-emerald-800",
  "bg-slate-800",
  "bg-teal-900",
  "bg-cyan-900",
  "bg-sky-900",
];

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="px-4 bg-gray-50 py-20 md:py-40 relative group overflow-hidden"
    >
      <div className="max-w-xl md:mx-auto md:text-center xl:max-w-none relative z-10">
        <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
          See what our users say about us
        </h2>
        <p className="mt-6 text-lg tracking-tight text-gray-800">
          Trusted by thousands of businesses worldwide who have transformed their operations with our CRM and ERP platform.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {testimonials.map((testimonial: Testimonial, idx: number) => (
          <TestimonialCard
            key={`testimonial-${idx}`}
            {...testimonial}
            colorClass={cardColors[idx % cardColors.length]}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({
  name,
  content,
  designation,
  avatar,
  colorClass,
}: Testimonial & { colorClass: string }) => {
  return (
    <WobbleCard containerClassName={`min-h-[320px] ${colorClass}`}>
      <div className="flex flex-col h-full justify-between">
        <p className="text-base md:text-lg font-normal text-white/90 leading-relaxed">
          "{content}"
        </p>

        <div className="flex flex-row space-x-3 mt-6">
          <BlurImage
            src={avatar}
            height="48"
            width="48"
            className="rounded-full border-2 border-white/20"
          />

          <div className="flex flex-col justify-center">
            <p className="text-sm text-white font-semibold">{name}</p>
            <p className="text-xs text-white/70">{designation}</p>
          </div>
        </div>
      </div>
    </WobbleCard>
  );
};
