import React from 'react';
import {App} from "../App";

interface Prop
{
    id: number;
    url: string;
    title: string;
    text: string
}

const Properties = () => {

    const properties: Prop[] = [
        {id: 1, url: './images/speed.svg', title: 'Go Fast', text: 'Boosted is known for its premium performance boards offering a next-level experience.'},
        {id: 2, url: './images/path.svg', title: 'Go Far', text: 'With optional extended battery life, you can get wherever you need to go reliably.'},
        {id: 3, url: './images/light.svg', title: 'Go Safe', text: 'Safety is a #1 priority for Boosted, always wear a helmet when riding.'},
        {id: 4, url: './images/shield.svg', title: 'Built to Last!', text: 'Boosted products are engineered to last for years and are extremely reliable.'}
    ]

    return (
        <section className="properties">
            <div className="container">
                <ul className="row properties__items justify-content-around">
                    {properties.map((item) => (
                      <li className="properties__item col-xl-3 col-lg-4 col-md-6 col-sm-12 text-align-center" key={item.id}>
                          <div className="properties__image _img">
                              <img src={item.url} alt="properties"/>
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                      </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default Properties;
