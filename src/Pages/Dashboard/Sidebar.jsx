import React, { useState } from "react";
import Container from "../../Component/Container/Container";
import { Link, NavLink } from "react-router-dom";
import { BsFillBookmarkCheckFill, BsFillBookmarkFill } from "react-icons/bs";
import { BiHistory, BiLogOut, BiSolidBook } from "react-icons/bi";
import useAuth from "../../Component/Hooks/useAuth";
import useSelected from "../../Component/Hooks/useSelected";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../../Component/Hooks/useAdmin";
import Spinner from "../../Component/Spinner/Spinner";
import useInstructor from "../../Component/Hooks/useInstructor";

const Sidebar = () => {
  const [bookData] = useSelected();
  const { user, logOut, loading, setLoading } = useAuth();

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  const activeLink = "text-pink-600 transition-colors duration-500";
  const handleLogout = () => {
    logOut().then();
  };
  if (loading || isAdminLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <Container>
      <div className="px-5 mb-8 mx-auto text-center">
        <img
          className="w-20 h-20 mx-auto rounded-full"
          src={user?.photoURL}
          alt=""
        />
        <h2 className="font-semibold pt-5 pb-2">{user?.displayName}</h2>
        {bookData.length > 1 && (
          <Link to="pay">
            <button className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md text-sm text-blue-900 font-medium">
              Pay Now
            </button>
          </Link>
        )}
      </div>
      <div>
        <ul className="items-center justify-center md:space-y-5 md:space-x-0">
          {isAdmin && (
            <>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="manage-user"
                >
                  <span className="flex items-center  gap-1 ">
                    <FaUsers className="w-5 h-7" />
                    Manage User
                  </span>
                </NavLink>
              </li>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="manage-class"
                >
                  <span className="flex items-center  gap-1 ">
                    <BiSolidBook className="w-5 h-7" /> Manage Class
                  </span>
                </NavLink>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="add-class"
                >
                  <span className="flex items-center  gap-1 ">
                    <FaUsers className="w-5 h-7" />
                    Add Class
                  </span>
                </NavLink>
              </li>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="my-class"
                >
                  <span className="flex items-center  gap-1 ">
                    <BiSolidBook className="w-5 h-7" /> My All Class
                  </span>
                </NavLink>
              </li>
            </>
          )}
          {!isAdmin && !isInstructor && (
            <>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="booked-course"
                >
                  <span className="flex items-center  gap-1 ">
                    <BsFillBookmarkCheckFill className="w-5 h-7" /> Booked
                    Course
                  </span>
                </NavLink>
              </li>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="enrolled-course"
                >
                  <span className="flex items-center  gap-1 ">
                    <BsFillBookmarkFill className="w-5 h-7" /> Enrolled Course
                  </span>
                </NavLink>
              </li>
              <li className="text-black hover:text-blue-600">
                <NavLink
                  className={({ isActive }) => (isActive ? activeLink : "")}
                  to="payment-history"
                >
                  <span className="flex items-center  gap-1 ">
                    <BiHistory className="w-5 h-7" /> Payment History
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <li className="text-black hover:text-blue-600">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="/"
            >
              <span className="flex gap-1 items-center" onClick={handleLogout}>
                <BiLogOut className="w-5 h-7" /> Logout
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
{
  /* <>
<li className="text-black hover:text-blue-600">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="booked-course"
            >
              <span className="flex items-center  gap-1 ">
                <BsFillBookmarkCheckFill className="w-5 h-7" /> Booked Course
              </span>
            </NavLink>
          </li>
          <li className="text-black hover:text-blue-600">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="enrolled-course"
            >
              <span className="flex items-center  gap-1 ">
                <BsFillBookmarkFill className="w-5 h-7" /> Enrolled Course
              </span>
            </NavLink>
          </li>
          <li className="text-black hover:text-blue-600">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="payment-history"
            >
              <span className="flex items-center  gap-1 ">
                <BiHistory className="w-5 h-7" /> Payment History
              </span>
            </NavLink>
          </li>
          <li className="text-black hover:text-blue-600">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="/"
            >
              <span className="flex gap-1 items-center" onClick={handleLogout}>
                <BiLogOut className="w-5 h-7" /> Logout
              </span>
            </NavLink>
          </li></> */
}
