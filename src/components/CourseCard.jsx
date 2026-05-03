import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({course}) => {
    // console.log(course.id);
    
    return (
        <div className='rounded-lg border-2 border-pink-600 p-5'>
            <div className='relative w-full h-48'>
                <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-cover rounded-lg' ></Image>
            </div>
            <div className='space-y-1 mt-3'>
                <h5 className='text-2xl font-semibold mt-4'>{course.title}</h5>
                <h5 className='text-xl font-medium'>Instructor : {course.instructor}</h5>
                <h5 className='text-xl font-medium'>Rating : {course.rating}</h5>
                <button className='block btn btn-soft btn-secondary w-full mt-3'><Link className='block' href={`/courses/${course.id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default CourseCard;