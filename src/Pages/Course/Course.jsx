import React from 'react';
import CourseBox from './CourseBox';
import useCourse from '../../Component/Hooks/useCourse';
import Container from '../../Component/Container/Container';

const Course = () => {
    const [course] = useCourse()
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
                {
                    course.map(data => <CourseBox data={data} key={data._id}/>)
                }
            </div>
        </Container>
    );
};

export default Course;