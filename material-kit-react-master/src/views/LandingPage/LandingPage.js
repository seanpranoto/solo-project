import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";


export default function LandingPage(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <>
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your College Journey Starts With Us.</h1>
              <h4>
                Our site enables you to rate and review every professor in a school of your choice. Our goal is to help you find the best professor.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch video
                <i className="material-icons md-48">play_circle_outline</i>
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
