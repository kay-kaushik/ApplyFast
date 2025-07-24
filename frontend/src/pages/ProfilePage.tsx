
import React from 'react';
import Header from '../components/Header';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="mt-5">Profile</h1>
        <p>Manage your profile and resume here.</p>
      </div>
    </>
  );
};

export default ProfilePage;
