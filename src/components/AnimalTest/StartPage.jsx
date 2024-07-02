import React from 'react';

const StartPage = ({ onStartClick }) => {
  return (
    <div className="container-fluid mt-5">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm " id="mainNav">
        <div className="container px-1">
          <a className="navbar-brand" href="/">Gangwon-GO!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu <i className="bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item"><a className="nav-link me-lg-3" href="/introduce">소개</a></li>
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
      <div className='text-center mt-5 bg-light-secondary'>
        <img src="/images/성격로고2.png" className='mt-4 ' alt="Responsive image" />

      </div>

      <div className="text-center" style={{ paddingTop: '100px' }}>
        <p className='mt-5 text-white'>d</p>
        
        <h1 className='mt-5 brd-cont-box'>나는 어떤 유형일까?</h1>
        
        <button className="btn btn-primary mt-3" onClick={onStartClick}>Start Test</button>
        
      </div>
    </div>
  );
}

export default StartPage;
