import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1>Your Profile</h1>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" className="form-control" />
          </div>
          <div className="form-group">
            <label>LinkedIn Profile</label>
            <input type="url" className="form-control" />
          </div>
          <div className="form-group">
            <label>Portfolio/Website</label>
            <input type="url" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
        </form>

        <hr className="my-5" />

        <h2>Resume Management</h2>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="resumeFile" />
          <label className="custom-file-label" htmlFor="resumeFile">Choose file</label>
        </div>
        <button className="btn btn-secondary mt-3">Upload Resume</button>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;