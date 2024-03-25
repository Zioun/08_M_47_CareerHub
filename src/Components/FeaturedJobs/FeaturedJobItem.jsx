import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobItem = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} = job;
    return (
        <div className="col-span-6 card card-compact bg-base-100 shadow-xl border py-5">
          <div>
            <img className="ml-5" src={logo} alt="img" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-5">
                <button className="btn btn-outline">{remote_or_onsite}</button>
                <button className="btn btn-outline">{job_type}</button>
            </div>
            <div className="flex">
                <p>{contact_information.address}</p>
                <p>{salary}</p>
            </div>
            <div>
                <Link to={`Job/${id}`}><button className="btn btn-neutral">View Details</button></Link>
            </div>
          </div>
        </div>
        
    );
};

export default FeaturedJobItem;