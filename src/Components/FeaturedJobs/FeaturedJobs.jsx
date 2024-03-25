import React, { useEffect, useState } from 'react';
import FeaturedJobItem from './FeaturedJobItem';

const FeaturedJobs = () => {
    const [job, setJob] = useState([]);
    const [cutData, setCutData] = useState(4);
    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJob(data))
    },[])
    return (
        <div className="mb-20">
      <div className="text-center m-auto mt-20">
        <h1 className="text-[48px]">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-12 mt-5 gap-5 mx-auto">
        {
          job.slice(0, cutData).map(job => <FeaturedJobItem key={job.id} job={job}></FeaturedJobItem>)
        }
      </div>
      <div className={`flex justify-center mt-10 ${cutData === job.length ? 'hidden' : ''}`}>
        <button className="btn btn-neutral" onClick={() => setCutData(job.length)}>See All Jobs</button>
      </div>
    </div>
    );
};

export default FeaturedJobs;