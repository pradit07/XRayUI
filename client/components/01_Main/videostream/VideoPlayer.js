import React from "react";
import videojs from "video.js/dist/video";
import styles from "../../../styles/styles";
import { withStyles } from "@material-ui/core";

const style = {
  video: styles.video
};

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div data-vjs-player>
          <video
            ref={node => (this.videoNode = node)}
            className={classes.video}
          ></video>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(VideoPlayer);
