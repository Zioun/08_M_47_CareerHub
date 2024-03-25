import React from 'react';
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Home = () => {
    return (
        <div className='container m-auto'>
            <Hero></Hero>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;