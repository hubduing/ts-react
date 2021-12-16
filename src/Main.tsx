import React, { Component } from "react";
import { App } from "./App";
import { Hello } from "./components/Hello";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Back from "./components/Back";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Vendors from "./components/Vendors";

export interface MainProps
{
    app: App;
}

export class Main extends Component<MainProps, {}>
{
    constructor(props: MainProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <>
                {/*<Preloader></Preloader>*/}
                <Header></Header>
                <Banner></Banner>
                <Vendors></Vendors>


                {/*<Intro></Intro>*/}
                {/*<Portfolio></Portfolio>*/}
                {/*<Blog></Blog>*/}
                {/*<Back></Back>*/}
                {/*<Footer></Footer>*/}

            </>
        );
    }
}
