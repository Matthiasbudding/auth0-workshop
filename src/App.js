import "./App.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  // TODO: Haal isAuthenticated en isLoading op via useAuth0()
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  // TODO: Geef de gebruiker feedback dat de app aan het laden is

  return (
    <>
      {
        // TODO: Als de gebruiker NIET is ingelogd, toon welkom en login-knop anders toon je het profielcomponent
        isLoading ? (
          <div className="loading">Loading...</div>
        ) : isAuthenticated ? (
          <div className="profile">Profile Component</div>
        ) : (
          <div className="welcome">
            <h1>Welcome to the App!</h1>
            <button
              className="login-button"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          </div>
        )
      }
    </>
  );
}

export default App;
