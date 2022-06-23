import React from 'react';
import {Link} from "react-router-dom";

const Card = ({course, className}) => {
    return (
        <div key={course._id} className={className}>
            <article>
                <Link to={`/single-course/${course._id}`} className="img-layer"><img
                    src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}/></Link>
                <h2><Link to={`/single-course/${course._id}`}>{course.title}</Link></h2>
                <span> {course.price} </span>
                <i>1:52:32</i>
            </article>
        </div>
    );
}

export default Card;
