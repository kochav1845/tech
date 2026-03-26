"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";
import { BsArrowRightCircle } from "react-icons/bs";

type Package = {
  title: string;
  description: string;
  monthly: number;
  yearly: number;
  features: string[];
  className?: string;
  type?: string;
  highlight?: boolean;
};

export const Pricing = () => {
  const [type, setType] = useState<"monthly" | "yearly">("monthly");
  const packages = {
    starter: {
      title: "Starter",
      description: "Perfect for small businesses",
      monthly: 49,
      yearly: 499,
      features: [
        "Up to 5 users",
        "Core CRM features",
        "Basic reporting",
        "1,000 customer contacts",
        "5GB storage",
        "Email support",
        "Mobile app access",
      ],
    },
    pro: {
      title: "Professional",
      description: "For growing businesses",
      monthly: 149,
      yearly: 1490,
      features: [
        "Up to 25 users",
        "Full CRM & ERP suite",
        "Advanced analytics",
        "Unlimited contacts",
        "50GB storage",
        "API access",
        "Workflow automation",
        "Priority support",
        "Custom integrations",
      ],
    },
    king: {
      monthly: 399,
      yearly: 3990,
      title: "Enterprise",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Complete CRM & ERP platform",
        "Advanced AI insights",
        "Unlimited everything",
        "Dedicated account manager",
        "Custom development",
        "24/7 phone support",
        "SLA guarantees",
      ],
    },
  };
  return (
    <div
      id="pricing"
      className="min-h-[40rem] px-4 bg-white py-20 md:py-40 relative group overflow-hidden"
    >
      <div className="max-w-xl md:mx-auto md:text-center xl:max-w-none relative z-10">
        <h2 className="font-display text-3xl tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
          Transparent pricing that scales with you
        </h2>
        <p className="mt-6 text-lg tracking-tight  text-zinc-600">
          Choose the plan that fits your business needs. All plans include a 14-day free trial with no credit card required.
        </p>
      </div>
      <div className="mx-auto flex-row space-x-2 justify-center items-center border rounded-3xl border-gray-100 flex mt-20 overflow-hidden w-fit">
        <button
          className={twMerge(
            "text-sm px-4 py-2 inline-flex relative",
            type === "monthly" && "bg-gray-50"
          )}
          onClick={() => setType("monthly")}
        >
          Monthly
          {type === "monthly" && (
            <motion.span
              animate={{ x: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 h-px inset-x-0 bg-gradient-to-r from-primary to-indigo-500 blur-[1px] z-50  mx-auto"
            ></motion.span>
          )}
        </button>
        <button
          className={twMerge(
            "text-sm px-4 py-2 inline-flex relative",
            type === "yearly" && "bg-gray-50"
          )}
          onClick={() => setType("yearly")}
        >
          Yearly
          {type === "yearly" && (
            <motion.span
              // animate  little
              animate={{ x: 10 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 h-px inset-x-0 bg-gradient-to-r from-primary to-indigo-500 blur-[1px] z-50  mx-auto"
            ></motion.span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">
        <PricingCard {...packages.starter} type={type} />
        <PricingCard {...packages.pro} type={type} highlight />
        <PricingCard {...packages.king} type={type} />
      </div>
    </div>
  );
};

const PricingCard = (props: Package) => {
  const {
    title,
    description,
    monthly,
    yearly,
    features,
    className,
    type,
    highlight,
  } = props;
  return (
    <div
      className={twMerge(
        "bg-white  rounded-2xl  px-8 py-12 relative",
        highlight && "bg-primary",
        className
      )}
    >
      <h3
        className={twMerge(
          "leading-6 font-medium text-gray-900 text-2xl",
          highlight && "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={twMerge(
          "mt-4 text-sm text-gray-500",
          highlight && "text-white"
        )}
      >
        {description}
      </p>
      <p className="mt-8">
        <span
          className={twMerge(
            "text-5xl font-extrabold text-gray-900",
            highlight && "text-white"
          )}
        >
          ${type === "monthly" ? monthly : yearly}
        </span>
        <span
          className={twMerge(
            "text-base font-medium text-gray-500",
            highlight && "text-white"
          )}
        >
          {type === "monthly" ? "/mo" : "/yr"}
        </span>
      </p>
      <Button
        as="button"
        variant="large"
        className="rounded-2xl py-2 w-full mt-8"
      >
        <Link href="/signup">Get Started</Link>
      </Button>
      <div className="mt-8">
        <ul className="mt-6 space-y-4 relative">
          {!highlight && (
            <div className="absolute w-px h-[90%] inset-y-4 bg-gray-200 left-2" />
          )}
          {features.map((feature) => (
            <li key={feature} className="flex items-center relative z-10">
              <div className="flex-shrink-0">
                <BsArrowRightCircle
                  className={twMerge(
                    "text-gray-500 bg-white",
                    highlight && "text-white bg-transparent"
                  )}
                />
              </div>
              <p
                className={twMerge(
                  "ml-3 text-sm text-gray-600",
                  highlight && "text-white"
                )}
              >
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
