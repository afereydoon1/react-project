import React from 'react';
import {Link} from "react-router-dom";

const AdminSidebar = () => {

    return (
        <div>
            <ul className="nav navbar-nav side-nav" style={{ height: "100vh" }}>
                <li>
                    <Link to="/dashboard">
                        <i className="fa fa-fw fa-dashboard"/> داشبورد
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/courses">
                        <i className="fa fa-fw fa-graduation-cap"/> دوره ها
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default AdminSidebar;
