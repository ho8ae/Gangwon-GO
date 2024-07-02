import React from 'react';
import Nav from '../Introduce/Nav';
// import Header from '../Introduce/Header';
import FeedbackModal from '../Introduce/FeedbackModal';
import CommunitySection from '../Introduce/CommunitySection';
// import Footer from '../Introduce/Footer';


const Introduce = () => {
    return (
        <div>
            <Nav />
            <div id="page-content" className="masthead introduce-container bg-white">
                <FeedbackModal />
                
                <CommunitySection />
            </div>
            
        </div>
    );
};

export default Introduce;
