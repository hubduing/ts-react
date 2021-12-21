import React from 'react';
import {PreviewCart} from "./PreviewCart";

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <div className="row">
                    <PreviewCart
                        title="Shop Boosted Stealth"
                        description="IN STOCK"
                        urlImage="./images/shop-skate/shop-skate5.jpg"
                        divClass=""
                        previewCartClass="col-xl-4 col-lg-6 col-sm-12 preview__cart gallery-size _img"
                    />
                    <PreviewCart
                        title="Shop Boosted Plus"
                        description="IN STOCK"
                        urlImage="./images/shop-skate/shop-skate6.jpg"
                        divClass=""
                        previewCartClass="col-xl-4 col-lg-6 col-sm-12 preview__cart gallery-size _img"
                    />
                    <PreviewCart
                        title="Shop Boosted Mini"
                        description="IN STOCK"
                        urlImage="./images/shop-skate/shop-skate7.jpg"
                        divClass=""
                        previewCartClass="col-xl-4 col-lg-6 col-sm-12 preview__cart gallery-size _img"
                    />
                </div>
            </div>
        </section>
    )
}
export default Gallery;