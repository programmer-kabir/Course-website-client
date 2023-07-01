import React from "react";
import useLength from "../../../Component/Hooks/useCourseLength";
import Container from "../../../Component/Container/Container";
import { MdEmail } from "react-icons/md";
const PopularInstructor = () => {
  const [coursesToShow] = useLength();
  return (
    <Container>
      <div>
        <div className="mt-16 font-bold  text-3xl text-center">
          <h2>Popular Course</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-5">
        {coursesToShow.map((data) => (
            <div key={data._id} className="max-w-sm rounded overflow-hidden">
              <img
                className="rounded-md mx-auto lg:h-52 p-5"
                src={data.instructorImage}
                alt="Instructor Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="flex items-center text-lg">
                 <MdEmail />
                 {data.instructorEmail}
                </p>
              </div>
            </div>
        ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularInstructor;
