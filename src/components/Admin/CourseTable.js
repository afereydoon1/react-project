import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import Pagination from "../common/Pagination";
import {paginate} from "../../Utils/paginate";

const CourseTable = ({courses}) => {

    const [currentPage,setCurrentPage] = useState(1);
    const [perPage] = useState(5);

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    const courseData = paginate(courses,currentPage,perPage);

    return (
        <Fragment>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">عنوان دوره</th>
                    <th scope="col">تصویر دوره</th>
                    <th scope="col">قیمت دوره</th>
                    <th scope="col">عملیات</th>
                </tr>
                </thead>
                <tbody>
                {courseData.map((course, index) => (

                    <tr key={index}>
                        <th scope="row">{index += 1}</th>
                        <td>{course.title}</td>
                        <td>
                            <Link to={`/single-course/${course._id}`} className="img-layer"><img
                                src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} height={50}
                                width={70}/></Link>
                        </td>
                        <td>{course.price === 0 ? 'رایگان' : course.price}</td>
                        <td>
                            <button className="btn btn-danger mx-2"><i className="fa fa-trash"/></button>
                            <button className="btn btn-primary mx-2"><i className="fa fa-edit"/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <Pagination
                    totalCourses={courses.length}
                    currentPage={currentPage}
                    perPage={perPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </Fragment>
    );
}

export default CourseTable;
