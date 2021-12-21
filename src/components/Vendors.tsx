import React from "react";

const Vendors = () => {
    return (
        <section className="vendors">
            <ul className="d-flex justify-content-around align-items-center flex-wrap">
                <li className="mb-3 mt-3"><a href="#"><img src="./images/vendor1.svg" alt="Electrek"/></a></li>
                <li className="mb-3 mt-3"><a href="#"><img src="./images/vendor2.svg" alt="TechCrunch"/></a></li>
                <li className="mb-3 mt-3"><a href="#"><img src="./images/vendor3.svg" alt="Popular Mechanics"/></a></li>
                <li className="mb-3 mt-3"><a href="#"><img src="./images/vendor4.svg" alt="Wired"/></a></li>
            </ul>
        </section>
    )
}
export default Vendors;