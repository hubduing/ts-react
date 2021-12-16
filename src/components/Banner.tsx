import React from 'react';
import {Button} from "./Button";

const Banner = () => {
    return (
        <section className="banner">
            <img src="./images/banner.jpg" alt="banner"/>
            <h1>Welcome to Boosted USA</h1>
            <p>The Holy Grail of Electric Skateboards and One REVolutionary Scooter</p>
            <div className="banner__box">
                <Button>
                    Boosted REVS
                </Button>
                <Button>
                    Boosted Boards
                </Button>
            </div>
        </section>
    )
}
export default Banner;