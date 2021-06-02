import React from 'react';

const Footer = () => (
    <footer className="text-center text-white">
        {/* -- Grid container -- */}
        <div className="container p-4 pb-0">
            {/* -- Section: Social media -- */}
            <section className="mb-4">
                {/* -- Facebook -- */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ background: '#3b5998' }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-facebook-f" />
                </a>

                {/* -- Twitter -- */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ background: '#55acee' }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-twitter" />
                </a>

                {/* -- Google -- */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ background: '#dd4b39' }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-google" />
                </a>

                {/* -- Instagram -- */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ background: '#ac2bac' }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-instagram" />
                </a>

                {/* -- Linkedin -- */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ background: '#0082ca' }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-linkedin-in" />
                </a>

                {/* -- Github -- */}
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ background: '#333333' }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-github" />
                </a>
            </section>
            {/* -- Section: Social media -- */}
        </div>
        {/* -- Grid container -- */}

        {/* -- Copyright -- */}
        <div className="text-center p-3 bg-footer">
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
                MDBootstrap.com
            </a>
        </div>
        {/* Copyright  */}
    </footer>
);

export default Footer;
