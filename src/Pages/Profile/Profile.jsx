import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css"

const Profile = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData || !userData.isLoggedIn) {
    navigate('/register');
    return null;
  }

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <>
      <div className='profile-background'>
        <div className='profile-page'>
          <div className='profile-head-sec'>
            <div className='profile-page-icon'>
              <i className="fa-solid fa-user pp-icon"></i>
            </div>
            <h1 className='profile-heading'>User Profile</h1>
          </div>
          <div className='profile-details'>
            <div className='profile-info-sec'>
              <p className='profile-info'>Name</p>
              <p className='user-details'>{userData.name}</p>
            </div>
            <div className='profile-info-sec'>
              <p className='profile-info'>Email</p>
              <p className='user-details'>{userData.email}</p>
            </div>
            <div className='profile-info-sec'>
              <p className='profile-info'>Phone Number</p>
              <p className='user-details'>{userData.phone}</p>
            </div>
            <div className='profile-info-sec'>
              <p className='profile-info'>Address</p>
              <p className='user-details'>{userData.address}</p>
            </div>
            <button className='profile-to-home' onClick={handleNavigateHome}>
              <i className="fa-solid fa-house pp-home-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
