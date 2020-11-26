import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// @material-ui/icons
import CustomInput from "../../../components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import axios from "axios";
import StickyHeadTable from "components/Table/Table";
import { InputAdornment } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const [uni, setUni] = useState("");
  const [professors, setProfessors] = useState([]);

  const onChange = e => setUni(e.target.value);

  const onClick = () => {
    axios.get(`http://localhost:8000/api/professor/${uni}`)
      .then(profs => setProfessors(profs.data))
      .catch(err => console.log(err));
  }

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Type In Your University Name</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <GridItem xs={12} sm={12} md={4} style={{ marginLeft: "27rem" }}>
              <CustomInput
                onChangeProps={onChange}
                labelText="University Name"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (<InputAdornment position="end"><i className="material-icons md-48">home_work</i></InputAdornment>)
                }}
              />
              <Button variant="contained"
                onClick={onClick} color="primary">Search</Button>
            </GridItem>
          </GridItem>
          <StickyHeadTable professors={professors} />
        </GridContainer>
      </div>
    </div>
  );

}
