import React from "react";
import { Route, Routes ,BrowserRouter as Router, } from "react-router-dom";

import Login from "./pages/Login/Index";

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route path='/login' element = {<Login/>} />
            </Routes>
        </Router>
    );
};

export default Pages;