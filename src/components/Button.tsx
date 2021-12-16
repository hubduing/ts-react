import React, { Component } from "react";

export class Button extends Component<{}>
{
    public render(): JSX.Element
    {
        return (
            <button type="button" className="btn btn-danger banner__btn">
                {this.props.children}
            </button>
        );
    }
}