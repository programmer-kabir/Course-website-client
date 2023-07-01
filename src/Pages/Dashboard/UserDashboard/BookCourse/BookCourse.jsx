import React from "react";
import useSelected from "../../../../Component/Hooks/useSelected";
import { FaRegEdit, FaUserAlt } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import img from "../../../../../public/Course/Untitled-1.png";

const BookCourse = () => {
  const [bookData] = useSelected();
//   console.log(bookData);

  return (
    <div className="grid grid-cols-3">
      {bookData.map((data) => (
        <div key={data._id}>
          <div className="mt-6">
            <img
              className="rounded-md relative w-[249px] h-[151px]"
              src={data.image}
              alt=""
            />
          </div>
          <img className="absolute w-36 -ml-1 -mt-[59px] " src={img} alt="" />

          <h2 className="text-lg mt-8 font-semibold px-2">{data.name}</h2>
          <div className="px-5 mt-2 flex items-center justify-between">
            <p className="flex items-center gap-1">
              <HiOutlineCurrencyDollar className="" />${data.price}
            </p>
            <p className="px-2 flex gap-1 ">
              {" "}
              <FaUserAlt /> {data.availableSits}
            </p>
          </div>
          <h4 className="px-2 flex pt-2 items-center gap-1 font-bold">
            <FaRegEdit className="h-5 w-5 font-bold" />
            {data.instructorName}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default BookCourse;
