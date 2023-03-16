import React from 'react';

const BannerCard = ({ card }) => {
    const { name, number, img } = card;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{number}</p>

            </div>
        </div>
    );
};

export default BannerCard;