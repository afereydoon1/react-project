import {applyMiddleware, compose, createStore} from "redux";
import {Reducers} from "../reducers";
import thunk from "redux-thunk";
import {getAllCourses} from "../actions/Courses";

export const Store = createStore(Reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//initialize
Store.dispatch(getAllCourses(),)

//subscribe
Store.subscribe(() => console.log(Store.getState()))