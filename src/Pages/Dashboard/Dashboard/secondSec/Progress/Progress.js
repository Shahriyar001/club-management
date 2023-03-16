import React from 'react';

const Progress = () => {
    return (
        <div className='card bg-base-100 shadow-lg mt-5 mr-2 pb-20'>
            <div className='flex'>
                <div className='ml-20 mt-20'>
                    <div className="radial-progress bg-primary w-40  h-40 text-primary-content border-4 border-primary" style={{ "--value": 70 }}>70%</div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mt-20'>Winning Ration</h2>
                </div>
            </div>
            <div className='flex m-8'>
                <div className='ml-5'>
                    <p>2019</p>
                    <p>2020</p>
                    <p>2021</p>
                </div>
                <div className='grid grid-cols-1 mt-1 ml-2'>

                    <progress className="progress my-1 w-56" value="10" max="100"></progress>
                    <progress className="progress my-1 w-56" value="40" max="100"></progress>
                    <progress className="progress my-1 w-56" value="70" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Progress;