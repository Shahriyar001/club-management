import React from 'react';

const NoticeCard = ({ notice }) => {
    const { date, message } = notice
    return (
        <div className=" my-3">
            <div className="card-body">
                <h2 className="card-title">{date}</h2>
                <p>{message}</p>

            </div>
        </div>
    );
};

export default NoticeCard;