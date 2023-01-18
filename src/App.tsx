import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import HomePage from "views/HomePage";
import ContactPage from "views/ContactPage";
import FormPage from "views/FormPage";
import LoginPage from "views/Auth/Login";
import ProtectedRoute from "ultil/ProtectedRoute";

const Navigation = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/contact">contact</Link>
    <Link to="/form">form</Link>
    <Link to="/login">login</Link>
  </nav>
);

function App() {
  const [user, setUser] = React.useState("");

  const handleLogin = () => setUser("robin");
  const handleLogout = () => setUser("");
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {user ? (
          <button onClick={handleLogout}>Sign Out</button>
        ) : (
          <button onClick={handleLogin}>Sign In</button>
        )}
        <Routes>
          <Route index element={<ContactPage />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="home" element={<HomePage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
