import React from 'react';
import './Loader.css';

function Loader() {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <p className="loading-text">Loading Magic...</p>
        </div>
    );
}

export default Loader;