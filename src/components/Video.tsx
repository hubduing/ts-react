import React from "react";
import {VideoFrame} from './VideoFrame';

const Video = () => {
    return (
        <section className="video">
            <div className="container">
                <div className="row video__box justify-content-center">
                  <VideoFrame
                    url='https://www.youtube.com/embed/AuCoYZvlO7U'
                  ></VideoFrame>
                  <VideoFrame
                    url='https://www.youtube.com/embed/2erHR49jktg'
                  ></VideoFrame>
                </div>
            </div>
        </section>
    )
}
export default Video;
