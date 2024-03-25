import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({applied}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, salary, contact_information} = applied;
    return (
        <div className='flex justify-between items-center bg-gray-100 px-10 py-10 my-5'>
            <div className='flex items-center gap-5'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl font-bold'>{job_title}</h1>
                        <h2 className='text-xl'>{company_name}</h2>
                    </div>
                    <div className='flex gap-5 my-3'>
                        <button className="btn btn-outline">{remote_or_onsite}</button>
                        <button className="btn btn-outline">{job_type}</button>
                    </div>
                    <div>
                        <p className='text-xl'>{salary}</p>
                        <p className='text-xl'>{contact_information.address}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/Job/${id}`}>
                    <button className="btn btn-neutral">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJob;