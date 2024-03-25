import React from 'react';
import userImage from '../../assets/images/user.png';
const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className=' w-[500px]' src={userImage} alt="User" />
                    <div className='w-[570px]'>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;