import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../Utility/localstore";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite == "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onside") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoreJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="container m-auto">
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold py-20">Applied Jobs</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <h1 className="text-2xl">Total Applied : {appliedJobs.length}</h1>
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(event) => handleJobFilter(event.target.value)}
          >
            <option value="all">All</option>
            <option value="remote">Remote</option>
            <option value="onside">Onside</option>
          </select>
        </div>
      </div>
      <div>
        {displayJobs.map((applied) => (
          <AppliedJob key={applied.id} applied={applied}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
