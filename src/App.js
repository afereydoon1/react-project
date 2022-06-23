import React, {useEffect} from 'react';

import RouteComponent from "./containers/RouteComponent";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";


const App = () => {

    useEffect(() => {
        require("../src/Utils/script");
    },[]);

    return (
        <BrowserRouter>
            <RouteComponent/>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
