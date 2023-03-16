import React from 'react';

const MsgCard = ({ mssg }) => {
    const { email, msg } = mssg;
    return (
        <div>
            <div className="chat chat-start my-2">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xu5deRsNTGJwV2qkcMN4-r_q2O3_mMYprrIQufUMrf12fOKYm4a0l1y0QKls_TQqgV0&usqp=CAU" />
                    </div>
                </div>
                <div className="chat-header">
                    {email}

                </div>
                <div className="chat-bubble chat-bubble-primary text-xl">{msg}</div>

            </div>
        </div>
    );
};

export default MsgCard;