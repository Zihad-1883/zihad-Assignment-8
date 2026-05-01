import Image from 'next/image';
import React from 'react';
import BannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-50 to-pink-100 px-8 md:px-14 py-10 md:py-14">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
            <div className="flex-1">
                <span className="inline-block bg-white/70 text-indigo-700 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                    Online Learning
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
                    Upgrade Your Skills Today{" "}
                    <span className="text-pink-500">🚀</span>
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-md">
                        Learn from Industry Experts. Unlock your potential with our
                        curated courses designed for modern professionals and lifelong
                        learners.
                    </p>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200">
                    Start Learning Now
                        </button>
                <div className="flex gap-6 mt-6 flex-wrap">
                    <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">200+</span>
                    <span className="text-xs text-gray-500">Courses</span>
                    </div>
                    <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">50k+</span>
                    <span className="text-xs text-gray-500">Students</span>
                    </div>
                    <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">4.9★</span>
                    <span className="text-xs text-gray-500">Rating</span>
                    </div>
                </div>
            </div>

        <div className="w-full md:w-[320px] rounded-md overflow-hidden bg-white/50 flex items-center justify-center">
          <Image src={BannerImage} alt='BannerImage'></Image>
        </div>

            </div>
        </div>
    );
};

export default Banner;