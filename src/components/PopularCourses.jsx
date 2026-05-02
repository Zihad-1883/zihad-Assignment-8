import React from 'react';
import courses from '@/data/data.json';
import CourseCard from './CourseCard';


const PopularCourses = async () => {
//   console.log('courses' , courses);
     const topCourses = [...courses]
        .sort((a,b) => b.rating - a.rating)
        .slice(0,3)

        console.log(topCourses);
        

    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-4xl font-semibold my-10 text-center'>Popular Courses</h2>
            <div className='grid grid-cols-3 text-center gap-4 mb-10'>
                {topCourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
            </div>
        </div>
    );
};

export default PopularCourses;