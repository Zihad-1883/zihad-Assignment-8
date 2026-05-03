import React from 'react';
import courses from '@/data/data.json';
import Image from 'next/image';
import { FaGraduationCap, FaStar } from 'react-icons/fa';
import { IoPeople } from "react-icons/io5";

const CourseDetailsPage = async({params}) => {
   const {id} = await params;
    //console.log(id);
    // console.log(courses);
    const course = courses.find(c => c.id == id);
    // console.log(course)
    
    
       return (
        <div className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                            {course.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm shrink-0">
                                    {course.instructor.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{course.instructor}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Senior {course.category} Developer
                                    </p>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span className="text-yellow-400">⭐</span>
                                <span className="font-semibold">{course.rating}</span>
                                <span className="text-gray-400">(2.4k reviews)</span>
                            </div>

                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span>⏱️</span>
                                <span>{course.duration}</span>
                            </div>

                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span>📊</span>
                                <span>{course.level}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 66vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition"></div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            About this course
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {course.description}
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            What you&apos;ll learn
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Build real-world projects from scratch",
                                "Understand core concepts deeply",
                                "Write clean, professional code",
                                "Deploy applications to production",
                                "Work with modern tools & libraries",
                                "Follow industry best practices",
                                "Debug and solve problems efficiently",
                                "Build a strong developer portfolio",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-5">
                            Your Instructor
                        </h2>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl font-bold shrink-0">
                                {course.instructor.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">{course.instructor}</h3>
                                <p className="text-sm text-gray-500">{course.category} Expert & Educator</p>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                                    <span><FaStar></FaStar> {course.rating} Rating</span>
                                    <span>·</span>
                                    <span><IoPeople /> 12k Students</span>
                                    <span>·</span>
                                    <span><FaGraduationCap /> 8 Courses</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            A passionate educator with years of industry experience, dedicated to helping students master real-world skills through practical, project-based learning. Known for breaking down complex concepts into simple, actionable steps.
                        </p>
                    </div>

                </div>

                <div className="w-full">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                        <div className="relative w-full h-44">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                sizes="320px"
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <div className="text-3xl font-bold text-gray-900 mb-1">Free</div>
                            <p className="text-xs text-gray-400 mb-4">Full lifetime access included</p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-sm mb-3">
                                Enroll Now
                            </button>
                            <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition text-sm">
                                Add to Wishlist
                            </button>

                            <div className="mt-5 border-t pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Level</span>
                                    <span className="font-medium text-gray-700">{course.level}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Duration</span>
                                    <span className="font-medium text-gray-700">{course.duration}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Category</span>
                                    <span className="font-medium text-gray-700">{course.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetailsPage;