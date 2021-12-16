import React from 'react';
import {PreviewCart} from "./PreviewCart";

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="gallery__image d-flex align-items-center justify-content-center">
                <PreviewCart
                    title="Shop Boosted Stealth"
                    description="IN STOCK"
                    urlImage="./images/shop-skate/shop-skate5.jpg"
                    divClass=""
                    previewCartClass="preview__cart gallery-size _img"
                />
                <PreviewCart
                    title="Shop Boosted Plus"
                    description="IN STOCK"
                    urlImage="./images/shop-skate/shop-skate6.jpg"
                    divClass=""
                    previewCartClass="preview__cart gallery-size _img"
                />
                <PreviewCart
                    title="Shop Boosted Mini"
                    description="IN STOCK"
                    urlImage="./images/shop-skate/shop-skate7.jpg"
                    divClass=""
                    previewCartClass="preview__cart gallery-size _img"
                />
            </div>
        </section>
    )
}
export default Gallery;