import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {clearUser} from "../../../Redux/actions/User";
import {useNavigate} from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate();
    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(clearUser());
        redirect("/");
    }, [])
    return null;
}

export default Logout;
