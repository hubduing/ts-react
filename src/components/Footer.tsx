import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget fw-about">
                            <img src="img/footer-logo.png" alt=""/>
                                <p>Velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti. Donec
                                    congue vel justo eget malesu ada. In arcu justo, sagittis consequat pulvinar.</p>
                                <div className="fw-social">
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-behance"></i></a>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget resent-post">
                            <h2 className="fw-title">Recent Posts</h2>
                            <div className="rp-item">
                                <h4>Paris Fashion Week</h4>
                                <span>20 January 2019</span>
                            </div>
                            <div className="rp-item">
                                <h4>About Our Fashion App</h4>
                                <span>20 January 2019</span>
                            </div>
                            <div className="rp-item">
                                <h4>Simple Blog Post</h4>
                                <span>20 January 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget">
                            <h2 className="fw-title">Usefull Links</h2>
                            <ul>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Subscribe</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget contact-widget">
                            <h2 className="fw-title">Contact</h2>
                            <ul>
                                <li><span>Address:</span>Main Str, no 23, New York</li>
                                <li><span>Phone:</span>+546 990221 123</li>
                                <li><span>Mail:</span>model@contact.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a
                href="https://colorlib.com" target="_blank">Colorlib</a>

            </div>
        </footer>
    )
}
export default Footer;