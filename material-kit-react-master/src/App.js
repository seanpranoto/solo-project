import React from 'react';
import { Router } from "@reach/router";

import "assets/scss/material-kit-react.scss?v=1.9.0";

import LandingPage from "views/LandingPage/LandingPage.js";
import Rate from "views/Rate/Rate";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";

const dashboardRoutes = [];

export const App = (props) => {
    const { ...rest } = props;
    return (
        <>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Rate The Professor"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Router>
                <LandingPage path="/" />
                <Rate path="/rate/:id" />
            </Router>
        </>
    )
}
