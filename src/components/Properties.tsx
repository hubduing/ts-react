import React from 'react';

const Properties = () => {
    const properties = [
        {id: 1, title: 'Go Fast', text: 'Boosted is known for its premium performance boards offering a next-level experience.'},
        {id: 2, title: 'Go Far', text: 'With optional extended battery life, you can get wherever you need to go reliably.'},
        {id: 3, title: 'Go Safe', text: 'Safety is a #1 priority for Boosted, always wear a helmet when riding.'},
        {id: 4, title: 'Built to Last!', text: 'Boosted products are engineered to last for years and are extremely reliable.'}
    ]
    return (
        <section className="properties d-flex align-items-center justify-content-around">
            <ul className="properties__items">
                {properties.map((item) => (
                    <li key={item.id}>
                        <div className="properties__image"></div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default Properties;