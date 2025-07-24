
import React from 'react';
import Header from '../components/Header';

const JobTrackerPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="mt-5">Job Tracker</h1>
        <p>Track your job applications here.</p>
      </div>
    </>
  );
};

export default JobTrackerPage;
