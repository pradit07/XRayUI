import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "../../../styles/styles";
import ReactImageMagnify from "react-image-magnify";
import ZoomPad from "./zoomPad";
import * as crudAction from "../../../actions/crudAction";
// import videojs from 'video.js/dist/video';

const style = {
  container: styles.container,
  video: styles.video
};

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      VideoSrc: null
    };
  }

  componentDidMount() {
    // document.addEventListener('keydown', this.handleKeyPress);
    // var video = document.querySelector("#videoElement")
    // if (navigator.mediaDevices.getUserMedia) {
    // navigator.mediaDevices.getUserMedia({video: {width:1024,height: 768 }})
    // .then(function(stream) {
    //     video.srcObject = stream;
    // })
    // .catch(function(err) {
    //     console.log(err)
    // })
    // }
    // navigator.mediaDevices.getUserMedia({video:true},this.handleVideo,this.videoError)
    // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||  navigator.mozGetUserMedia ||  navigator.msGetUserMedia || navigator.oGetUserMedia
    // if(navigator.getUserMedia){
    //      navigator.getUserMedia({video:true},this.handleVideo,this.videoError)
    // }
    // else{
    //     console.log("getUser Media Fail")
    // }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  reset() {
    crudAction.usb({ data: "0" });
  }

  handleKeyPress(e) {
    if (e.keyCode === 48 || e.keyCode === 96) {
      this.reset();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        {/* <video 
                className={classes.video} 
                style={{width: '100%', maxHeight: '-webkit-fill-available'}} 
                autoPlay 
                id="videoElement">
                </video> */}
        {/* <img className={classes.video} src={this.state.videoSrc}
                alt="Loading Stream..." style={{width: '100%', maxHeight: '-webkit-fill-available'}}></img> */}
        {/* <img className={classes.video} src="http://192.168.1.131:8080/?action=stream&amp;amp;ignored.mjpg" 
                alt="Loading Stream..." style={{width: '100%', maxHeight: '-webkit-fill-available'}}></img> */}
        {/* <img className={classes.video} src="http://31.208.34.120:81/videostream.cgi?user=admin&pwd="></img> */}
        {/* <video className={classes.video} src={'http://localhost:8080/video'} autoPlay muted /> */}
        {/* <source src={'http://localhost:8080/video.ogg'} /> */}
        {/* This browser does not support the video tag. */}
        {/* </video> */}
        <video
          style={{ width: "100%", maxHeight: "-webkit-fill-available" }}
          className={classes.video}
          autoPlay
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* <ReactImageMagnify {...{
                    smallImage: {
                        isFluidWidth: true,
                        src: "http://192.168.1.131:8080/?action=stream&amp;amp;ignored.mjpg"
                    },
                    largeImage: {
                        src: "http://192.168.1.131:8080/?action=stream&amp;amp;ignored.mjpg",
                        width: 3200,
                        height: 1800
                    },
                    enlargedImagePosition: 'over'
                }} /> */}
        {/* {this.state.display} */}
      </div>
    );
  }
}

export default withStyles(style)(Stream);
