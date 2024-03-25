import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreJobApplication } from '../../Utility/localstore';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoreJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
        }
    },[])
    return (
        <div className='container m-auto'>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold py-20">Applied Jobs : {appliedJobs.length}</h1>
                    </div>
                </div>
            </div>
            <div>
                {
                    appliedJobs.map(applied => <AppliedJob key={applied.id} applied={applied}></AppliedJob>)
                }
                
            </div>
        </div>
    );
};

export default AppliedJobs;