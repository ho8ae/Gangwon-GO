import React, { useState, useEffect } from 'react';

const TestPage = ({ questions, onAnswer, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [fadeInElements, setFadeInElements] = useState(false);

  useEffect(() => {
    setFadeInElements(true); // 컴포넌트가 처음 마운트될 때 애니메이션 효과 활성화
  }, []);

  const handleNextQuestion = () => {
    if (selectedOption !== '') {
      onAnswer(currentQuestion, selectedOption);
      setSelectedOption('');
      // fade-in 애니메이션 재설정을 위해 false로 설정 후 다음 질문을 설정합니다.
      setFadeInElements(false);
      if (currentQuestion < questions.length - 1) {
        // 다음 질문으로 이동
        setCurrentQuestion(currentQuestion + 1);
        // 다음 질문이 렌더링되고 나서 fade-in 애니메이션을 활성화합니다.
        setTimeout(() => {
          setFadeInElements(true);
        }, 300); // 예: 0.3초 후에 fadeInElements를 true로 설정하여 애니메이션 효과를 보이도록 합니다.
      } else {
        onFinish();
      }
    } else {
      alert('아직 응답하지 않은 항목이 있습니다!');
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const percentageCompleted = ((currentQuestion + 1) / questions.length) * 100;

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

      <div className='text-center mt-1 bg-light-secondary'>
        <img src="/images/성격로고2.png" className='mt-4 ' alt="Responsive image" />
      </div>

      <div className='container-fluid px-5 mt-3 text-center '>
        <div className="brd_cont_box">
          <h1 className={fadeInElements ? 'fadeIn' : ''}>Question {currentQuestion + 1}</h1>
          <p className={`fs-1 ${fadeInElements ? 'fadeIn' : ''}`}>{questions[currentQuestion].question}</p>
          <div className={`progress `}>
            <div className="progress-bar " role="progressbar" style={{ width: `${percentageCompleted}%` }} aria-valuenow={percentageCompleted} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p className={`fs-5 `}>{`Progress: ${percentageCompleted.toFixed(2)}%`}</p>
        </div>

        <div className="mt-4 d-flex justify-content-center flex-wrap mb-3">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="option-container">
              <input
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={(e) => setSelectedOption(e.target.value)}
                id={`option${index}`}
              />
              <label htmlFor={`option${index}`} className="large-label w-100 h-100 d-flex align-items-center justify-content-center fs-3">
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <div>
          {currentQuestion > 0 && (
            <button onClick={handlePrevQuestion} className='btn-xl fs-4 me-3'>Prev</button>
          )}
          <button onClick={handleNextQuestion} className='btn-xl fs-4'>Next</button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
