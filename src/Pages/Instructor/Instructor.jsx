import React from 'react';
import useCourse from '../../Component/Hooks/useCourse';
import Container from '../../Component/Container/Container';
import { MdEmail } from "react-icons/md";

const Instructor = () => {
    const [course] = useCourse()
    console.log(course);
    return (
        <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
            {
                course.map(data => <div key={data._id}>
                    <div className='mb-16'>
                        <img className='w-28 h-28 rounded-full mx-auto' src={data.instructorImage} alt="" />
                    </div>
                    <div>
                        <p>{data.instructorName}</p>

                        <p className='flex gap-1 items-center '> <MdEmail className='h-5 w-5'/> {data.instructorEmail}</p>
                    </div>
                    <button className='mt-3 border-2 border-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-500 mx-auto rounded-full px-4 normal-case'>View Course</button>
                </div>)
            }
        </div>
        </Container>
    );
};

export default Instructor;