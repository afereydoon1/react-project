import React, {Fragment} from 'react';
import {useLocation} from "react-router-dom";

import TopNav from "../components/Navs/TopNav";
import Header from "../components/common/Header";
import MainNave from "../components/Navs/MainNave";
import Footer from "../components/common/Footer";
import {Helmet} from "react-helmet";

const MainLayout = ({children}) => {

    const location  = useLocation();

    return (
        <Fragment>
            <Helmet>
                <title> صفحه اصلی </title>
            </Helmet>
            <div className="landing-layer">
                <div className="container">
                    <TopNav/>
                    {location.pathname === '/' ? <Header/> : null}
                </div>
            </div>

            <MainNave/>

            <main id="home-page">
                <div className="container">
                    {children}
                </div>
            </main>

            <Footer/>
        </Fragment>
    );
}

export default MainLayout;
