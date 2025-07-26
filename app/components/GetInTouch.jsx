import React from 'react';
import Link from 'next/link';

const GetInTouch = () => {
  return (
    <section id="contact">
      <div className="px-4 sm:px-8 lg:px-16 py-12">
        <h1 className="heading text-center text-3xl sm:text-4xl font-bold mb-6">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>

        <p className="text-center font-sans py-4 text-base text-[#C1C2D3] max-w-2xl mx-auto">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>

        <div className="flex justify-center py-10">
          <Link href="#about">
            <div className="p-[3px] rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Let's Get In Touch
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-gray-700">
          <p className="text-xl py-5 text-white">
            Developed By Nahian Rafi
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
