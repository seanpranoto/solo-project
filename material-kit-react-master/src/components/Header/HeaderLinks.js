/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "@reach/router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import { Button } from "@material-ui/core";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle";

import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <b>HOME</b>
            </Link>,
            {divider:true},
            !isAuthenticated &&(
            <Button onClick={() => loginWithRedirect()} simple className={classes.dropdownLink}>Log In / signup</Button>),
            isAuthenticated &&(
            <Button onClick={() => logout()} simple className={classes.dropdownLink}>Log Out</Button>
            )
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
        {isAuthenticated &&(
                          <ListItem className={classes.listItem}>
                          <CustomDropdown
                            caret={false}
                            dropdownHeader="My Profile"
                            buttonText={
                              <img
                                src={user.picture}
                                className={classes.img}
                                alt={user.name}
                              />
                            }
                            buttonProps={{
                              className:
                                classes.navLink + " " + classes.imageDropdownButton,
                              color: "transparent"
                            }}
                            dropdownList={[
                              `Name: ${user.name} `,
                              {divider:true},
                              `Nickname: ${user.nickname}`,
                              {divider:true},
                              `Email: ${user.email}`
                            ]}
                          />
                        </ListItem>
        )}
      </ListItem>
    </List>
  );
}
