import React from "react";
import {VideoFrame} from './VideoFrame';

const Video = () => {
    return (
        <section className="video">
            <div className="content d-flex align-items-center video__box">
                <VideoFrame
                    url='https://www.youtube.com/embed/AuCoYZvlO7U'
                ></VideoFrame>
                <VideoFrame
                    url='https://www.youtube.com/embed/2erHR49jktg'
                ></VideoFrame>
            </div>
        </section>
    )
}
export default Video;
