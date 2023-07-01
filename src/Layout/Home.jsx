import React from "react";
import Banner from "../Pages/Home/Banner/Banner";
import Header from "../Pages/Shared/Header/Header";
import PopularClass from "../Pages/Home/PopularClass/PopularClass";
import PopularInstructor from "../Pages/Home/PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <PopularClass></PopularClass>
        <PopularInstructor />
    </div>
  );
};

export default Home;
