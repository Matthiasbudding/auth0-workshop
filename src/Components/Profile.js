import React from "react";
import AuthButton from "./AuthButton";

const Profile = () => {
  // TODO: Haal user en isAuthenticated op via useAuth0
  const { user, isAuthenticated } = useAuth0();
  // TODO: Handel null-waarden af in de user-gegevens

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        {
          // TODO: Toon de gebruikersnaam/naam
          isAuthenticated ? (
            <h2>{user.name}</h2>
          ) : (
            <h2>Please log in to see your profile</h2>
          )
        }
      </div>
      <div className="profile-card">
        {
          // TODO: Toon de profielfoto met fallback naar placeholder en de naam van de user
          isAuthenticated ? (
            <img
              src={user.picture || "https://via.placeholder.com/150"}
              alt="Profile"
              className="profile-picture"
            />
          ) : (
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="profile-picture"
            />
          )
        }

        <div className="profile-info">
          {
            // TODO: Vul InfoRow componenten in met de gegevens van de gebruiker.
          }
        </div>

        <AuthButton />
      </div>
    </div>
  );
};

export default Profile;
