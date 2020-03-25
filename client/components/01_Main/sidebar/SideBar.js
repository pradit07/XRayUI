import React from "react";
import { withStyles } from "@material-ui/core";
import UserProfile from "./UserProfile";
import Logo from "../../../../public/lta-singapore.jpg";
import styles from "../../../styles/styles";
import LogTab from "./LogTab";

const style = {
  root: styles.sidebar_root,
  lta_logo: styles.lta_logo,
  status: styles.status
};

class SideBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.status}>
          <LogTab />
        </div>
        <UserProfile />
      </div>
    );
  }
}

export default withStyles(style)(SideBar);
