import React from "react";
import {PreviewCart} from "./PreviewCart";

const PreviewShop = () => {
    return (
        <section className="preview">
            <div className="preview__text">
                <h1>Looking for Boosted Boards, or Boosted Revs?</h1>
                <p className="preview__desc">Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.</p>
            </div>
            <div className="preview__box d-flex justify-content-center align-items-center">
                <PreviewCart
                    title="Shop Boosted Boards"
                    description="In Stock"
                    urlImage="./images/shop-skate/shop-skate1.jpg"
                    divClass="preview__icon text-white"
                    previewCartClass="preview__cart preview__cart-size _img"
                />
                <PreviewCart
                    title="Shop Boosted Boards"
                    description="In Stock"
                    urlImage="./images/shop-skate/shop-skate2.jpg"
                    divClass="preview__icon text-white"
                    previewCartClass="preview__cart preview__cart-size _img"
                />
            </div>
        </section>
    )
};
export default PreviewShop;