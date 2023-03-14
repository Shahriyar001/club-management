import React from 'react';
import img from "../../../assets/images/ronaldo.png";
import img2 from "../../../assets/images/football.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} alt='' className="w-full" />
                <div className="absolute  transform -translate-y-1/2  top-3/4 mb-10 w-1/2 mx-auto ml-32">
                    <p className='text-white'>In 2022</p>
                    <h1 className='text-5xl font-bold text-white bg-blue-500 p-3 my-3'>Top ranker of the season</h1>
                    <p className='text-xl text-white
                    '>The splash second division side plan to build a team solely made up of players trained at the club. <br /> and have invested in a huge youth academy program.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full" />
                <div className="absolute  transform -translate-y-1/2  top-3/4 mb-10 w-1/2 mx-auto ml-32">
                    <p className='text-white'>In 2022</p>
                    <h1 className='text-5xl font-bold text-white bg-blue-500 p-3 my-3'>Top passer of the season</h1>
                    <p className='text-xl text-white
                    '>The splash second division side plan to build a team solely made up of players trained at the club. <br /> and have invested in a huge youth academy program.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;