import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import axios from "axios";
import ReadOnlyInput from "components/CustomInput/ReadOnlyInput";
import { navigate } from "@reach/router";

const useStyles = makeStyles(styles);

export default function Rate({ id }) {
    const [cardAnimaton, setCardAnimation] = useState("cardHidden");

    const [data, setData] = useState({});

    const [ratingI, setRatingI]=useState();

    const rating=(ratingI+data.rating)/2;

    const onClick=()=>{
        if(ratingI>0 && ratingI<11){
            axios.put(`http://localhost:8000/api/professor/${id}`, {
            prof:data.prof,
            uni:data.uni,
            rating:rating
        })
        .then(res=>navigate("/"))
        .catch(err=>console.log("err: ", err));
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/id/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

    const classes = useStyles();

    return (
        <>
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardBody>                           <ReadOnlyInput 
                                    value={data.prof} 
                                    id="prof" 
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                        inputProps={{
                                            type: "text",
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <People className={classes.inputIconsColor} />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                        <ReadOnlyInput
                                            value={data.uni}
                                            id="prof"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <i className="material-icons md-48">home_work</i>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                        min="1"
                                        max="10"
                                        onChangeProps={(e)=>setRatingI(parseInt(e.target.value))}
                                            labelText="Rating (1-10)"
                                            id="rating"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                min:"1",
                                                max:"10",
                                                type: "number",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <i className="material-icons md-48">leaderboard</i>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button onClick={onClick} simple color="primary" size="lg">
                                            Rate
                    </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </>
    );
}

