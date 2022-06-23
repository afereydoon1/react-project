import React, {useState} from 'react';
import {toast} from "react-toastify";
import {registerUser} from "../../../services/userService";
import Input from "../../common/Input";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";
import {isEmpty} from "lodash/lang";
import {useSelector} from "react-redux";

const Register = () => {

    const [allValues, setAllValues] = useState({
        fullname: '',
        email: '',
        password: '',
    });
    const redirect = useNavigate();
    const user = useSelector(state => state.user);

    const handleChange = e => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    const resetState = () => {
        setAllValues({fullname: "", email: "", password: ""});
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const user = allValues;

        try {
            const {status} = await registerUser(user);
            if (status === 201) {
                toast.success('کاربر با موفقیت ساخته شد', {position: 'top-right', closeOnClick: true});
                resetState();
            }
        } catch (ex) {
            toast.error('مشکلی در سمت سرور پیش آمده', {position: 'top-right', closeOnClick: true});
            console.log(ex);
        }


        console.log(user);
    }

    if(!isEmpty(user))  return redirect("/");

    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>
                <Helmet>
                    <title>ثبت نام در سایت</title>
                </Helmet>
                <div className="form-layer">

                    <form onSubmit={handleSubmit}>

                        <Input name="fullname" value={allValues.fullname} iconClass="zmdi zmdi-account" placeholder="نام و نام خانوادگی" handleChange={handleChange}/>
                        <Input name="email" type="email" value={allValues.email} iconClass="zmdi zmdi-email" placeholder="ایمیل" handleChange={handleChange}/>
                        <Input name="password" type="password" value={allValues.password} iconClass="zmdi zmdi-lock" placeholder="رمز عبور" handleChange={handleChange}/>


                        <div className="accept-rules">
                            <label><input type="checkbox" name=""/> قوانین و مقررات سایت را میپذیرم </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-assignment"/> قوانین و مقررات سایت !</a>
                            <a href=""> <i className="zmdi zmdi-account"/> ورود به سایت </a>
                        </div>

                        <button className="btn btn-success"> عضویت در سایت</button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default Register;
