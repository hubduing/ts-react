import React from "react";
import {Button} from "./Button";

const Specifications = () => {
    return (
        <div>
            <section className="specifications specifications__content">
                <div className="container">
                    <div className="row specifications__items justify-content-center">
                        <div className="col-xl-4 col-lg-8 col-sm-12 mb-3 specifications__image _img">
                            <img src="./images/shop-skate/shop-skate3.jpg" alt="drive"/>
                        </div>
                        <div className="col-xl-4 col-lg-8 col-sm-12 mb-lg-3 specifications__image _img">
                            <img src="./images/shop-skate/shop-skate4.jpg" alt="speed"/>
                        </div>
                        <div className="col-xl-3 col-lg-8 col-sm-12 mb-lg-3 specifications__block">
                            <h2>Boosted Rev</h2>
                            <p>There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
                            <Button>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Specifications;
