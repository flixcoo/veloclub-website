import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice.jsx';
import PrivacyPolicy from './pages/Datenschutz';
import NotFoundPage from './pages/NotFoundPage.jsx';

import './styles/App.styles.css';

const App = () => {
    return (
        <Router>
            <ScrollToTop/>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/impressum" element={<LegalNotice/>}/>
                    <Route path="/datenschutz" element={<PrivacyPolicy/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;