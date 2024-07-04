import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Helmet } from 'react-helmet';
import Intro from './components/Intro/Intro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduce from './components/Introduce/Introduce';
import Main from './components/Main/Main';

import AnimalTest from './components/AnimalTest/Test';
import AnimalHome from './components/AnimalHome/Home';
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Helmet>


        {/* 원래 HTML에서의 link 요소들 */}
        <link rel="preconnect" href="/fonts/fonts.gstatic.com/index.html" />
        <link
          href="/fonts/fonts.googleapis.com/css27803.css?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="/fonts/fonts.googleapis.com/css2fcc1.css?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="/fonts/fonts.googleapis.com/css24a49.css?family=Kanit:ital,wght@0,400;1,400&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="/fonts/fonts.googleapis.com/css21ca1.css?family=Noto+Sans+KR:wght@100..900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="/fonts/fonts.googleapis.com/css2155e.css?family=Black+Han+Sans&amp;family=Noto+Sans+KR:wght@100..900&amp;display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/main" element={<Main />} />

        <Route path="/test" element={<AnimalTest />} />
        <Route path="/home" element={<AnimalHome />} />


      </Routes>

    </Router>
  );
}

export default App;
