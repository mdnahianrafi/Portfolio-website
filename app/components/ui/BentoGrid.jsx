"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradient";
import { IoMdMailUnread } from "react-icons/io";

import { useState } from "react";
import { Globe } from "./GridGlobe";



export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-7 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}) => {
  // ✅ Move state and function inside BentoGridItem
  const [copied, setCopied] = useState(false);
  const email = "mdnahianrafi2000@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div
      className={cn(
        "bg-black-100 relative row-span-1 rounded-xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {img && (
        <Image
          src={img}
          alt="img.png"
          width={400}
          height={400}
          className={cn(imgClassName, "object-center object-cover")}
        />
      )}

      {id === 6 && (
        <div className="">
          <div className="absolute z-50 items-center top-1/3 left-1/4 md:top-1/2 md:left-0 lg:left-[28%] lg:top-[45%]">
          <button
    onClick={(e) => {
      e.preventDefault(); // Prevents page reload
      copyToClipboard();
    }}
    className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    style={{
      animation: "shimmer 2s linear infinite",
      backgroundSize: "200% 100%",
    }}
  >
    <IoMdMailUnread className="pr-1 lg:text-xl md:text-base" />
    {copied ? "Mail Copied!" : "Send Me A Mail"}
  </button>

          </div>

          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(108, 0, 162)"
            gradientBackgroundEnd="rgb(0, 17, 82)"
            firstColor="18, 113, 255"
            secondColor="221, 74, 255"
            thirdColor="100, 220, 255"
            fourthColor="200, 50, 50"
            fifthColor="180, 180, 50"
            pointerColor="140, 100, 255"
            size="80%"
            blendingValue="hard-light"
            interactive={true}
            containerClassName="w-full h-full absolute inset-0"
          />
        </div>
      )}

      
{id===2 && (
        <Globe baseColor={[0, 0, 1]}  className="absolute -top-12 md:top-32  lg:top-36 lg:-left-1 xl:top-16 xl:left-5 "/>

      )}

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div
          className={`${titleClassName} font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2`}
        >
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
       
      </div>
    </div>
  );
};
