import React from "react";

class VideoTag extends React.Component {
  componentDidMount() {
    var video = document.querySelector("#videoElement");
    console.log(navigator.mediaDevices.enumerateDevices());

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
          console.log(stream);
          video.srcObject = stream;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <video autoPlay id="videoElement"></video>
      </div>
    );
  }
}

export default VideoTag;
