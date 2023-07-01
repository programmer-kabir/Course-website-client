import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Instructor from "../Pages/Instructor/Instructor";
import Course from "../Pages/Course/Course";
import Register from "../Pages/Authentication/Register/Register";
import Login from "../Pages/Authentication/Login/Login";
import Dashboard from "../Layout/Dashboard";
import BookCourse from "../Pages/Dashboard/UserDashboard/BookCourse/BookCourse";
import EnrollCourse from "../Pages/Dashboard/UserDashboard/EnrollCourse/EnrollCourse";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistroy";
import Payment from "../Pages/Dashboard/UserDashboard/Payment/Payment";
import ManageClass from "../Pages/Dashboard/AdminPanel/ManageClass/ManageClass";
import ManageUser from "../Pages/Dashboard/AdminPanel/ManageUser/ManageUser";
import ShowMyClass from "../Pages/Dashboard/Instructor/ShowMyClass/ShowMyClass";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/instructor",
                element:<Instructor />
            },
            {
                path:"/course",
                element:<Course />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/sign-up",
                element:<Register />
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/booked-course',
                element: <BookCourse />
            },
            {
                path: '/dashboard/enrolled-course',
                element: <EnrollCourse />
            },
            {
                path: '/dashboard/payment-history',
                element: <PaymentHistory />
            },
            {
                path: '/dashboard/pay',
                element: <Payment />
            },
            {
                path: '/dashboard/manage-user',
                element: <ManageUser />
            },
            {
                path: '/dashboard/manage-class',
                element: <ManageClass />
            },
            {
                path: '/dashboard/add-class',
                element: <AddClass />
            },
            {
                path: '/dashboard/my-class',
                element: <ShowMyClass />
            }
        ]
    }
    
    
])

export default router;