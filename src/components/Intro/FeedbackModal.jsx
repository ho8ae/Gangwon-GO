import React from 'react';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';

const FeedbackModal = () => {
  return (
    <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-4">
            <div className="d-flex justify-content-end">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h4 className="text-center p-1 mb-2 mt-3">Contact Us</h4>
            <div className="form-text text-center mb-4">
              안녕하세요. Gangwon-Go입니다!<br />무엇을 도와드릴까요?
            </div>
            <form id="contactForm" action="../reportAction.jsp" method="post">
              <div id="nameInput" className="form-floating mb-2">
                <input id="name" type="text" className="form-control" name="reportTitle" />
                <label htmlFor="name">제목</label>
              </div>
              <div id="messageInput" className="form-floating mb-2">
                <textarea id="message" type="text" className="form-control" name="reportContent" style={{ height: '10rem' }}></textarea>
                <label htmlFor="message">문의사항</label>
              </div>
              <div id="registerFeedbackBtnDiv" className="d-grid gap-2 col-6 mx-auto mt-4 mb-4">
                <button type="submit" className="btn btn-primary">제출</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
