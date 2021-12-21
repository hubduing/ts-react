import React, { Component } from "react";


export interface VideoFrameInterface
{
    url: string;
}
export class VideoFrame extends Component<VideoFrameInterface, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className="video__watch col-lg-6 col-md-12 mb-lg-3">
                <iframe src={this.props.url}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='100%'
                        height='304'
                />
            </div>
        );
    }
}
