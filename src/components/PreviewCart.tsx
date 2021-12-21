import React, { Component } from "react";


export interface Preview
{
    title: string;
    description: string;
    urlImage: string;
    divClass: string;
    previewCartClass: string
}
export class PreviewCart extends Component<Preview, {}>
{
    public render(): JSX.Element
    {
        return (
            <div className={this.props.previewCartClass}>
                <img src={this.props.urlImage} className="preview__image" alt="skate"/>
                <div>
                    <div className={this.props.divClass}></div>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
