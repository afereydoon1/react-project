import React from "react";
import {render} from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {Store} from "./Redux/store";


const root = render(<Provider store={Store}><App/></Provider>,document.getElementById("root"));