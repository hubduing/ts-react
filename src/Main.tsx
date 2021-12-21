import React, { Component } from "react";
import { App } from "./App";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import {Banner} from "./components/Banner";
import Vendors from "./components/Vendors";
import {Button} from "./components/Button";
import PreviewShop from "./components/PreviewShop";
import Specifications from "./components/Specifications";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import Separator from "./components/Separator";
import Properties from "./components/Properties";
import Footer from "./components/Footer";
import Copy from "./components/Copy";
import Slider from "./components/Slider";

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
                    sectionClasses="banner banner-h _img"
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
                    sectionClasses="banner banner-hh _img"
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
                <Specifications/>
                <Gallery/>
                <Video/>
                <Separator/>
                <Properties/>

                <h2 className="title-slider">Looking for Accessories?</h2>
                <Slider/>

                <Footer/>
                <Copy/>
            </>
        );
    }
}
