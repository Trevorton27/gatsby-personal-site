import React from 'react';
import ReactPlayer from "react-player";
import {Row} from 'react-bootstrap';
 
function IntroVideo() {
  return (
    <div className="vid-module">
      <h2 className="vid-title">Intro Video.</h2>
      <Row id="video-wrapper" className="justify-content-center">
      <ReactPlayer
        url="https://youtu.be/HLTABi2zoYQ"
      />
      </Row>
     
    </div>
  );
}
 
export default IntroVideo;