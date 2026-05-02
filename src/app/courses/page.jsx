import React from 'react';
import courses from '@/data/data.json';
import CourseCard from '@/components/CourseCard';

const CoursesPage = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold text-center my-6'>All Courses</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14'>
                {courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
            </div>
        </div>
    );
};

export default CoursesPage;