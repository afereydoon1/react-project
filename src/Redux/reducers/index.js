import {combineReducers} from "redux";
import {CoursesReducer} from "./Courses";
import {CourseReducer} from "./Course";
import {UserReducer} from "./User";

export const Reducers = combineReducers({
    courses:CoursesReducer,
    course:CourseReducer,
    user:UserReducer
})