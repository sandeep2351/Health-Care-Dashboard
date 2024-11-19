import React from 'react';
import './Navbar.css'; // Importing the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Navbar container with the 'navbar' class */}
      <div className="navbar-title">Healthcare Dashboard</div> {/* Title of the navbar */}
      <div className="navbar-buttons"> {/* Container for the buttons */}
        <button className="navbar-button">Login</button> {/* Login button */}
        <button className="navbar-button">Signup</button> {/* Signup button */}
      </div>
    </nav>
  );
};

export default Navbar; // Exporting Navbar component for use in other parts of the app
