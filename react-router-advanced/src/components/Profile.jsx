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

        
    </div>

  )
}

export default Profile;