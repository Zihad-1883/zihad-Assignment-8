"use client"
import React, { useState } from 'react';
import courses from '@/data/data.json';
import CourseCard from '@/components/CourseCard';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Check } from '@gravity-ui/icons';

const CoursesPage = () => {

    const [filteredCourses , setFilteredCourses] = useState([])
    const [allCourses , setAllCourses] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value
        // console.log(searchValue);
        const course =  courses.filter(c => c.title.toLowerCase().includes(searchValue));
        setFilteredCourses(course);
        // console.log(filteredCourses)
    }


    
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold text-center my-6'>All Courses</h1>
            <div className='flex justify-center items-center my-5 gap-1'>
                <Form onSubmit={onSubmit} className='flex items-center gap-4'>
                    <TextField name="search" type="text">
                        <Label></Label>
                              <Input placeholder="Search For Course" />
                              <FieldError />
                            </TextField>
                 <Button type="submit">
                    <Check />
                    Search
                </Button>
                </Form>
            </div>
           {filteredCourses.length === 0 ?
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14'>
                {courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
            </div> :
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14'>
                {filteredCourses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
            </div>}
        </div>
    );
};

export default CoursesPage;