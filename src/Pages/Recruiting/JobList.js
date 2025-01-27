import React, { useState, useEffect } from 'react';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posted jobs from the server
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs'); // Backend route for jobs
        console.log('Response:', response);  // Add a log to check the response object
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        console.log('Data:', data);  // Check the data returned from the server
        setJobs(data.jobs); // Store jobs in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);  // Empty dependency array ensures this runs once on component mount

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="job-list-container">
      <h2>Posted Jobs</h2>
      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job-item">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.companyName}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Deadline:</strong> {job.deadline}</p>
              <p><strong>Category:</strong> {job.jobCategory}</p>
              <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
              {job.companyLogo && <img src={`http://localhost:5000/uploads/${job.companyLogo}`} alt="Company Logo" />}
              <p><strong>Description:</strong> {job.description}</p>
            </div>
          ))
        ) : (
          <p>No jobs posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
