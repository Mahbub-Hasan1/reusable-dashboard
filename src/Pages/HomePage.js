import React from 'react';
import Navbar from '../Components/ShareComponents/Navbar';

const HomePage = () => {
    return (
        <div className="homePage">
            <Navbar />
            <div className="row">
                <div className="col-md-9">main component</div>
                <div className="col-md-3">main component</div>
            </div>
        </div>
    );
};

export default HomePage;
