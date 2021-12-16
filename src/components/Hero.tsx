import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-slider owl-carousel">
                <div className="hs-item set-bg" data-setbg="img/slider/1.jpg" data-hash="slide-1">
                    <div className="container">
                        <h2>Style is forever</h2>
                        <a href="#" className="site-btn">Read More <i className="fa fa-angle-double-right"></i></a>
                    </div>
                    <div className="next-hs set-bg" data-setbg="img/slider/2.jpg">
                        <a href="#slide-2" className="nest-hs-btn">Next</a>
                    </div>
                </div>
                <div className="hs-item set-bg" data-setbg="img/slider/2.jpg" data-hash="slide-2">
                    <div className="container">
                        <h2>Style is forever</h2>
                        <a href="#" className="site-btn">Read More <i className="fa fa-angle-double-right"></i></a>
                    </div>
                    <div className="next-hs set-bg" data-setbg="img/slider/1.jpg">
                        <a href="#slide-1" className="nest-hs-btn">Next</a>
                    </div>
                </div>
            </div>
            <div className="hero-social-warp">
                <p>Follow us on Social MEdia</p>
                <div className="hero-social-links">
                    <a href="#"><i className="fa fa-behance"></i></a>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                </div>
            </div>
        </section>
    )
}
export default Hero;