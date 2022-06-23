import React from 'react';
import AppRoutes from "../Routes/AppRoutes";
import {useRoutes} from "react-router-dom";
import Archive from "../components/Courses/Archive";
import Login from "../components/auth/Login/Login";
import Logout from "../components/auth/Login/Logout";
import Register from "../components/auth/Register/Register";
import UserProfile from "../components/profile/UserProfile";
import SingleCourse from "../components/Courses/SingleCourse";
import NotFound from "../components/common/NotFound";
import DashboardRoutes from "../Routes/DashboardRoutes";
import Dashboard from "../components/Admin/Dashboard";
import AdminCourses from "../components/Admin/AdminCourses";


const RouteComponent = () => {


    const element = useRoutes([
        {
            path: "/",
            element: <AppRoutes/>,
            children: [
                {path: "login", element: <Login/>},
                {path: "logout", element: <Logout/>},
                {path: "register", element: <Register/>},
                {path: "user-profile", element: <UserProfile/>},
                {path: "single-course/:id", element: <SingleCourse/>},
                // {path:"/",element:<Courses/>},
                {path: "archive", element: <Archive/>},
                {path: "*", element: <NotFound/>},
            ]
        },
        {
            path: "/dashboard",
            element: <DashboardRoutes/>,
            children: [
                {path: "home", element: <Dashboard/>},
                {path: "courses", element: <AdminCourses/>},
            ]
        }
    ]);
    return element;
}

export default RouteComponent;
