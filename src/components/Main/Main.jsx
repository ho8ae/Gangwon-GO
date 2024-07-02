import React from 'react';
import Nav from '../Main/Nav';
import SearchBar from '../Main/SearchBar';
import Banner from '../Main/Banner';
import MapSection from '../Main/MapSection';
import TopAnimals from '../Main/TopAnimals';
import Footer from '../Main/Footer';
import FeedbackModal from './FeedbackModal';

const Main = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <SearchBar />
            <MapSection />
            <TopAnimals />
            <FeedbackModal/>
            <Footer />
        </div>
    );
}

export default Main;
