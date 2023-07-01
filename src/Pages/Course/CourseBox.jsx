import React from "react";
import { FaRegBookmark, FaRegEdit, FaUserAlt } from "react-icons/fa";
import {
  HiOutlineCurrencyDollar,
 
} from "react-icons/hi2";
import img from '../../../public/Course/Untitled-1.png';
import useAuth from "../../Component/Hooks/useAuth";

const CourseBox = ({ data }) => {
  const {user} = useAuth()
  // console.log(data);
  const handleBook = data =>{
    // console.log(data);
    const saveData = {id:data._id,availableSits:data.availableSits, image:data.image, instructorName:data.instructorName, name:data.name, price:data.price, ratting:data.ratting, email:user.email }
    // console.log(saveData);
    fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/book`,{
      method:'POST', 
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(saveData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  
  }
  return (
    <div className="">
      <div>
        <img className="rounded-md relative w-[249px] h-[151px]" src={data.image} alt="" />
      </div>
        <img className="absolute w-36 -ml-1 -mt-[59px] " src={img} alt="" />
      <button onClick={()=>handleBook(data)} className="flex gap-1 absolute -mt-10 z-50  items-center font-bold border-2 border-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-500 rounded-full px-5 pt-1 normal-case"><FaRegBookmark />Book</button>
      <h2 className="text-lg mt-8 font-semibold px-2">{data.name}</h2>
      <div className="px-2 mt-2 flex items-center justify-between">
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
  );
};

export default CourseBox;
