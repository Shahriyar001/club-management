import React from 'react';

const CupCard = ({ cup }) => {
    const { title, img } = cup;
    return (
        <div className="card  shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="text-xl text-center">{title}</p>

            </div>
        </div>
    );
};

export default CupCard;