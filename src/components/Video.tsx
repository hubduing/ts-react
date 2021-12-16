import React from "react";
import {VideoFrame} from './VideoFrame';

const Video = () => {
    return (
        <section className="video">
            <div className="content d-flex align-items-center video__box">
                <VideoFrame
                    url='https://www.youtube.com/embed/E7wJTI-1dvQ'
                ></VideoFrame>
                <VideoFrame
                    url='https://www.youtube.com/embed/E7wJTI-1dvQ'
                ></VideoFrame>
            </div>
        </section>
    )
}
export default Video;
