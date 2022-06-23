import React, {useState} from 'react';
import {loginUser} from "../../../services/userService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

import Input from "../../common/Input";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../../Redux/actions/User";
import jwtDecode from "jwt-decode";
import {isEmpty} from "lodash/lang";


const Login = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const redirect = useNavigate();

    const [allValues, setAllValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }



    const resetState = () => {
        setAllValues({email: "",password: ""});
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const user = allValues;

        try {
            const {status, data} = await loginUser(user);
            if (status === 200) {
                toast.success('ورود موفقیت آمیز بود', {position: 'top-right', closeOnClick: true});
                console.log(data);
                localStorage.setItem("token", data.token);
                dispatch(addUser(jwtDecode(data.token).user));
                resetState();
                redirect("/");
            }
        } catch (ex) {
            toast.error('ورود با خطا مواجه شد.', {position: 'top-right', closeOnClick: true});
        }
    }

    if(!isEmpty(user))  return redirect("/");

    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>
                <Helmet>
                    <title>ورود به سایت</title>
                </Helmet>

                <div className="form-layer">
                    <form onSubmit={handleSubmit}>

                        <Input name="email" value={allValues.email} iconClass="zmdi zmdi-email" placeholder="ایمیل" handleChange={handleChange}/>
                        <Input name="password" type="password" value={allValues.password} iconClass="zmdi zmdi-lock" placeholder="رمز عبور" handleChange={handleChange}/>

                        <div className="remember-me">
                            <label><input type="checkbox" name=""/> مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"/> رمز عبور خود را فراموش کرده ام !</a>
                            <a href=""> <i className="zmdi zmdi-account"/> عضویت در سایت </a>
                        </div>

                        <button className="btn btn-success"> ورود به سایت</button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default Login;
