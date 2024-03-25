const getStoreJobApplication = () => {
    const storeJobApplication = localStorage.getItem('job-applications');
    if(storeJobApplication){
        return JSON.parse(storeJobApplication);
    }
    return [];
}

const saveJobApplication = (id) => {
    const storedJobApplications = getStoreJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}
export {getStoreJobApplication, saveJobApplication}