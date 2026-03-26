"use client";
import { testimonials } from "constants/testimonials";
import React from "react";
import { BlurImage } from "./BlurImage";

type Testimonial = {
  name: string;
  content: string;
  designation?: string;
  avatar?: string;
};
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

      <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 mt-20">
        {testimonials.map((testimonial: Testimonial, idx: number) => (
          <>
            <TestimonialCard key={`testimonial-${idx}`} {...testimonial} />
          </>
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
}: Testimonial) => {
  return (
    <div className="bg-white shadow-lg px-8 py-12 rounded-xl border border-gray-200 flex-1 mb-8">
      <p className="text-xl md:text-2xl font-normal text-black leading-relaxed">
        {content}
      </p>

      <div className="flex flex-row space-x-2 mt-8">
        <BlurImage
          src={avatar}
          height="40"
          width="40"
          className="rounded-full border border-gray-200"
        />

        <div className="flex flex-col">
          <p className="text-sm text-black font-medium">{name}</p>
          <p className="text-xs text-gray-600">{designation}</p>
        </div>
      </div>
    </div>
  );
};
