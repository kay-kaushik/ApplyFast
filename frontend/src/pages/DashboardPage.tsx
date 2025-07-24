import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DashboardPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Applications Sent</h5>
                <p className="card-text display-4">12</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Interviews Scheduled</h5>
                <p className="card-text display-4">3</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Offers Received</h5>
                <p className="card-text display-4">1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2>Application Analytics</h2>
          {/* Placeholder for chart */}
          <div className="bg-light p-5 text-center">Chart will be here</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;