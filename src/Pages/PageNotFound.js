import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    const style = {
        height: '100vh',
    };
    return (
        <div style={style} className="d-flex align-items-center">
            <div className="d-flex justify-content-center w-100">
                <h4>404 </h4>
                <h2> - !! - </h2>
                <p> This page could not be found.</p>
                ______
                <Link to="/">
                    <p>Go Home Page</p>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
