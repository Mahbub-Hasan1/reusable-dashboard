import Container from '@material-ui/core/Container';
import React from 'react';
import img1 from '../Assets/Images/Chart1.gif';
import img3 from '../Assets/Images/Chart2.gif';
import img2 from '../Assets/Images/Chart3.gif';
import img4 from '../Assets/Images/Chart4.png';
import Login from '../Components/Login/Login';
import Navbar from '../Components/ShareComponents/Navbar';

const HomePage = () => {
    return (
        <div className="homePage">
            <Navbar />
            <Container maxWidth="xl">
                <div className="row">
                    <div className="col-md-8 home_main row mt-2">
                        <div className="col-md-6">
                            <div className="card">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img src={img2}  alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img src={img3}  alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <img src={img4}  alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 card home_login_card">
                        <Login />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
