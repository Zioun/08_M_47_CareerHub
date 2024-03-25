import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstore";

const Details = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const int = parseInt(id);
  const job = jobs.find((job) => job.id === int);
  console.log(job);

  const {job_description, job_responsibility, educational_requirements, experiences, job_title, salary, contact_information} = job;

  const handleApplyJob = () => {
    saveJobApplication(int);
    toast.success("You have applied successfully!");
  } 
  return (
    <div className="container m-auto">
      <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold py-20">Details</h1>
            </div>
          </div>
        </div>
      <div className="grid grid-cols-12 gap-5 py-20">
        <div className="col-span-8">
          <span className="font-bold">Job Details : </span>
          <span>{job_description}</span>
          <br />
          <span className="font-bold">Job Responsibility : </span>
          <span>{job_responsibility}</span>
          <br />
          <span className="font-bold">Educational Requirements: </span>
          <span>{educational_requirements}</span>
          <br />
          <span className="font-bold">Experiences: </span>
          <span>{experiences}</span>
          <br />
        </div>
        <div className="col-span-4">
          <div className="card card-compact bg-base-100 shadow-xl border">
            <div className="card-body">
              <h2 className="card-title">Job Details</h2>
              <hr />
              <div className="flex gap-3">
                <span className="font-bold">Salary : </span><span>{salary}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold">Job Title : </span><span>{job_title}</span>
              </div>
              <h2 className="card-title">Contact Information</h2>
              <hr />
              <div className="flex gap-3">
                <span className="font-bold">Phone : </span><span>{contact_information.phone}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold">Email : </span><span>{contact_information.email}</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold">Address : </span><span>{contact_information.address}</span>
              </div>
            </div>
            <button onClick={handleApplyJob} className="btn btn-neutral">Apply Now</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
