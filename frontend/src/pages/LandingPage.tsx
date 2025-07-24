import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container-fluid text-center bg-primary text-white p-5">
        <h1 className="display-4">Automate Your Job Search with AI</h1>
        <p className="lead">ApplyFast helps you find and apply to jobs faster than ever before.</p>
        <Link to="/signup" className="btn btn-light btn-lg">Get Started for Free</Link>
      </div>

      <div className="container text-center p-5">
        <h2 className="mb-4">How It Works</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>1. Create Your Profile</h3>
            <p>Fill out your profile and upload your resume once.</p>
          </div>
          <div className="col-md-4">
            <h3>2. AI-Powered Job Matching</h3>
            <p>Our AI finds the best jobs for you based on your skills and experience.</p>
          </div>
          <div className="col-md-4">
            <h3>3. One-Click Apply</h3>
            <p>Apply to jobs with a single click and track your applications.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light text-center p-5">
        <h2 className="mb-4">Features</h2>
        <div className="row">
          <div className="col-md-4">
            <h5>Smart Job Matching</h5>
          </div>
          <div className="col-md-4">
            <h5>Automated Application Filling</h5>
          </div>
          <div className="col-md-4">
            <h5>Real-Time Tracking</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;