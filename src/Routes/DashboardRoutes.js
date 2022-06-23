import React from 'react';
import PrivateLayout from "../Layouts/PrivateLayout";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../components/Admin/Dashboard";
import {useSelector} from "react-redux";
import AdminCourses from "../components/Admin/AdminCourses";

const DashboardRoutes = () => {
    const courses = useSelector(state => state.courses);
    return (
        <PrivateLayout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard courses={courses}/>}/>
                <Route path="/dashboard/courses" element={<AdminCourses />}/>
            </Routes>
        </PrivateLayout>
    );
}

export default DashboardRoutes;
