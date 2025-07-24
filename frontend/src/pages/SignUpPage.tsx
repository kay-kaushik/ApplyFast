import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body p-5">
            <h3 className="card-title text-center mb-4">Create Your Account</h3>
            <form>
              <div className="form-group mb-3">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group mb-3">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
              <div className="text-center mt-3">
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;