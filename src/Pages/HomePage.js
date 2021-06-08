import Container from '@material-ui/core/Container';
import React from 'react';
import Login from '../Components/Login/Login';
import Navbar from '../Components/ShareComponents/Navbar';

const HomePage = () => {
    return (
        <div className="homePage">
            <Navbar />
            <Container maxWidth="xl">
                <div className="row">
                    <div className="col-md-3 card home_login_card">
                        <Login />
                    </div>
                    <div className="col-md-9 home_main mt-5">
                        <div className="card">
                            <h1>This is my dashboard</h1>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusamus beatae ipsum minus mollitia doloremque sunt omnis deserunt cumque qui, fuga dignissimos quod pariatur labore officiis earum perferendis, dicta quaerat.</h5>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default HomePage;
