import React from 'react';
import Navbar from './Navbar';
// import './Header.css'; // Assuming you have some CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title">My Portfolio</h1>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
