import React, {useEffect} from 'react';
import MainLayout from "../Layouts/MainLayout";
import {Route, Routes} from "react-router-dom";
import Login from "../components/auth/Login/Login";
import Logout from "../components/auth/Login/Logout";
import Register from "../components/auth/Register/Register";
import UserProfile from "../components/profile/UserProfile";
import SingleCourse from "../components/Courses/SingleCourse";
import Archive from "../components/Courses/Archive";
import Courses from "../components/Courses/Courses";
import NotFound from "../components/common/NotFound";
import {useDispatch, useSelector} from "react-redux";
import {paginate} from "../Utils/paginate";
import jwtDecode from "jwt-decode";
import {addUser, clearUser} from "../Redux/actions/User";


const AppRoutes = () => {
  const courses = useSelector(state => state.courses);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const indexCourses = paginate(courses, 1, 8)

  useEffect(() => {
    const token = localStorage.getItem("token");
    //decode token
    if (token) {
      const decodedToken = jwtDecode(token);
      const dateNow = Math.floor(Date.now() / 1000);
      //checked if token was expired
      if (decodedToken.exp < dateNow) {
        localStorage.removeItem("token");
        dispatch(clearUser());
      }
      else {
        dispatch(addUser(decodedToken.user));
      }
    }
  }, []);
  return (
      <MainLayout>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user-profile" element={<UserProfile/>}/>
          <Route path="/single-course/:id" exact element={<SingleCourse/>}/>
          <Route path="/archive" exact element={<Archive/>}/>
          <Route path="/" exact element={<Courses courses={indexCourses}/>}/>
          <Route path="*" exact element={<NotFound/>}/>
        </Routes>
      </MainLayout>
  );
}

export default AppRoutes;
