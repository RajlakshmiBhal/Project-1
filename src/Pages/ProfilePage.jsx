import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const { name, email, role } = location.state || {};
  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
