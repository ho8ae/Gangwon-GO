import React from 'react';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';


const Footer = () => {
  return (
    <aside className="text-center bg-gradient-primary-to-secondary ">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xl-8">
            <div className="fs-1 text-white mb-4 introduce-container">"강원도에는 무슨 동물이 나올까?"</div>
            <address>
              © 2024 웹 페이지 제작자<br></br>
              <a href="#" className='text-decoration-none text-dark'>h20205151@glab.hallym.ac.kr</a>
            </address>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Footer;
