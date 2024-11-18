// src/components/UserProfile.jsx
import React, {useContext} from "react";
import { UserContext} from 'C:/Users/Mercy Asare/Desktop/alx-fe-reactjs/alx-react-app-props/src/components/UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

        return (
            <div>
                <h2>User Profile</h2>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
            </div>
        );
    };

export default UserProfile;