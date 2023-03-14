import React from 'react';
import img from "../../../assets/images/download (1).png";
import img1 from "../../../assets/images/download.png";

const Result = () => {
    return (
        <div className='text-center mt-14 mb-10'>
            <h1 className='text-5xl'>Last match result</h1>
            <h2 className='text-3xl text-blue-600 my-4'>Primary League</h2>
            <div className='flex justify-center my-5 '>
                <h2 className='text-3xl text-blue-600 mr-5 mt-8'>Titan FC</h2>
                <div className='flex items-center'>
                    <img src={img1} className="w-28" alt="" />
                </div>
                <h2 className='text-3xl text-blue-600 mt-8 mx-2'>2</h2>
                <h2 className='text-5xl text-blue-600 mt-8 mx-5'>VS</h2>
                <h2 className='text-3xl text-blue-600 mt-8 mx-2'>4</h2>
                <div className='flex items-center'>
                    <img src={img} className="w-28" alt="" />
                </div>
                <h2 className='text-3xl text-blue-600 ml-5 mt-8'>Borcell FC</h2>
            </div>
            <p className='text-center mr-5'>December 19, 2022 | 9am <br /> Green park</p>
            <div>
                <button className='btn btn-primary px-5 text-center text-white mr-4 mt-4'>Read More</button>
            </div>
        </div>
    );
};

export default Result;