
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <div className="row vh-100 align-items-center text-center">
        <div className="col">
          <h1>Welcome to ApplyFast</h1>
          <p className="lead">Your AI-powered job application assistant.</p>
          <a href="/signup" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
