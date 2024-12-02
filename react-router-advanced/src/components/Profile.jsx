import { Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    const { path } = useRouteMatch();
  return (
    <div>
        <h2>Profile</h2>

        <ul>
                <li>
                    <Link to="details">Details</Link>
                </li>
                <li>
                    <Link to="settings">Settings</Link>
                </li>
        </ul>
        <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

        
    </div>

  )
}

export default Profile;