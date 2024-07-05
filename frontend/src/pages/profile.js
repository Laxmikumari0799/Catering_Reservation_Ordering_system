import React from 'react';
import './Profile.css';

const Profile = () => {
  // Fetch user profile data from Firebase
  return (
    <div className="profile">
      <h2>My Profile</h2>
      <p>Email: user@example.com</p>
      {/* Add more profile details here */}
    </div>
  );
}

export default Profile;
