import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {isEmpty} from "lodash"

const TopNav = () => {

    const user = useSelector(state => state.user);


    return (
        <nav>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <NavLink to="/"> صفحه اصلی </NavLink>
                            <NavLink to="/archive"> همه دوره ها </NavLink>
                            <NavLink to=""> تماس با ما </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="clientarea">
                        {!isEmpty(user) ? (
                            <div className="loggein ">
                                <i className="zmdi zmdi-account"/>
                                <NavLink to="/user-profile"> {user.fullname}
                                    آمدی </NavLink> /{" "}
                                {user.isAdmin ? (
                                    <NavLink to="/dashboard">ورود به پنل ادمین</NavLink>
                                ) : null}/{" "}
                                <NavLink to="/logout"> خروج </NavLink>
                            </div>
                        ) : (
                            <div className="signin ">
                                <i className="zmdi zmdi-account"/>
                                <NavLink to="/login"> ورود </NavLink> /
                                <NavLink to="/register"> عضویت </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;
