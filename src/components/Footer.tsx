import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content d-flex text-left justify-content-between">
        <a className="footer__logo d-block" href="#"></a>
        <ul>
          <li><span>Explore</span></li>
          <li>Electric Skateboards</li>
          <li>Electric Scooters</li>
          <li>Accessories</li>
          <li>FAQs</li>
          <li>Warranty</li>
          <li>Quick Start Guide</li>
          <li>Contact</li>
          <li>Gift Card</li>
          <li>Accessibility Statement</li>
        </ul>
        <ul>
          <li><span>About Boosted USA</span></li>
          <li className="mb-2">
            Boosted empowers people everywhere to commute across their cities,
            campuses, and communities in ways that were never before possible.
            Boosted is solving one of the biggest problems people face each
            day: transportation.
          </li>
          <li>CaliRides LLC - DBA Boosted USA</li>
          <li>1281 Andersen Drive Ste. K</li>
          <li>San Rafael, CA 94901</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
