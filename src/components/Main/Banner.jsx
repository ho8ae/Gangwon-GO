import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);

  const handleConfirm = () => {
    navigate('/test'); // 원하는 페이지로 이동
  }

  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 text-center">
          <p className={`display-5 fw-bold text-dark introduce-container ${showText ? 'fadeIn' : ''}`}>
            내가 만약에 동물로 태어났다면?
          </p>
          <a className="display-10 fw-bold text-decoration-none opacity-25 navbar-brand" href="/home">
            이미 했다면 이 글을 클릭하세요!
          </a>
          <br />
          <button className="btn mt-5 btn-yellow btn-lg animate__animated animate__bounce" onClick={() => {
            handleConfirm();
            setShowText(true); // 버튼 클릭 시 텍스트가 나타나도록 상태 변경
          }}>
            확인하러 가기!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
