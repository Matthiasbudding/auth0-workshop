const AuthButton = () => {
  // TODO: Haal loginWithRedirect, logout en isAuthenticated op
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    // TODO: roep loginWithRedirect aan
    loginWithRedirect({
      appState: {
        targetUrl: window.location.pathname,
      },
    });
  };

  const handleLogout = () => {
    // TODO: roep logout aan met returnTo: window.location.origin
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <div>
      {
        // TODO: Toon "Log In" of "Log Out" knop afhankelijk van isAuthenticated
        isAuthenticated ? (
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        ) : (
          <button onClick={handleLogin} className="login-button">
            Log In
          </button>
        )
      }
    </div>
  );
};

export default AuthButton;
