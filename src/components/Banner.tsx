import React, {Component} from 'react';

export interface BannerProps
{
    title: string;
    text: string;
    url: string;
    subTitle: string;
    sectionClasses: string;
    h2Classes: string;
}
export class Banner extends Component<BannerProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <section className={this.props.sectionClasses}>
                <img src={this.props.url} alt="banner"/>
                <h2 className={this.props.h2Classes}>{this.props.title}</h2>
                <p>{this.props.subTitle}</p>
                <p>{this.props.text}</p>
                <div className="banner__box">
                    {this.props.children}
                </div>
            </section>
        );
    }
}