import React from 'react';
import PropTypes from 'prop-types';

const ResultPage = ({ result }) => {
  const { type, description } = result;

  return (
    <div className="container-fluid mt-5">
      <div className="result-page container text-center">
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




        <div className='text-center mt-1 bg-light-secondary'>
          null
        </div>
        <div className='container-fluid px-3 mt-4 text-center '>
        <div className="brd_cont_box">
          <h1 className='introduce-container mb-4'>당신의 성격 유형은 {type}입니다!</h1>
          <a href='/home'>
          <img src={`/images/mbti/${type}.jpeg`} style={{width: '570px'}}alt={type} className="img-thumbnail" />
          </a>
          <p className='fs-7'>(자세히 보고 싶다면 이미지를 클릭하세요!)</p>
          <p className='fs-1 introduce-container mt-4 mb-5'>{description}</p>
         

          </div>
        </div>
      </div>

    </div>
  );
}

ResultPage.propTypes = {
  result: PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultPage;
