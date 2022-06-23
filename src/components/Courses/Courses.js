import React from 'react';
import {Link} from "react-router-dom";
import Card from "../common/Card";

const Courses = ({courses}) => {
    return (
        <section className="terms-items">
            <header>
                <h2> آخرین دوره های تاپ لرن </h2>
                <Link to="/archive"> مشاهده همه دوره ها </Link>
            </header>
            <div className="row">
                {courses.map(course => <Card key={course._id} course={course} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"/>)}
            </div>
        </section>
    );
}

export default Courses;
