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
import {Banner} from "./components/Banner";
import Vendors from "./components/Vendors";
import {Button} from "./components/Button";
import PreviewShop from "./components/PreviewShop";

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
                <Banner
                    sectionClasses="banner banner-h"
                    h2Classes=""
                    subTitle=""
                    url="./images/banner.jpg"
                    title="Welcome to Boosted USA"
                    text="The Holy Grail of Electric Skateboards and One REVolutionary Scooter"
                >
                    <Button>
                        Boosted REVS
                    </Button>
                    <Button>
                        Boosted Boards
                    </Button>
                </Banner>
                <Vendors></Vendors>
                <PreviewShop></PreviewShop>
                <Banner
                    sectionClasses="banner banner-hh"
                    h2Classes="bold"
                    subTitle="High-performance"
                    url="./images/banner-skate.jpg"
                    title="Electric Skateboards"
                    text="Cruising campus, going to work or getting through that long list of errands has never been easier or more fun."
                >
                    <Button>
                        Shop Now
                    </Button>
                </Banner>

                {/*<Intro></Intro>*/}
                {/*<Portfolio></Portfolio>*/}
                {/*<Blog></Blog>*/}
                {/*<Back></Back>*/}
                {/*<Footer></Footer>*/}

            </>
        );
    }
}
