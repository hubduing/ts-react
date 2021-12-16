import React from "react";
import {Button} from "./Button";

const Specifications = () => {
    return (
        <div>
            <section className="specifications specifications__content">
                <div className="content d-flex align-items-center justify-content-between specifications__items">
                    <div className="specifications__image _img">
                        <img src="./images/shop-skate/shop-skate3.jpg" alt="drive"/>
                    </div>
                    <div className="specifications__image _img">
                        <img src="./images/shop-skate/shop-skate4.jpg" alt="speed"/>
                    </div>
                    <div className="specifications__block">
                        <h2>Boosted Rev</h2>
                        <p>There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
                        <Button>
                            Shop Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Specifications;