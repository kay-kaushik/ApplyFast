import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface JobApplication {
  id: number;
  company: string;
  title: string;
  status: string;
}

const JobTrackerPage: React.FC = () => {
  const [jobs, setJobs] = useState<JobApplication[]>([
    { id: 1, company: 'Google', title: 'Software Engineer', status: 'Applied' },
    { id: 2, company: 'Facebook', title: 'Product Manager', status: 'Interviewing' },
    { id: 3, company: 'Amazon', title: 'Data Scientist', status: 'Offer' },
  ]);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">Job Application Tracker</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Company</th>
              <th>Job Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.title}</td>
                <td>{job.status}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger ms-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default JobTrackerPage;