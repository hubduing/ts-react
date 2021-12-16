import React from "react";
import {PreviewCart} from "./PreviewCart";

const PreviewShop = () => {
    return (
        <section className="preview">
            <h1>Looking for Boosted Boards, or Boosted Revs?</h1>
            <p>Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.</p>
            <div className="preview__box d-flex justify-content-center align-items-center">
                <PreviewCart
                    title="Shop Boosted Boards"
                    description="In Stock"
                    urlImage="./images/shop-skate/shop-skate1.jpg"
                />
                <PreviewCart
                    title="Shop Boosted Boards"
                    description="In Stock"
                    urlImage="./images/shop-skate/shop-skate2.jpg"
                />
            </div>
        </section>
    )
};
export default PreviewShop;