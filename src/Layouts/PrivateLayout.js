import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import AdminTopNav from "../components/Admin/AdminTopNav";
import AdminSidebar from "../components/Admin/AdminSidebar";
import {useSelector} from "react-redux";


const PrivateLayout = ({children}) => {
    const user = useSelector(state => state.user);

    return (
        <div id="wrapper">
            <Helmet>
                <title>تاپلرن | داشبورد</title>
            </Helmet>
            <nav
                className="navbar navbar-inverse navbar-fixed-top"
                role="navigation"
            >
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/dashboard">
                        داشبورد تاپلرن
                    </Link>
                </div>

                <AdminTopNav user={user} />

                <AdminSidebar />
            </nav>
            <div id="page-wrapper">
                {children}
            </div>
        </div>
    );
}

export default PrivateLayout;
