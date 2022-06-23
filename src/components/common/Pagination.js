import React from 'react';

import {range} from "lodash";

const Pagination = ({totalCourses, currentPage, perPage, onPageChange}) => {

    const pageCount = Math.ceil(totalCourses / perPage);
    if (pageCount === 1) return null;
    const pages = range(1, pageCount + 1);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}><a
                        className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
