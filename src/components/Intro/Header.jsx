import React from 'react';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';


const Header = () => {
   

    return (
        <header className="masthead">
            <div className="container px-5" >
                <div className="row gx-5 align-items-center ">
                    <div className="col-lg-6">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 className="display-1 lh-1 mb-3 introduce-container ">
                                함경북도에는 어떤 동물이?! <br /> Gangwon-GO!
                            </h1>
                            <p className="lead fw-normal text-muted mb-5">
                                강원도에는 무슨 동물들이 있을까요?<br />확인하러 가보죠!
                            </p>
                            <div className="d-flex flex-column flex-lg-row align-items-center">
                                <a href="Main" className="btn btn-yellow btn-xl text-uppercase">메인 페이지로 가기</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="masthead-device-mockup">
                            
                                {/* <canvas id="canvas" width="400" height="500" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="click!"></canvas> */}
                                <img src="/images/강원고로고.png" style={{width: '700px' ,height: 'auto'} }  alt="" />
                            
                        </div>
                    </div>

                </div>
            </div>
            
        </header>
    );
};

export default Header;
