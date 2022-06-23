import React, {Fragment} from 'react';
import CourseTable from "./CourseTable";
import {useSelector} from "react-redux";

const AdminCourses = () => {
    const courses = useSelector(state => state.courses);
    return (
        <Fragment>
            <div>
                <button className="btn btn-primary my-3 mx-5">اضافه کردن دوره جدید</button>
                <div className="col-4 mx-3">
                    <input type="text" className="form-control" id="search" placeholder="جستجوی دوره"/>
                </div>
            </div>
            <div className="text-center text-danger p-2">
                <CourseTable courses={courses}/>
            </div>
        </Fragment>
    );
}

export default AdminCourses;
