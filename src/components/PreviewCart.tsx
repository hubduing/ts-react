import React, { Component } from "react";


export interface Preview
{
    title: string;
    description: string;
    urlImage: string;
}
export class PreviewCart extends Component<Preview, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className="preview__cart">
                <img src={this.props.urlImage} className="preview__image" alt="skate"/>
                <div>
                    <div className="preview__icon text-white"></div>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}