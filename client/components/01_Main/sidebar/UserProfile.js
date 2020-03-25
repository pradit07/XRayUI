import React from "react";
import User from "../../../../public/user.png";
import styles from "../../../styles/styles";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  withStyles,
  Button,
  DialogContentText,
  DialogContent,
  Typography
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authAction from "../../../actions/authAction";
import { getLocalStorage } from "../../../utils/storageUtil";
import Logo from "../../../../public/lta-singapore.jpg";

function msToTime(duration) {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}

const style = {
  root: styles.up_root,
  user_profile: styles.up_img,
  text: styles.up_text,
  btn: styles.up_btn,
  content: styles.up_content,
  title: styles.up_title
};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleLogOut() {
    this.props.actions.logout();
  }

  render() {
    const { classes } = this.props;

    const divstyle = {
      display: "flex",
      flexDirection: "row"
    };

    const divtitle = {
      marginRight: 5,
      fontWeight: "bold"
    };

    return (
      <div className={classes.root}>
        <div>
          <p className={classes.text}>Hi,<br/> {getLocalStorage("username")}</p>
        </div>
        <div>
          <Button className={classes.btn} fullWidth onClick={this.handleOpen}>
            <img src={User} className={classes.user_profile} />
          </Button>
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle className={classes.title}>Usage Statistics</DialogTitle>
            <DialogContent className={classes.content}>
              <div style={divstyle}>
                <Typography variant="subtitle1" style={divtitle}>
                  Username :
                </Typography>
                <Typography variant="subtitle1" style={{ marginRight: 10 }}>
                  {getLocalStorage("username")}
                </Typography>
                <Typography variant="subtitle1" style={divtitle}>
                  Log In Time :
                </Typography>
                <Typography variant="subtitle1">
                  {getLocalStorage("logIntime")}
                </Typography>
              </div>
              <div style={divstyle}>
                <Typography variant="subtitle1" style={divtitle}>
                  Pause for Inspection :
                </Typography>
                <Typography variant="subtitle1">
                  {msToTime(getLocalStorage("stopTime"))}
                </Typography>
              </div>
              <div style={divstyle}>
                <Typography variant="subtitle1" style={divtitle}>
                  Conveyor Belt Speed :
                </Typography>
                <Typography variant="subtitle1">0.3 m/s</Typography>
              </div>
              <div style={divstyle}>
                <Typography variant="subtitle1" style={divtitle}>
                  Conveyor Belt Distance Covered :
                </Typography>
                <Typography variant="subtitle1">2 meters</Typography>
              </div>
              <DialogActions>
                <Button color="primary" onClick={this.handleLogOut}>
                  LOG OUT
                </Button>
                <Button color="secondary" onClick={this.handleClose}>
                  CANCEL
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, authAction), dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(style)(UserProfile));
