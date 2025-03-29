import React, { useState } from "react";
import AuthContainer from "./components/AuthContainer";
import Dashboard from "./layouts/AdminLayout/AdminLayout";
import "./styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <AuthContainer onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
};

export default App;
