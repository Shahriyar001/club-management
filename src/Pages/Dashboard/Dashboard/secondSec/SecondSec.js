import React from 'react';
import Notice from './Notice/Notice';
import Progress from './Progress/Progress';

const SecondSec = () => {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <Notice></Notice>
            </div>
            <div className='w-1/2'>
                <Progress></Progress>
            </div>
        </div>
    );
};

export default SecondSec;