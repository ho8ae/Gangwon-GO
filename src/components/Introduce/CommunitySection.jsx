import React from 'react';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';

const CommunitySection = () => {
    return (
        <div className="container px-5 py-5">
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                    <h2 className="fw-bold text-body-emphasis mt-1">Gangwon-Go!</h2>
                    <p className="text-body-secondary">
                        Gangwon-Go!는 강원도에 많은 동물들을 정리하고  <br />
                        싶어서 만들어진<span className="fw-bold text-light-potato"> 단반향성 웹 프로젝트</span> 입니다.
                        <br />
                    </p>
                    <a href="/main" className="btn btn-warning btn-lg fs-6 text-light">구경하러가기</a>
                </div>
                <div className="col">
                    <div className="row row-cols-1 row-cols-sm-2 g-4">
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-warning text-light fs-4 rounded-3">
                                <i className="bi bi-shop" width="1em" height="1em"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis mt-1">동물 위치 확인</h4>
                            <p className="text-body-secondary">지도를 통해 위치를 공유해 쉽게 장소를 확인할 수 있어요!</p>
                        </div>
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-warning text-light fs-4 rounded-3">
                                <i className="bi bi-pen" width="1em" height="1em"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis mt-1">강원도 동물 MBTI</h4>
                            <p className="text-body-secondary">성격 유형 검사를 통해 나와 어울리는 강원도 동물을 찾아보세요!</p>
                        </div>
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-warning text-light fs-4 rounded-3">
                                <i className="bi bi-robot" width="1em" height="1em"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis mt-1">AI 동물사전(준비 중)</h4>
                            <p className="text-body-secondary">동물에 대한 질문을 AI에게 물어보세요!</p>
                        </div>
                        <div className="col d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-warning text-light fs-4 rounded-3">
                                <i className="bi bi-youtube" width="1em" height="1em"></i>
                            </div>
                            <h4 className="fw-semibold mb-0 text-body-emphasis mt-1">동물을 구경하세요!</h4>
                            <p className="text-body-secondary">TOP3의 동물들을 유튜브 영상으로 함께 봐요!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunitySection;
