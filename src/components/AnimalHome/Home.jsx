import React from "react";
import Nav from "./Nav";
import MainBody from "./MainBody";
import Header from './Header'
import FeedbackModal from "./FeedbackModal";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>

            <Nav />
            <Header />
            <MainBody />
            <FeedbackModal/>
            <Footer/>
        </div>
    );
}

export default Home;