import React from 'react';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <a className="navbar-brand" href="/">Gangwon-GO!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        {/* Link to로 만들 수 있음! */}
                        <li className="nav-item"><a className="nav-link me-lg-3 " href="/introduce">소개</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" target="_blank" href="https://www.instagram.com/low_o80">인스타그램</a></li>
                    </ul>
                    <button className="btn btn-light-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <span className="small">Contact Us</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
