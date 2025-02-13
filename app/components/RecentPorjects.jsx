"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const RecentProjects = () => {
  return (
<section id="projects">
  <h1 className="heading">A small selection of {''} <span className="text-purple">recent projects</span></h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-rows-2 p-4 mt-10" id="#projects">

{projects.map(({ id, title, des, img, iconLists, link }) => (
  <div key={id} className="flex justify-center mt-20">
    <PinContainer title={title} href={link}>
      <div className="">
        <div className="flex flex-col items-center p-4 tracking-tight text-slate-100/50 w-[352px] h-[384px] xl:w-[450px] 2xl:w-[570px]  rounded-lg shadow-lg  bg-gray-900">
          {/* Project Image */}
          <div className="w-full h-40 rounded-lg ">
            <img
              src={img}
              alt={title}
              className="w-full h-[150%] object-cover"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mt-20">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-400 text-center mt-2">{des}</p>

          {/* Icons */}
          <div className="flex gap-x-10 mt-4">
            <div className="flex gap-x-2">
              {iconLists.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="icon"
                  className="w-6 h-6"
                />
              ))}
            </div>

            <div className="flex gap-x-2">
              <p className="text-base text-purple">Check Live Site</p>
              <FaArrowUpRightFromSquare className="mt-1 text-purple" />
            </div>
          </div>
        </div>
      </div>
    </PinContainer>
  </div>
))}
</div>
</section>
  );
};

export default RecentProjects;
