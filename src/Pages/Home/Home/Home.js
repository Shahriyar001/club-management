import React from 'react';
import Banner from '../Banner/Banner';
import Cups from '../Cups/Cups';
import Next from '../Next/Next';
import Result from '../Result/Result';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Result></Result>
            <Next></Next>
            <Cups></Cups>
        </div>
    );
};

export default Home;