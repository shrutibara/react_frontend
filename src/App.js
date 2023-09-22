import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/admin';
import Blog from './pages/blog';
import Login from './login';
import MainPages from './components/MainPage';
import Signup from './signup';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const togglesignup = () => {
    setShowLogin(!showLogin)
  }


  const handleLogin = () => {

    setIsAuthenticated(true);
  };
  const handlelogout = () => {
    setIsAuthenticated(false)
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={showLogin ?
            (isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Login onLogin={handleLogin} togglesignup={togglesignup} />
            ))
            :

            (isAuthenticated ? (
              <Navigate to="/mainpage" />
            ) : (
              <Signup onLogin={handleLogin} togglesignup={togglesignup} />
            ))
          }
        />
        <Route
          path="/mainpage"
          element={isAuthenticated ? <MainPages onLogout={handlelogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/blog"
          element={isAuthenticated ? <Blog /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;