import React from 'react';

const PopularCourses = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    console.log(data);
    
    return (
        <div>
            <h2 className='text-4xl font-semibold my-8 text-center'>Popular Courses</h2>
        </div>
    );
};

export default PopularCourses;