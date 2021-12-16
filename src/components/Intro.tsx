import React from "react";

const Intro = () => {
    return (
        <section className="intro-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <img src="img/intro-img.jpg" alt=""/>
                    </div>
                    <div className="col-lg-7 intro-text">
                        <span>Aenean quis velit pulvinar,</span>
                        <h2>"I firmly believe that with the right footwear one can rule the world."</h2>
                        <p>Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. Donec
                            congue vel justo eget malesuada. In arcu justo, sagittis consequat pulvinar quis, pretium
                            quis massa. Vestibulum nec nibh eu nisi rutrum iaculis. Pellentesque placerat sit amet leo
                            in vestibu-lum. Suspendisse quam neque, rutrum vel scelerisque eu</p>
                        <a href="#" className="site-btn sb-dark">Read More <i className="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro;