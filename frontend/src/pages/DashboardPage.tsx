
import React from 'react';
import Header from '../components/Header';

const DashboardPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="mt-5">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </>
  );
};

export default DashboardPage;
